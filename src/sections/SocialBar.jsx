import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed top-4 right-4 sm:right-8 flex gap-4 sm:gap-5 z-50">
      <a
        href="https://github.com/fmata17"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg hover:text-accent-secondary transition
                   text-[5vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw]"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/fredy-mata/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg hover:text-accent-primary transition
                   text-[5vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw]"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
