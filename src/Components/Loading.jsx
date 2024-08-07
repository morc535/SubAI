import React from 'react';
import { motion } from 'framer-motion';
import SubAIIcon from '../Images/SubAIIcon.png'; // Adjust path as needed

function Loading() {
    return (
        <div className="relative w-full h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 backdrop-blur-sm"></div>

            {/* Loading Box */}
            <div className="flex items-center justify-center h-full">
                <div className="relative p-12 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl flex flex-col items-center space-y-6">
                    {/* Logo */}
                    <motion.img
                        src={SubAIIcon}
                        alt="SubAI Logo"
                        className="w-32 h-32 mb-6"
                    />
                    {/* Loading Dots */}
                    <div className="flex items-center space-x-3">
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={index}
                                className="w-4 h-4 bg-gray-800 dark:bg-gray-300 rounded-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.2 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
