import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';

export function About() {
  const benefits = [
    "Fully licensed and insured",
    "Upfront, transparent pricing",
    "Clean and tidy workmanship",
    "Lifetime workmanship guarantee"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={asset('/team.webp')}
              alt="Our Electrician Team"
              className="w-full h-auto rounded-3xl shadow-xl object-cover"
              loading="lazy"
              decoding="async"
            />
            
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-8 bg-dark text-white p-6 rounded-2xl shadow-xl inline-block sm:block border border-gray-800">
              <p className="text-4xl font-extrabold text-primary mb-1">10+</p>
              <p className="font-bold">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-dark mb-6">
              Your South East QLD <span className="text-primary">Experts</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We started Spark Electrical with one goal: to provide homeowners with an electrical service they can actually rely on. No more waiting around for tradesmen who don't show up.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our team of licensed professionals treats your home with the utmost respect, delivering safe, modern, and high-quality electrical solutions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-dark font-medium">
                  <CheckCircle2 className="text-primary" size={24} />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-block bg-dark text-white hover:bg-black font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
              Meet The Team
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
