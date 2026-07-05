import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { pressable } from '../lib/motion';

export function EmergencyBanner() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-primary text-dark rounded-3xl p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold mb-3"
            >
              Got an electrical emergency?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark/80 text-lg md:text-xl font-medium max-w-xl"
            >
              We are available 24/7. Don't wait—call us right now for immediate assistance.
            </motion.p>
          </div>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            {...pressable}
            href="tel:0400000000"
            className="relative z-10 shrink-0 bg-dark text-primary hover:bg-black font-bold text-lg sm:text-2xl py-4 sm:py-5 px-6 sm:px-10 rounded-full flex items-center justify-center gap-3 shadow-xl transition-colors duration-300 ease-out hover:shadow-2xl cursor-pointer w-full sm:w-auto"
          >
            <PhoneCall size={28} />
            Call 0400 000 000
          </motion.a>
          
        </div>
      </div>
    </section>
  );
}
