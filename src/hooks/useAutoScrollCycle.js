import { useEffect } from "react";

const easeInOutCubic = (progress) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

export default function useAutoScrollCycle({
  scrollContainerRef,
  sectionRef,
  config,
}) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;

    if (!scrollContainer || !section) return undefined;

    let isSectionActive = false;
    let animationFrameId;
    let timeoutId;
    let lastFrameTime;
    let isPointerInteractionActive = false;

    const cancelScheduledWork = () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrameId);
      timeoutId = undefined;
      animationFrameId = undefined;
      lastFrameTime = undefined;
    };

    const getMaxScrollTop = () =>
      Math.max(0, scrollContainer.scrollHeight - scrollContainer.clientHeight);

    const isAtEnd = () =>
      scrollContainer.scrollTop >=
      getMaxScrollTop() - config.endTolerancePx;

    const returnToTop = () => {
      if (!isSectionActive) return;

      const startingScrollTop = scrollContainer.scrollTop;
      const startedAt = performance.now();

      const animateUp = (now) => {
        if (!isSectionActive) return;

        const progress = Math.min(
          (now - startedAt) / config.returnToTopDurationMs,
          1,
        );

        scrollContainer.scrollTop =
          startingScrollTop * (1 - easeInOutCubic(progress));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(animateUp);
        } else {
          scrollContainer.scrollTop = 0;
          animationFrameId = undefined;
        }
      };

      animationFrameId = window.requestAnimationFrame(animateUp);
    };

    const waitAtEndThenReturn = () => {
      cancelScheduledWork();
      timeoutId = window.setTimeout(returnToTop, config.endPauseMs);
    };

    const scrollDown = (now) => {
      if (!isSectionActive) return;

      if (lastFrameTime !== undefined) {
        const elapsedSeconds = Math.min((now - lastFrameTime) / 1_000, 0.1);
        scrollContainer.scrollTop = Math.min(
          getMaxScrollTop(),
          scrollContainer.scrollTop +
            config.downwardPixelsPerSecond * elapsedSeconds,
        );
      }

      lastFrameTime = now;

      if (isAtEnd()) {
        waitAtEndThenReturn();
        return;
      }

      animationFrameId = window.requestAnimationFrame(scrollDown);
    };

    const startScrollingDown = () => {
      cancelScheduledWork();

      if (!isSectionActive) return;

      if (isAtEnd()) {
        waitAtEndThenReturn();
        return;
      }

      animationFrameId = window.requestAnimationFrame(scrollDown);
    };

    const scheduleDownwardScroll = (delayMs) => {
      cancelScheduledWork();
      timeoutId = window.setTimeout(startScrollingDown, delayMs);
    };

    const handleUserInteraction = () => {
      if (!isSectionActive) return;
      scheduleDownwardScroll(config.interactionIdleMs);
    };

    const handlePointerDown = () => {
      isPointerInteractionActive = true;
      handleUserInteraction();
    };

    const handlePointerUp = () => {
      if (!isPointerInteractionActive) return;
      isPointerInteractionActive = false;
      handleUserInteraction();
    };

    const handleKeyDown = (event) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
        " ",
      ];

      if (scrollKeys.includes(event.key)) handleUserInteraction();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNowActive =
          entry.isIntersecting &&
          entry.intersectionRatio >= config.sectionVisibilityThreshold;

        if (isNowActive === isSectionActive) return;

        isSectionActive = isNowActive;
        cancelScheduledWork();

        if (isSectionActive) {
          scrollContainer.scrollTop = 0;
          scheduleDownwardScroll(config.initialDelayMs);
        }
      },
      { threshold: [0, config.sectionVisibilityThreshold] },
    );

    observer.observe(section);
    scrollContainer.addEventListener("wheel", handleUserInteraction, {
      passive: true,
    });
    scrollContainer.addEventListener("touchstart", handleUserInteraction, {
      passive: true,
    });
    scrollContainer.addEventListener("pointerdown", handlePointerDown);
    scrollContainer.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      cancelScheduledWork();
      observer.disconnect();
      scrollContainer.removeEventListener("wheel", handleUserInteraction);
      scrollContainer.removeEventListener("touchstart", handleUserInteraction);
      scrollContainer.removeEventListener("pointerdown", handlePointerDown);
      scrollContainer.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [config, scrollContainerRef, sectionRef]);
}
