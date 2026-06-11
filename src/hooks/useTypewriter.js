import { useEffect, useState } from "react";

export default function useTypewriter(
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseAfterTyping = 1250,
  pauseAfterDeleting = 500,
) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  //   Effect to handle typing and deleting animation
  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }, pauseAfterDeleting);
    } else {
      timeout = setTimeout(
        () => {
          const nextText = isDeleting
            ? currentWord.slice(0, displayedText.length - 1)
            : currentWord.slice(0, displayedText.length + 1);

          setDisplayedText(nextText);
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ]);

  return displayedText;
}
