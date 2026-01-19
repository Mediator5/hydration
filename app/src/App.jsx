import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Owner from "./components/Owner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";

export default function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <About />

      <Services />
      <HowItWorks />
      <Video />
      <Owner />
      <Booking />
      <Testimonials />
      <Footer />


    </div>
  );
}
