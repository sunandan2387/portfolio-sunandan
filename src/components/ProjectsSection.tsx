import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import ai from '../assets/ai.png';
import byteloom from '../assets/byteloom.png';
import techfinna from '../assets/techfinna.png';
import sound from '../assets/sound.png';

const projects = [
  {
    title: 'AI Dashboard Builder',
    description: 'Self-serve module: select tables/columns, compile datasets, and auto-generate interactive dashboards with AI; customizable charts, filters, and layouts.',
    image: ai,
    tech: ['React', 'Highcharts', 'Tailwind', 'React-flow'],
    link: 'https://demo.techfinna.com/create-dataset',
  },
  {
    title: 'Byteloom',
    description: 'Product website for the dashboard builder; fast, responsive, conversion-focused; implemented product storytelling, docs, CTAs, SEO, analytics, and CI/CD.',
    image: byteloom,
    tech: ['Next.js', 'Highcharts', 'Tailwind', 'Flowbite'],
    link: 'https://byteloom.ai',
  },
  {
    title: 'TechFinna',
    description: 'Technology news platform with a responsive, user-friendly interface; optimized for performance and seamless content delivery using modern web technologies. ',
    image: techfinna,
    tech: ['Next.js', 'Tailwind', 'Flowbite', 'Email.js'],
    link: 'https://techfinna.com ',
  },
  {
    title: 'Sound Effect Buttons',
    description: 'Play sound effects via an engaging, accessible UI with smooth animations; demonstrates modern frontend development, audio handling, and performance best practices. ',
    image: sound,
    tech: ['Next.js', 'Firebase', 'Tailwind', 'Email.js'],
    link: 'https://soundeffectbuttons.com',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a target="_blank" className="cursor-pointer" href={project.link}>
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              <Card className="overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Project image */}
                <motion.div
                  className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-600/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-gray-900 hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900/90 text-white hover:bg-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Glow border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-t-lg transition-all" />
                </motion.div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
