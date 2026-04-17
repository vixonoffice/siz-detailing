import { motion, useScroll, useSpring } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProcessSection from './sections/ProcessSection';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import Hero3D from './components/Hero3D';

function SectionDivider() {
  return (
    <div className="relative">
      <div className="section-divider" />
    </div>
  );
}

function App() {
  useLenis();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen mesh-gradient text-white selection:bg-primary/30 selection:text-white md:cursor-none">
      <CustomCursor />
      <Hero3D />

      {/* Aurora ambient light */}
      <div className="aurora fixed inset-0 z-[1]" />

      <motion.div className="origin-center relative z-[2]">
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
      </motion.div>

      {/* Noise overlay */}
      <div className="bg-noise fixed inset-0 z-[100] pointer-events-none" />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[110] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #FF0000, #ff4444, #FF0000)',
          boxShadow: '0 0 20px rgba(255,0,0,0.5), 0 0 60px rgba(255,0,0,0.2)',
        }}
      />
    </div>
  );
}

export default App;
