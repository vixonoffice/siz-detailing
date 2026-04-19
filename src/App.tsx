import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <AboutWhy />
        <GalleryTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
