import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { asset } from '../lib/asset';
import { revealUp, hoverLift } from '../lib/motion';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              {...revealUp()}
              className="text-4xl font-bold mb-4"
            >
              Our Recent <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p
              {...revealUp(0.1)}
              className="text-gray-400 text-lg"
            >
              Take a look at some of our recent projects across South East Queensland. We take pride in clean wiring and premium finishes.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={index}>
              <motion.div
                {...revealUp(index * 0.1)}
                {...hoverLift}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-800 cursor-pointer shadow-xl"
              >
                <img
                  src={asset(project.images[0])}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary font-bold mb-2 uppercase tracking-wider text-xs">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    {project.location}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
