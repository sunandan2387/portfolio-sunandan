import { motion } from 'motion/react';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating sphere 1 */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating sphere 2 */}
      <motion.div
        className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-500/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating cube */}
      <motion.div
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-purple-500/10 backdrop-blur-sm"
        style={{
          borderRadius: '20%',
        }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating sphere 3 */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/15 to-indigo-600/15 blur-2xl"
        animate={{
          y: [0, 35, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );
}
