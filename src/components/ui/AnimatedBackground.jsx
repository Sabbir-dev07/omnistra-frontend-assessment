import { motion } from 'framer-motion';

const Blob = ({ color, size, top, left, delay, duration }) => (
  <motion.div
    className="absolute rounded-full blur-[140px] pointer-events-none opacity-[0.05]"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top,
      left,
    }}
    animate={{
      x: [0, 50, 0, -50, 0],
      y: [0, -30, 50, 20, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
    }}
    transition={{
      duration: duration || 15,
      repeat: Infinity,
      delay: delay || 0,
      ease: "linear"
    }}
  />
);

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Blob color="#4f46e5" size="800px" top="-10%" left="10%" duration={20} />
      <Blob color="#818cf8" size="600px" top="40%" left="60%" delay={2} duration={18} />
      <Blob color="#4f46e5" size="500px" top="70%" left="-5%" delay={4} duration={25} />
    </div>
  );
}
