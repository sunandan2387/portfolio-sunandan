import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import pfp from '../assets/sunandan-pfp.png';
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 dark:from-slate-950 dark:via-gray-950 dark:to-slate-900">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* 3D Floating Ring */}
      <motion.div
        className="absolute right-1/4 top-1/3 hidden lg:block"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-32 h-32 rounded-full border-4 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.3)]" />
      </motion.div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
            >
              Sunandan
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl mb-6 text-gray-300"
            >
              Frontend Developer — React & Next.js
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              Crafting exceptional digital experiences with modern web technologies.
              Specialized in building performant, scalable applications with beautiful UIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border-2 border-indigo-500/50 text-white hover:bg-indigo-500/10 transition-all hover:border-indigo-400"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4"
            >
                <motion.a
                  href="https://github.com/sunandan2387"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
                >
                  <Github className="w-5 h-5" />
              </motion.a>
                              <motion.a
                  href="https://www.linkedin.com/in/sunandan2387/"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo with 3D ring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-indigo-500/30"
            />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 z-10" />
              <img
                src={pfp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-indigo-400"
                animate={{
                  y: [-20, -60, -20],
                  x: [0, 20 * (i - 1), 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${30 + i * 20}%`,
                  right: `${20 + i * 10}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
