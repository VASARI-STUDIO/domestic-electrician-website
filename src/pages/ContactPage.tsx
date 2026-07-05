import { Contact } from '../components/Contact';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { asset } from '../lib/asset';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | Spark Electrical South East QLD';
  }, []);

  return (
    <div className="pt-24 pb-12">
      {/* Team Image Banner */}
      <section className="container mx-auto px-6 md:px-12 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img
            src={asset('/team.webp')}
            alt="Spark Electrical Team"
            className="w-full h-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">We're here to help.</h1>
          </div>
        </motion.div>
      </section>

      {/* Reusable Contact Component */}
      <Contact />
    </div>
  );
}
