import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Text Content (Order 2 on mobile so animation sits above it; Order 1 on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-xs md:text-base">
              Reliable South East QLD Electricians
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-dark leading-tight mb-4 lg:mb-6">
              Lighting up your home with <span className="text-primary relative inline-block">
                trust.
                <svg className="absolute w-full h-2 lg:h-3 -bottom-0.5 lg:-bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
              Premium electrical services for your home. From simple repairs to smart home upgrades, we get it done safely and cleanly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto mt-2 lg:mt-0">
              <Link to="/contact" className="group bg-primary hover:bg-primary-dark text-dark font-bold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl shadow-lg w-full sm:w-auto">
                Get a Free Quote
                <ArrowRight size={20} className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
              <a href="tel:0400000000" className="bg-white hover:bg-gray-50 text-dark border-2 border-gray-200 font-bold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto">
                <Phone size={20} className="text-primary w-5 h-5 lg:w-6 lg:h-6" />
                Call 0400 000 000
              </a>
            </div>
          </div>

          {/* Animation / 3D Graphic (Order 1 on mobile so it sits ABOVE text; Order 2 on desktop) */}
          <div className="flex w-full lg:w-1/2 relative justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <img
              src={asset('/hero_animation.webp')}
              alt="Animated illustration of a friendly electrician at work"
              className="w-[85%] max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] object-contain"
              width={900}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
