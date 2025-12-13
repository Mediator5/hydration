import { useEffect, useState } from "react";
import About from "./About";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import HeaderBanner from "./HeaderBanner";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import Loader from "./Loader";

const pageTitle = "About Us"

export default function AboutPage() {

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

        <div className="AboutPage">

            <HeaderBanner pageTitle={pageTitle} />
            <About />
            <OurTeam />
            <ContactSection />
            <BlogSection />


        </div>
    );
}
