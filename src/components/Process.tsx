import { motion, useReducedMotion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp, ChevronRight } from 'lucide-react';
import { revealUp } from '../lib/motion';

export function Process() {
  const reduceMotion = useReducedMotion();
  const steps = [
    { 
      icon: PhoneCall, 
      title: "Request Quote", 
      desc: "Contact us online or call for a free, no-obligation quote." 
    },
    { 
      icon: ClipboardCheck, 
      title: "Inspection", 
      desc: "We visit your property to assess the job and provide expert advice." 
    },
    { 
      icon: Wrench, 
      title: "Installation", 
      desc: "Our licensed electricians complete the work safely and cleanly." 
    },
    { 
      icon: ThumbsUp, 
      title: "Job Done", 
      desc: "We test everything and ensure you're 100% satisfied." 
    },
  ];

  return (
    <section id="process" className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            {...revealUp()}
            className="text-4xl font-bold text-dark mb-4"
          >
            How We <span className="text-primary">Work</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">Simple, transparent, and professional from start to finish.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                {...revealUp(index * 0.15)}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting Arrow between steps (Desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.2) }}
                    className="hidden lg:flex absolute top-12 -right-6 lg:-right-8 w-12 lg:w-16 items-center justify-center text-gray-300 pointer-events-none"
                  >
                    <motion.div
                      animate={reduceMotion ? undefined : { x: [0, 8, 0] }}
                      transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.2 }}
                    >
                      <ChevronRight size={32} />
                    </motion.div>
                  </motion.div>
                )}

                {/* Animated Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border-4 border-light z-10 transition-colors duration-300 group-hover:border-primary/20">
                  <motion.div
                    animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={reduceMotion ? undefined : { repeat: Infinity, duration: 4, delay: index * 0.4, ease: "easeInOut" }}
                  >
                    <Icon size={36} className="text-primary" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray-600 px-4 md:px-0 lg:px-4">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
