import { motion } from "framer-motion";

import AboutImageCard from "./AboutImageCard";

export default function AboutImageGrid({ images }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.35 }}
      className="md:col-span-5 xl:col-span-4 min-h-0 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-2 lg:gap-3"
    >
      {images.map((image) => (
        <AboutImageCard key={image.src} image={image} />
      ))}
    </motion.div>
  );
}
