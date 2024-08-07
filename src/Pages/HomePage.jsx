import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BgImage from "../Images/BackGroundImage.jpeg";
import EasyToUseGif from "../Images/video.gif";
import NotebookGif from "../Images/notebook.gif";
import SaveMoneyGif from "../Images/save-money.gif";
import Loading from "../Components/Loading";
import FileUploader from "../Components/FileUploader.jsx";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
      className="font-sans"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-center py-20 text-white"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${BgImage})`, opacity: 0.8 }}
        ></motion.div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Enhance Your Videos with Accurate Subtitles
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-lg mb-8"
            >
              SubAi offers a seamless way to generate subtitles for videos up to 10 minutes long. It's fast, free, and user-friendly.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex justify-center space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
              >
                About Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/get-started"
                className="bg-blue-600 text-white hover:bg-gray-100 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-sm"
          >
            Scroll Down
          </motion.div>
        </motion.div>
      </motion.section>

      {/* File Uploader Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" bg-white dark:bg-gray-800"
      >
        <div className=" mx-auto px-4">
          <div className=" mx-auto text-center">


            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <FileUploader />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-12 text-gray-900 dark:text-white"
            >
              Why SubAi?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Fast and Free",
                  description:
                    "Generate subtitles for videos up to 10 minutes in seconds, completely free!",
                  icon: (
                    <div className="flex flex-col items-center">
                      <img
                        src={SaveMoneyGif}
                        alt="Save Money"
                        className="w-24 h-24 mb-2"
                      />
                    </div>
                  ),
                },
                {
                  title: "Accurate Subtitles",
                  description:
                    "Our advanced AI ensures that your subtitles are accurate and perfectly synced with your video.",
                  icon: (
                    <div className="flex flex-col items-center">
                      <img
                        src={NotebookGif}
                        alt="Accurate Subtitles"
                        className="w-24 h-24 mb-2"
                      />
                    </div>
                  ),
                },
                {
                  title: "Easy to Use",
                  description:
                    "User-friendly interface that makes adding subtitles to your videos as easy as 1-2-3.",
                  icon: (
                    <div className="flex flex-col items-center">
                      <img
                        src={EasyToUseGif}
                        alt="Easy to Use"
                        className="w-24 h-24 mb-2"
                      />
                    </div>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
                >
                  {feature.icon}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default HomePage;
