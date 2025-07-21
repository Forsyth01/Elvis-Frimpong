import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About />
        <Projects/>
        <Skills/>
        <Testimonial/>
        <WorkExperience/>
        <Certs/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
