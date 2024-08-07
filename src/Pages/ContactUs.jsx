import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactBgImage from '../Images/ContactUsBackground.jpeg'; // Import a background image if you have one
import Loading from '../Components/Loading';

function ContactUs() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate a loading delay

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-50 dark:bg-gray-900 min-h-screen"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ContactBgImage})` }}
            ></div>

            <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                        Contact Us
                    </h1>
                    <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
                        We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-1/2"
                    >
                        <form
                            action="#"
                            method="POST"
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Send Us a Message
                            </h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Our Contact Details
                            </h2>
                            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                                <strong>Email:</strong> <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>
                            </p>
                            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                <strong>Address:</strong> 123 Main Street, Anytown, USA
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactUs;
