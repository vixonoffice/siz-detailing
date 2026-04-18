import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProcessSection from './sections/ProcessSection';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';

function SectionDivider() {
  return (
    <div className="relative">
      <div className="section-divider" />
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none ambient-bg" />

      <div className="relative z-[2]">
        <Navbar />

        <main>
          <Hero />
          <SectionDivider />
          <ProcessSection />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <BeforeAfter />
          <SectionDivider />
          <AboutWhy />
          <SectionDivider />
          <GalleryTestimonials />
          <SectionDivider />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[110] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #FF0000, #ff4444, #FF0000)',
        }}
      />
    </div>
  );
}

export default App;
