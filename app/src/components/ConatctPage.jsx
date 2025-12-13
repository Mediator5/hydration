import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import HeaderBanner from "./HeaderBanner";
import Loader from "./Loader";
const pageTitle = 'Contact Us'

export default function ConatctPage() {

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
        <>
            <HeaderBanner pageTitle={pageTitle} />
            <ContactSection />

        </>
    );
}
