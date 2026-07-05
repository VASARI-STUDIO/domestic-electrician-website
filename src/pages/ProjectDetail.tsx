import { useParams, Navigate, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Lightbulb, Zap, Battery, PenTool } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useState, useEffect } from 'react';
import { ledSavings } from '../lib/ledSavings';
import { asset } from '../lib/asset';
import { enterUp } from '../lib/motion';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [ledCount, setLedCount] = useState(18);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Spark Electrical South East QLD`;
    }
  }, [id, project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Annual LED savings for the interactive calculator (shared with service pages).
  const calc = project.calculatorData;
  const { kwh: savingsKwh, cost: savingsCost } =
    calc?.type === 'led'
      ? ledSavings(calc.oldWatts, calc.newWatts, ledCount)
      : { kwh: 0, cost: 0 };

  return (
    <div className="pt-24 pb-24 bg-light">
      <section className="container mx-auto px-6 md:px-12">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold mb-8 transition-colors cursor-pointer">
          <ArrowLeft size={20} /> Back
        </button>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            
            <motion.h1
              {...enterUp()}
              className="text-4xl md:text-5xl font-extrabold text-dark mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.div
              {...enterUp(0.1)}
              className="flex items-center gap-4 text-gray-500 mb-8 font-medium"
            >
              <span className="uppercase tracking-wider text-sm text-primary">{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
            </motion.div>

            {/* Image Gallery / Before & After */}
            <div className="mb-10 space-y-6">
              {project.images.length === 2 && project.category.includes("Emergency") ? (
                // Before / After layout for emergency
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-lg">
                    <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10 text-sm">Before</div>
                    <img src={asset(project.images[1])} alt="Before" className="w-full h-full object-cover" loading="eager" decoding="async" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-lg">
                    <div className="absolute top-4 left-4 bg-green-600 text-white font-bold px-3 py-1 rounded-full z-10 text-sm">After</div>
                    <img src={asset(project.images[0])} alt="After" className="w-full h-full object-cover" loading="eager" decoding="async" />
                  </div>
                </div>
              ) : (
                // Standard Gallery
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-100"
                  >
                    <img src={asset(project.images[activeImageIndex])} alt={project.title} className="w-full h-full object-cover transition-opacity duration-300" loading="eager" decoding="async" />
                  </motion.div>
                  {project.images.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.images.map((img, i) => {
                        if (i === activeImageIndex) return null;
                        return (
                          <div key={i} onClick={() => setActiveImageIndex(i)} className="rounded-xl overflow-hidden aspect-video shadow-md bg-gray-100 cursor-pointer">
                            <img src={asset(img)} alt={`Gallery ${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
            
            <motion.div
              {...enterUp(0.2)}
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12"
            >
              <p>{project.story}</p>
            </motion.div>

            {/* Interactive Calculator for LED */}
            {calc && (
              <motion.div
                {...enterUp(0.3)}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary-dark">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">Calculate Your Savings</h3>
                </div>
                
                <p className="text-gray-600 mb-6">See how much you could save per year by upgrading your old {calc.oldWatts}W halogens to our premium {calc.newWatts}W LEDs. (Assuming 5 hours of use per day at 36c/kWh).</p>
                
                <div className="mb-8">
                  <div className="flex justify-between text-dark font-bold mb-2">
                    <span>Number of Downlights</span>
                    <span className="text-primary text-xl">{ledCount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={ledCount}
                    onChange={(e) => setLedCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-light p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                    <Zap className="text-yellow-500 mb-2" size={32} />
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Energy Saved</span>
                    <span className="text-3xl font-extrabold text-dark">{Math.round(savingsKwh).toLocaleString()} <span className="text-lg text-gray-500">kWh/yr</span></span>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 flex flex-col items-center text-center">
                    <Battery className="text-primary-dark mb-2" size={32} />
                    <span className="text-sm text-primary-dark font-bold uppercase tracking-wider mb-1">Money Saved</span>
                    <span className="text-4xl font-extrabold text-primary-dark">${Math.round(savingsCost).toLocaleString()} <span className="text-lg font-medium">/yr</span></span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tasks Completed */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="text-gray-400" size={24} />
                <h3 className="text-2xl font-bold text-dark">Tasks Completed</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 font-medium">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold text-dark mb-6">Project Highlights</h3>
              <ul className="space-y-4 mb-8">
                {project.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{pro}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-dark text-white p-6 rounded-2xl text-center">
                <h4 className="text-lg font-bold mb-2">Need something similar?</h4>
                <p className="text-gray-400 text-sm mb-4">Get in touch for a free, no-obligation quote on your next electrical project.</p>
                {project.relatedService && (
                  <Link to={project.relatedService.path} className="block w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg mb-3">
                    View {project.relatedService.name}
                  </Link>
                )}
                <Link to="/contact" className="block w-full bg-primary hover:bg-primary-dark text-dark font-bold py-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
