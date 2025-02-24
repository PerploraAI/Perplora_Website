import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import How from "./components/HowItWorks";
// import Team from "./components/Team";
import Footer from "./components/Footer";
import Technical from "./components/Technical";
import Testimonials from "./components/Testimonials";
import BackToTop from "./components/BackToTop";
import ModalPopup from "./components/Form";
export default function Home() {
  return (
    <div className="md:overflow-x-hidden sm:overflow-x-hidden lg:overflow-x-hidden">
   <div id="container">
          <BackToTop />
          <Navbar />
          <Hero />
          <About />
          <How />
          <Services />
          <Technical />
          <Testimonials />
          {/* <Team /> */}
          <Footer />
   </div>
    </div>
  );
}
