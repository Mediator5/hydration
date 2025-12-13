import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import JosephCalebPage from "./components/JosephCalebPage";
import JeanetteIrwin from "./components/JeanetteIrwin";
import ConatctPage from "./components/ConatctPage";
import ServicePage from "./components/ServicePage";
import MyContext from "./components/MyContext";
import { useState } from "react";
import blogPosts from "./services/blogData";
import OurBlogPage from "./components/OurBlogPage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ThankYouPage from "./components/ThankYouPage";

blogPosts

export default function App() {
  const [blogData, setBlogData] = useState([])
  return (
    <MyContext.Provider value={{ blogData, setBlogData, blogPosts }}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/joseph-caleb" element={<JosephCalebPage />} />
            <Route path="/jeanette-irwin" element={<JeanetteIrwin />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog/" element={<OurBlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/contact" element={<ConatctPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </MyContext.Provider>
  );
}
