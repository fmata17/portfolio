export const aboutRuntimeScrollConfig = Object.freeze({
  // How visible the About section must be before the panel is considered open.
  sectionVisibilityThreshold: 0.6,

  // Automatic scroll timing.
  initialDelayMs: 2_000,
  interactionIdleMs: 5_000,
  endPauseMs: 3_000,

  // Downward scroll speed and upward return animation duration.
  downwardPixelsPerSecond: 14,
  returnToTopDurationMs: 1_200,

  // Allows for fractional scroll positions near the bottom of the panel.
  endTolerancePx: 1,
});
