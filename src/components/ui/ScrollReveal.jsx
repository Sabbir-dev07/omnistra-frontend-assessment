import { motion } from 'framer-motion';
import { variants } from '../../utils/motion';

export default function ScrollReveal({ children, className = '', delay = 0, stagger = false }) {
  const variant = stagger ? variants.staggerContainer() : variants.scrollReveal;

  return (
    <motion.div
      variants={variant}
      initial="initial"
      whileInView="whileInView"
      viewport={variants.scrollReveal.viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
