import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Privacy Policy | Spark Electrical South East QLD';
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
              <Shield size={32} />
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Legal Information</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-dark">Privacy Policy</h1>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            Last Updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-dark mb-3">1. Our Commitment to Your Privacy</h2>
              <p>
                At Spark Electrical QLD (Licence: 84729), we respect your privacy and are committed to protecting your personal information in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">2. Information We Collect</h2>
              <p className="mb-3">When you request a quote, book a service, or contact us online, we may collect:</p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Your full name and contact phone number.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Property address in South East Queensland for electrical inspections and installations.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary shrink-0" /> Email address for sending invoices, quotes, and electrical safety compliance certificates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">3. How We Use Your Information</h2>
              <p>
                We use your information strictly to deliver electrical services, schedule site visits, process payments, and ensure compliance with Queensland electrical safety regulations. We never sell, rent, or trade your personal data to third-party marketers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">4. Security & Data Retention</h2>
              <p>
                Your personal details are stored securely using modern encryption and access-controlled customer management systems. We retain project and compliance records as required by Queensland electrical licensing laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark mb-3">5. Contacting Our Privacy Officer</h2>
              <p>
                If you have any questions regarding how we handle your data or wish to update your personal details, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-white rounded-2xl border border-gray-200 font-medium">
                <p className="text-dark font-bold">Spark Electrical South East QLD</p>
                <p>Email: <a href="mailto:hello@sparkelectrical.com.au" className="text-primary-dark underline">hello@sparkelectrical.com.au</a></p>
                <p>Phone: <a href="tel:0400000000" className="text-primary-dark underline">0400 000 000</a></p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-500">Spark Electrical Contractor Licence: 84729</span>
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-full transition-colors shadow-md">
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
