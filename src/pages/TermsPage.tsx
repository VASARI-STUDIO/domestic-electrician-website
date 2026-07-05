import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Terms of Service | Spark Electrical South East QLD';
  }, []);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-dark font-bold hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-light rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark">
              <FileText size={32} />
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Legal Information</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-dark">Terms of Service</h1>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            Last Updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-dark mb-3">1. Scope of Electrical Services</h2>
              <p>
                Spark Electrical QLD (Electrical Contractor Licence: 84729) provides licensed residential and commercial electrical contracting, installations, maintenance, and emergency repair services across Brisbane, Beenleigh, Logan, and the Gold Coast. All work is conducted in strict compliance with AS/NZS 3000:2018 (Wiring Rules).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">2. Quotations & Upfront Pricing</h2>
              <p className="mb-3">Our commitment to fair trade includes:</p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Written quotations are valid for 30 days from the date of issue.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Any variations or unforeseen structural difficulties discovered during work will be quoted and approved by you before proceeding.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Emergency after-hours call-outs incur a standard emergency diagnostic fee, which will be disclosed over the phone prior to dispatch.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">3. Lifetime Workmanship Guarantee</h2>
              <p>
                We stand behind the quality of our installations. We provide a lifetime warranty on our electrical labor and workmanship. Supplied materials and fixtures (such as LED downlights, ceiling fans, and smart switches) are covered by standard manufacturer warranties (typically 3 to 7 years).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">4. Electrical Safety Compliance</h2>
              <p>
                Upon completion of notifiable electrical work, our licensed electricians will issue an official Queensland Electrical Safety Certificate (Certificate of Testing and Compliance) for your property records and insurance compliance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">5. Payment Terms</h2>
              <p>
                Invoices are due upon practical completion of the service unless prior trade account terms have been agreed in writing. We accept electronic bank transfers (EFT), major credit cards, and instant EFTPOS on site.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-500">Spark Electrical Contractor Licence: 84729</span>
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-full transition-colors shadow-md">
              Request a Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
