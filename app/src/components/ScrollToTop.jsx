
// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scrolls the window to the very top (0, 0) instantly
        window.scrollTo(0, 0);

        /* 
        Alternative for potentially smoother performance without animation lag:
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", 
        });
        */
    }, [pathname]); // This effect runs every time the pathname (route) changes

    return null; // This component doesn't render any UI
}

