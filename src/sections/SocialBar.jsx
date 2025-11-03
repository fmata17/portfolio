import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialBar() {
  return (
    <div className="fixed top-4 right-8 flex gap-5 z-50">
      <a
        href="https://github.com/fmata17"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg hover:text-accent-secondary transition text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/fredy-mata/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg hover:text-accent-primary transition text-2xl"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
