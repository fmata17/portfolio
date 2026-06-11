import { motion } from "framer-motion";

export default function HeroAvatar() {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: [1, 1.1, 1],
      }}
      whileHoverTransition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <img
        src="/profile.webp"
        alt="Fredy's avatar"
        className="
          rounded-full
          border-2
          border-accent-primary
          shadow-lg
          mb-4
          w-[10rem]
          h-[10rem]
          md:w-[15rem]
          md:h-[15rem]
        "
      />
    </motion.div>
  );
}
