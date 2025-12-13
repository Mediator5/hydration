import { useEffect, useState } from "react";
import About from "./About";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";
import Footeer from "./Footeer";
import Header from "./Header";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import ServiceAreaSection from "./ServiceAreaSection";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Loader from "./Loader";

export default function Home() {

    const [isLoading, setIsLoading] = useState(false)
    useEffect(function (params) {

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)

        }, 1000);



    }, [])

    if (isLoading) {
        return <Loader />

    }
    return (
        <div className="Home bg-blue-900">

            <Hero />
            <About />
            <Services />
            <CTASection />
            <Testimonial />
            <OurTeam />
            {/* <ServiceAreaSection /> */}
            <ContactSection />
            <BlogSection />



        </div>
    );
}
