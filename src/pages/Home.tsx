import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Services } from '../components/Services';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { Process } from '../components/Process';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';

export function Home() {
  useEffect(() => {
    document.title = 'Spark Electrical | Premium Electricians South East QLD';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <EmergencyBanner />
      <Reviews />
      <Services />
      <Process />
      <Projects />
      <About />
      <Contact />
      <EmergencyBanner />
    </>
  );
}
