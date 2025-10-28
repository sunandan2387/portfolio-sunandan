import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Techneith',
    role: 'Frontend Developer',
    duration: 'Oct 2022 - Present',
    achievements: [
      'Develop and maintain responsive React/Next.js web applications, improving engagement and reducing load times via performance-focused architecture.',
      'Improve real-time dashboard performance by 70% using data chunking and GPU-accelerated charting; enable smooth, scalable interactions.',
      'Mentor junior developers and lead peer code reviews, upholding coding standards, maintainability, and best practicesacross projects.',
      'Collaborate with designers and backend teams to deliver features end-to-end, ensuring high UI quality, accessibility, and reliability.'
    ],
  },
  {
    company: 'Techasoft',
    role: 'Frontend Developer Intern',
    duration: 'Mar 2022 - Sep 2022',
    achievements: [
      'Collaborated with UI/UX designers and backend engineers to integrate interactive features seamlessly, aligning requirements, APIs, accessibility standards, and performance goals.',
      'Optimized performance using code splitting, lazy loading, caching, and Lighthouse guided audits, reducing bundle sizes, improving Time-to-Interactive significantly and accessibility.',
      'Implemented comprehensive unit, integration, and end-to-end tests with Jest, increasing code coverage, preventing regressions, and improving release reliability, engineering confidence.'
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 origin-top shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50"
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-24 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all"
                >
                  {/* Duration badge */}
                  <div className={`flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 mb-3`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>

                  <h3 className="text-2xl text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-indigo-600 dark:text-indigo-400 mb-3">
                    {exp.company}
                  </h4>
                  {/* Achievements */}
                  <ul className={`space-y-2 text-justify text-sm text-gray-700 dark:text-gray-300`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`text-indigo-500`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
