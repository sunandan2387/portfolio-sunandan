import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-500/20 to-purple-600/20 z-50 origin-top"
      style={{ scaleY }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-600 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
    </motion.div>
  );
}
