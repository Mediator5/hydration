// src/components/Loader.jsx
import React from 'react';


export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            {/* Simple Tailwind CSS Spinner (can be replaced with a custom GIF) */}
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-b-2  border-b-blue-600"></div>

        </div>
    );
};


