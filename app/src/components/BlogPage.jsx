import { useContext, useEffect, useState } from "react";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import MyContext from "./MyContext";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loader from "./Loader";


const title = ''
const date = ''
const author = ''


export default function BlogPage() {

    const { blogPosts } = useContext(MyContext)
    const { id } = useParams()

    const currentBlog = blogPosts.find((blog) => {
        return String(blog.id) === String(id)
    })

    if (!currentBlog) {
        // Render the NotFound component instead of the blog page content
        return <NotFound />;
    }
    const { id: idx, title, author, date, imageUrl, content } = currentBlog

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
        <div>
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Blog Title (H2) - text-left by default in modern CSS */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left font-heading">
                        {title}
                    </h2>

                    {/* Date and Author Info (H4/H5 style) - text-left */}
                    <div className="flex items-center text-lg text-gray-500 text-left">
                        <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="font-medium mr-6">{date}</span>
                        <User className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="font-medium">{author || "By Alex Johnson"}</span>
                    </div>

                </div>
            </section>
            <section className="bg-white py-12 md:py-16">
                {/* Container optimized for readability (centered, max width) */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Content Area */}
                    <div className="prose lg:prose-lg xl:prose-xl max-w-none text-gray-700 leading-relaxed">
                        <img className="mb-5 rounded-xl" src={imageUrl} alt={title} />
                        {content.map((p) => (
                            <p className="mb-4">{p}</p>
                        ))}

                    </div>
                </div>
            </section>
            <ContactSection />
            <BlogSection />
        </div>
    )

}
