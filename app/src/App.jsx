import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="App">
      
      <Header />
      <Hero />
      <About />
      <Services />
       <HowItWorks />
       <Booking />
       <Testimonials />
      <Footer />
     

    </div>
  );
}
