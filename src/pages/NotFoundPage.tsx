import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  useEffect(() => {
    document.title = '404 Page Not Found | Spark Electrical QLD';
  }, []);

  return (
    <div className="py-32 bg-light min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center max-w-lg">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-dark">
            <AlertTriangle size={48} />
          </div>

          <span className="text-sm font-bold text-primary uppercase tracking-wider">Error 404</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark mt-1 mb-4">
            Circuit Disconnected!
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Looks like this page has suffered a power outage or moved to a new address. Don't worry—our licensed electricians are standing by.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-primary hover:bg-primary-dark text-dark font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <Home size={20} />
              Return Home
            </Link>
            <a 
              href="tel:0400000000" 
              className="bg-dark text-white hover:bg-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <PhoneCall size={20} className="text-primary" />
              Call 24/7
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
