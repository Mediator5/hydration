import React, { useState } from 'react';

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        serviceType: '',
        date: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://hydration-nu.vercel.app/api/send-email.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subject: `New Booking from ${formData.name}`,
                    text: `
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Service Type: ${formData.serviceType}
Date: ${formData.date}
Message: ${formData.message}
          `,
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert('Booking submitted successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    address: '',
                    serviceType: '',
                    date: '',
                    message: '',
                });
            } else {
                alert('Failed to submit booking.');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong.');
        }
    };

    return (
        <section className="w-full bg-bronze py-16 px-6 lg:px-12" id="booking">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Form */}
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h2 className="text-5xl font-serif text-gray-900 mb-4 leading-tight">
                            Book an IV Now
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Ready to feel your best? Schedule your mobile IV therapy session today.
                        </p>
                        <div className="space-y-5">
                            {/* Name and Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 placeholder-gray-400"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            {/* Address, Service Type, Date */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 placeholder-gray-400"
                                />
                                <div className="relative">
                                    <select
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none text-gray-800"
                                    >
                                        <option value="">Service Type</option>
                                        <option value="hydration">Hydration Therapy</option>
                                        <option value="vitamin">Vitamin Boost</option>
                                        <option value="immunity">Immunity Support</option>
                                        <option value="energy">Energy Enhancement</option>
                                    </select>
                                    <svg
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none text-gray-800 placeholder-gray-400"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="group flex items-center gap-3 bg-bronze hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span className="tracking-wider text-sm">SUBMIT NOW</span>
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="h-full min-h-[500px] lg:min-h-[700px]">
                        <img
                            src="https://coolwaveconsulting.com/wp-content/uploads/2023/11/a-healthcare-worker-examining-pregnant-woman-indoors-at-home-.jpg"
                            alt="Healthcare worker with patient"
                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
