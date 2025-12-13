import { useEffect, useState } from "react";
import BlogSection from "./BlogSection";
import Loader from "./Loader";

export default function OurBlogPage() {

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
        <div className="OurBlogPage">
            <BlogSection />

        </div>
    );
}
