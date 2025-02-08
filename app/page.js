import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import How from "./components/HowItWorks";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Technical from "./components/Technical";
import Testimonials from "./components/Testimonials";
import BackToTop from "./components/BackToTop";
import ModalPopup from "./components/Form";
export default function Home() {
  return (
    <div className="">
      <BackToTop />
          <Navbar />
          <Hero />
          <About />
          <How />
          <Services />
          <Technical />
          <Testimonials />
          <Team />
          <Footer />
    </div>
  );
}
