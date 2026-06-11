// Motion animation configurations
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Card-level animation variants for entry
export const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

// Backdrop animation variants
export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Modal spring scaling variants
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 15,
    transition: {
      duration: 0.15,
    },
  },
};
