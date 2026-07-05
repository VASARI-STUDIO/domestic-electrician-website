import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, Zap } from 'lucide-react';
import { revealUp } from '../lib/motion';

export function TrustBar() {
  const stats = [
    { icon: <ShieldCheck size={32} className="text-primary" />, title: "Fully Licensed", subtitle: "QLD Lic: 84729" },
    { icon: <Star size={32} className="text-primary" />, title: "4.8 Star Rated", subtitle: "120+ Reviews" },
    { icon: <Clock size={32} className="text-primary" />, title: "Fast Response", subtitle: "Available 24/7" },
    { icon: <Zap size={32} className="text-primary" />, title: "10+ Years", subtitle: "Experience" },
  ];

  return (
    <section className="bg-dark text-white py-12 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:divide-x lg:divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...revealUp(index * 0.1)}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 bg-white/5 p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{stat.title}</h3>
              <p className="text-gray-400 font-medium">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
