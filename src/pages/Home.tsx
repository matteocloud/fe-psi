import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import StudioGallery from "../components/StudioGallery";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <StudioGallery />
      <Services />
      <Highlights />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
