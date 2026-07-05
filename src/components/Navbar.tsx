import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Zap size={28} className="text-primary fill-primary group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-extrabold tracking-tight text-dark">
            Spark<span className="text-primary">Electrical</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-sm font-semibold text-dark/80 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-[width] after:duration-300 after:ease-out hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-dark font-bold py-2.5 px-6 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Enquire Online
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.href}
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-lg font-medium text-dark hover:text-primary"
               >
                 {link.name}
               </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-dark font-bold text-center py-3 rounded-full mt-4"
            >
              Enquire Online
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
