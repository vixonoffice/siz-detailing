import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import BeforeAfter from './sections/BeforeAfter';
import Services from './sections/Services';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';
import Location from './sections/Location';

function App() {
  return (
    <div className="min-h-screen bg-[#060608] text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <BeforeAfter />
        <Services />
        <AboutWhy />
        <GalleryTestimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
