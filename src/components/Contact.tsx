import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, PhoneCall } from 'lucide-react';
import { revealUp } from '../lib/motion';

export function Contact() {
  const [serviceType, setServiceType] = useState('quote');

  return (
    <section id="contact" className="py-24 bg-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-8 lg:p-14">
            <motion.h2
              {...revealUp()}
              className="text-3xl font-bold text-dark mb-2"
            >
              Get a Free Quote
            </motion.h2>
            <motion.p
              {...revealUp(0.1)}
              className="text-gray-600 mb-8"
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input id="firstName" name="firstName" type="text" autoComplete="given-name" className="w-full bg-light border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input id="lastName" name="lastName" type="text" autoComplete="family-name" className="w-full bg-light border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full bg-light border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="0400 000 000" />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">What do you need help with?</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-light border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow text-gray-700"
                >
                  <option value="quote">General Quote Request</option>
                  <option value="emergency">Emergency / Urgent Call-out</option>
                  <option value="lighting">Lighting & Fans</option>
                  <option value="switchboard">Switchboard Upgrade</option>
                  <option value="fault">Fault Finding & Repairs</option>
                  <option value="other">Other Electrical Work</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea id="details" name="details" rows={4} className="w-full bg-light border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none" placeholder="Tell us more about your project..."></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <AnimatePresence>
                  {serviceType === 'emergency' && (
                    <motion.a 
                      initial={{ opacity: 0, width: 0, padding: 0 }}
                      animate={{ opacity: 1, width: '100%', padding: '1rem' }}
                      exit={{ opacity: 0, width: 0, padding: 0 }}
                      href="tel:0400000000" 
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg overflow-hidden whitespace-nowrap"
                    >
                      Call Now <PhoneCall size={20} />
                    </motion.a>
                  )}
                </AnimatePresence>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </div>
          
          {/* Map/Info Side */}
          <div className="w-full lg:w-2/5 bg-dark text-white p-8 lg:p-14 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Service Area</h3>
            <p className="text-gray-400 mb-8">
              We proudly serve the Brisbane, Beenleigh, and Gold Coast areas. Not sure if we cover your area? Just ask!
            </p>
            
            <div className="flex-1 min-h-[300px] lg:min-h-[250px] bg-gradient-to-br from-gray-900 via-[#131b2e] to-dark rounded-2xl relative overflow-hidden border border-white/10 flex flex-col justify-between p-6 shadow-inner group">
              {/* Topographic / Grid Lines Background */}
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>

              {/* Map Title / Legend */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">South East QLD Coverage</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 bg-white/10 rounded text-primary">24/7 Rapid Response</span>
              </div>

              {/* Stylized Map Points & Highway Route */}
              <div className="relative z-10 my-auto py-6 flex flex-col justify-around h-full max-w-[280px] mx-auto w-full">
                {/* Connecting Dotted Route Line */}
                <div className="absolute left-[19px] top-[28px] bottom-[28px] w-[2px] bg-gradient-to-b from-blue-400 via-primary to-emerald-400 border-l-2 border-dashed border-transparent opacity-40"></div>

                {/* North: Brisbane */}
                <div className="flex items-center gap-3 relative group/item">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0 shadow-md">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Brisbane Metro</h4>
                    <p className="text-xs text-gray-400">North & South Suburbs</p>
                  </div>
                </div>

                {/* Central Hub: Beenleigh / Logan */}
                <div className="flex items-center gap-3 relative my-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,176,65,0.35)] relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary"></div>
                    <div className="absolute inset-0 rounded-full border border-primary animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-primary">Beenleigh & Logan</h4>
                      <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-extrabold">HQ</span>
                    </div>
                    <p className="text-xs text-gray-300">Central Dispatch Hub</p>
                  </div>
                </div>

                {/* South: Gold Coast */}
                <div className="flex items-center gap-3 relative group/item">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-md">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Gold Coast Region</h4>
                    <p className="text-xs text-gray-400">Northern Beaches & Hinterland</p>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Avg. Emergency Arrival: <strong className="text-white">30-45 mins</strong></span>
                <span className="text-primary font-medium">No Call-Out Fee &rarr;</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
