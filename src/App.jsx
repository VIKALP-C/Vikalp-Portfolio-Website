import NavBar from "./Components/NavBar";
import Contact from "./Sections/Contact";
import ExperienceSection from "./Sections/ExperienceSection";
import FeatureCards from "./Sections/FeatureCards";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import TechStack from "./Sections/TechStack";
import Testimonials from "./Sections/Testimonials";

export default function App(){
  return(
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
    
    </>
  );
};