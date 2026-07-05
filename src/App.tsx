import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { LenisContext } from './lib/lenisContext';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';

// The landing page (Layout + Home) ships eagerly; secondary routes are
// code-split so first paint downloads less JavaScript.
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Honour users who prefer reduced motion — don't hijack native scrolling.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const instance = new Lenis({ autoRaf: true });
    setLenis(instance);
    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    // reducedMotion="user" makes Framer drop transform-based motion (keeping
    // opacity) for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <LenisContext.Provider value={lenis}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="projects/:id" element={<ProjectDetail />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LenisContext.Provider>
    </MotionConfig>
  );
}

export default App;
