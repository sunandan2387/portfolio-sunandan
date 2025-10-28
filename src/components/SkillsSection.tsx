import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import reactIcon from '../assets/React-icon.png';
import nextIcon from '../assets/next.png'
import tsIcon from '../assets/ts.png';
import jsIcon from '../assets/js.png';
import tailwindIcon from '../assets/tailw.png';
import reduxIcon from '../assets/redux.png';
import zustandIcon from '../assets/zustand.jpg';
import motionIcon from '../assets/motion.png';
import threeIcon from '../assets/three.png';
import d3Icon from '../assets/d3.png';
import flowIcon from '../assets/flow.png';
import odooIcon from '../assets/odoo.png';

const skills = [
  { name: 'React', icon: reactIcon, color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', icon: nextIcon, color: 'from-gray-700 to-gray-900' },
  { name: 'JavaScript', icon: jsIcon, color: 'from-yellow-600 to-amber-600' },
  { name: 'TypeScript', icon: tsIcon, color: 'from-blue-600 to-blue-700' },
  { name: 'Tailwind CSS', icon: tailwindIcon, color: 'from-cyan-400 to-teal-500' },
  { name: 'Redux', icon: reduxIcon, color: 'from-purple-600 to-purple-700' },
  { name: 'Zustand', icon: zustandIcon, color: 'from-orange-500 to-amber-600' },
  { name: 'Motion', icon: motionIcon, color: 'from-pink-500 to-rose-600' },
  { name: 'Three.js', icon: threeIcon, color: 'from-emerald-500 to-green-600' },
  { name: 'D3.js', icon: d3Icon, color: 'from-orange-600 to-red-600' },
  { name: 'React Flow', icon: flowIcon, color: 'from-green-500 to-emerald-600' },
  { name: 'Odoo', icon: odooIcon, color: 'from-pink-600 to-fuchsia-700' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="skill-card group relative"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />

                {/* Neon border glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${skill.color} blur-xl -z-10`} />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl"
                  >
                    <img className="h-8 w-8" src={skill.icon} alt="icon" />
                  </motion.div>
                  <h3 className="text-gray-800 dark:text-white text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Docker'].map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-4 py-2 border-indigo-500/30 text-gray-700 dark:text-gray-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
