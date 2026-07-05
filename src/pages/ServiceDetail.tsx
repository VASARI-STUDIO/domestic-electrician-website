import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, PhoneCall, ArrowLeft, Lightbulb, Zap, Battery } from 'lucide-react';
import { servicesData } from '../data/services';
import { useEffect, useState } from 'react';
import { ledSavings } from '../lib/ledSavings';
import { asset } from '../lib/asset';
import { enterUp, revealUp } from '../lib/motion';

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);
  const [ledCount, setLedCount] = useState(18);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Spark Electrical South East QLD`;
    }
  }, [id, service]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Annual LED savings for the interactive calculator (shared with project pages).
  const calc = service.calculatorData;
  const { kwh: savingsKwh, cost: savingsCost } =
    calc?.type === 'led'
      ? ledSavings(calc.oldWatts, calc.newWatts, ledCount)
      : { kwh: 0, cost: 0 };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Service Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold mb-8 transition-colors cursor-pointer">
          <ArrowLeft size={20} /> Back
        </button>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <motion.div
              {...enterUp()}
              className="bg-primary/20 text-primary-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            >
              {service.icon}
            </motion.div>
            <motion.h1
              {...enterUp(0.1)}
              className="text-4xl md:text-5xl font-extrabold text-dark mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p
              {...enterUp(0.2)}
              className="text-lg text-gray-600 mb-8"
            >
              {service.longDescription}
            </motion.p>
            <motion.div {...enterUp(0.3)}>
              <Link to="/contact" className="inline-flex bg-primary text-dark hover:bg-primary-dark font-bold text-lg py-4 px-8 rounded-full items-center gap-3 shadow-md transition-all duration-300 ease-out hover:scale-105">
                <PhoneCall size={24} />
                Get a Quote
              </Link>
            </motion.div>

            {/* Interactive LED Conversion Calculator Tool in Left Column */}
            {calc && (
              <motion.div
                {...enterUp(0.4)}
                className="mt-10 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 p-2.5 rounded-xl text-primary-dark">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-dark">LED Savings Tool</h3>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  See how much your household could save upgrading {calc.oldWatts}W halogens to {calc.newWatts}W LEDs. <span className="text-xs text-gray-500 block mt-0.5">(5 hrs/day at 36c/kWh tariff).</span>
                </p>
                
                <div className="mb-6 bg-light p-5 rounded-2xl border border-gray-200/60">
                  <div className="flex justify-between items-center text-dark font-bold mb-2">
                    <span className="text-sm sm:text-base">Downlights to Upgrade</span>
                    <span className="text-primary-dark bg-primary/20 px-3 py-0.5 rounded-full text-lg font-extrabold">{ledCount} <span className="text-xs font-normal">lights</span></span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={ledCount}
                    onChange={(e) => setLedCount(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-1.5">
                    <span>1 Light</span>
                    <span>50 Lights</span>
                    <span>100 Lights</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-light p-4 sm:p-5 rounded-2xl border border-gray-200/60 flex flex-col items-center text-center">
                    <Zap className="text-yellow-500 mb-1.5" size={26} />
                    <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Energy Saved</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-dark">{Math.round(savingsKwh).toLocaleString()} <span className="text-xs font-semibold text-gray-500">kWh/yr</span></span>
                  </div>
                  <div className="bg-primary/10 p-4 sm:p-5 rounded-2xl border-2 border-primary/30 flex flex-col items-center text-center shadow-sm">
                    <Battery className="text-primary-dark mb-1.5" size={26} />
                    <span className="text-[11px] text-primary-dark font-extrabold uppercase tracking-wider mb-0.5">Money Saved</span>
                    <span className="text-2xl sm:text-3xl font-black text-primary-dark">${Math.round(savingsCost).toLocaleString()} <span className="text-xs font-bold">/yr</span></span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <img src={asset(service.hoverImage)} alt={service.title} className="w-full h-auto rounded-[2rem] shadow-xl object-cover aspect-video" loading="lazy" decoding="async" />
            <img src={asset(service.heroImage)} alt={`${service.title} secondary`} className="w-full h-auto rounded-[2rem] shadow-md object-cover aspect-video" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Why choose us for {service.title}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...revealUp(index * 0.1)}
                className="flex items-start gap-4 p-6 bg-light rounded-2xl"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
