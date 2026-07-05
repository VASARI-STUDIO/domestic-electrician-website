import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { revealUp, hoverLift } from '../lib/motion';

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "2 weeks ago",
      text: "Absolutely fantastic service. Turned up exactly when they said they would, fixed the fault in the switchboard in under an hour, and cleaned up after themselves. Highly recommend for anyone in Brisbane."
    },
    {
      name: "Mark T.",
      date: "1 month ago",
      text: "Had Spark Electrical out to install some new LED downlights and a couple of ceiling fans. The guys were super polite, very professional, and the quote was spot on. The house looks amazing now."
    },
    {
      name: "Emma Wood",
      date: "3 months ago",
      text: "Called them at 8pm on a Friday when half the house lost power. They had someone here in 30 mins and sorted it out quickly without charging an absolute fortune. Life savers!"
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            {...revealUp()}
            className="flex gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-primary text-primary" />
            ))}
          </motion.div>
          <motion.h2
            {...revealUp(0.1)}
            className="text-4xl font-bold text-dark mb-4"
          >
            5-Star Rated by <span className="text-primary">Locals</span>
          </motion.h2>
          <motion.p
            {...revealUp(0.2)}
            className="text-gray-600 text-lg max-w-2xl"
          >
            Don't just take our word for it. See what our customers across South East Queensland have to say about our electrical services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              {...revealUp(index * 0.15)}
              {...hoverLift}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-dark">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...revealUp(0.4)}
          className="mt-12 flex justify-center w-full"
        >
          <a 
            href="https://www.google.com/maps/search/electrician+south+east+qld" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 text-dark font-bold bg-white hover:bg-primary px-6 sm:px-8 py-4 rounded-full shadow-md hover:shadow-xl border border-gray-100 hover:border-primary transition-all duration-300 ease-out hover:-translate-y-1 w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-lg">View more on Google</span>
              <span className="text-sm text-gray-500 group-hover:text-dark/80 font-normal transition-colors">Rating 4.8/5 from 120+ reviews</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
