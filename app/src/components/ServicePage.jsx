import { useEffect, useState } from "react";
import HeaderBanner from "./HeaderBanner";
import Services from "./Services";
import Loader from "./Loader";


const pageTitle = 'Services'
export default function ServicePage() {

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
        <div className="ServicePage">
            <HeaderBanner pageTitle={pageTitle} />
            <Services />

        </div>
    );
}
