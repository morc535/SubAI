import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log('Uploading file:', selectedFile.name);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center py-28">
            <div className="text-center mb-8">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Upload Your Video
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-gray-700 dark:text-gray-300"
                >
                    Select a video file to automatically generate subtitles. We support videos up to 10 minutes long.
                </motion.p>
            </div>
            <div className="text-center">
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                />
                <label htmlFor="file-upload" className="relative inline-block">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95, rotate: -1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 px-9 py-5 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-2xl"
                    >
                        {selectedFile ? selectedFile.name : 'Choose File'}
                    </motion.div>
                </label>
                {selectedFile && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleUpload}
                        className="mt-4 bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-teal-500 hover:to-green-500 px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-2xl"
                    >
                        Upload
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default FileUploader;
