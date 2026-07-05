import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { asset } from '../lib/asset';
import { revealUp } from '../lib/motion';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            {...revealUp()}
            className="text-4xl font-bold text-dark mb-4"
          >
            Residential <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            {...revealUp(0.1)}
            className="text-gray-600 text-lg"
          >
            We handle everything from simple repairs to complete home rewiring with the highest standards of safety and quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {servicesData.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index}>
              <motion.div
                {...revealUp(index * 0.05)}
                className="group relative h-full bg-light rounded-2xl p-8 overflow-hidden cursor-pointer flex flex-col shadow-sm lg:hover:shadow-xl transition-shadow duration-300 min-h-[320px]"
              >
                {/* Background Image Reveal (Always on for Mobile, Hover for Desktop) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={asset(service.hoverImage)}
                    alt={`${service.title} action shot`}
                    className="w-full h-full object-cover transition-transform duration-500 opacity-100 scale-100 lg:opacity-0 lg:scale-110 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Dark overlay (Always on for Mobile, Hover for Desktop) */}
                  <div className="absolute inset-0 bg-dark/80 transition-opacity duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full transition-transform duration-300 lg:group-hover:-translate-y-2">
                  <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-dark lg:group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white lg:text-dark lg:group-hover:text-white mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 lg:text-gray-600 lg:group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mt-auto pt-6 flex items-center gap-1.5 font-bold text-primary opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight size={18} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
