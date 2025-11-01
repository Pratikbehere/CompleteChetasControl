import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Cpu, Wifi, Database, BarChart3, Settings, Gauge } from "lucide-react";

// ✅ Import images
import AMRImg from "../../assets/Images/Products/AMR meters/AMR.jpg";
import Rudra3G from "../../assets/Images/Products/AMR meters/RUDRA 3G.webp";

const images = [AMRImg, Rudra3G];
const names = ["AMR (Automatic Meter Reading)", "RUDRA 3G AMR Module"];

const AMR = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const highlights = [
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: "Automatic Data Collection",
      desc: "Eliminates the need for manual meter reading with automated data capture.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "Wireless Transmission",
      desc: "Transmits readings using GPRS, GSM, or RF modules securely and efficiently.",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Centralized Data Management",
      desc: "Real-time data is stored and managed at a central server or SCADA system.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Accurate Billing & Analytics",
      desc: "Reduces human error and supports automated billing with precise analytics.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "IoT & SCADA Integration",
      desc: "Seamless compatibility with IoT, SCADA, and Smart Metering systems.",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Ideal for Industrial & Dam Systems",
      desc: "Designed for utilities, industrial plants, and dam monitoring networks.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-['Roboto'] overflow-hidden">
      {/* 🔙 Back Button */}
      <div className="w-full flex items-center justify-start px-6 md:px-14 pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 px-4 py-2 border border-sky-400 text-sky-500 rounded-full shadow-sm hover:bg-sky-50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Services</span>
        </motion.button>
      </div>

      {/* 🌐 Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 pb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-500 tracking-tight">
          AMR (Automatic Meter Reading)
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          We provide advanced AMR solutions for automatic data collection from water and energy meters. 
          Ensuring accuracy, real-time readings, and seamless integration with SCADA and IoT systems.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-sky-400 rounded-full mx-auto mt-4 origin-left"
        />
      </motion.div>

      {/* 📸 Image Slider */}
      <div className="w-full flex items-center justify-center px-6 md:px-14 pb-10 relative">
        <div className="relative w-full md:w-[70%] h-[45vh] md:h-[55vh] flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gray-50 border-3 border-black overflow-hidden p-1">
          <div className="relative w-full h-[85%] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={current}
                src={images[current]}
                alt={names[current]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 w-full h-full object-contain rounded-2xl"
              />
            </AnimatePresence>

            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(-1);
                setCurrent((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-md p-3 hover:bg-gray-200 transition-all z-10"
            >
              <ArrowLeft className="w-6 h-6 text-sky-500" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(1);
                setCurrent((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-md p-3 hover:bg-gray-200 transition-all z-10"
            >
              <ArrowRight className="w-6 h-6 text-sky-500" />
            </motion.button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-sky-500 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{names[current]}</h3>
          </div>
        </div>
      </div>

      {/* 🧩 Detailed Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-6 md:px-14 pb-16 text-justify leading-relaxed"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 mb-6 text-center">
          Detailed Overview
        </h2>
        <div className="space-y-5 text-gray-700 text-[1rem]">
          <p>
            Our AMR (Automatic Meter Reading) technology enables automatic collection and transmission 
            of meter data without the need for manual readings. Designed for water authorities, 
            industrial plants, and dam management systems, AMR enhances accuracy and efficiency.
          </p>
          <p>
            Each AMR-enabled meter includes a communication module (GPRS, GSM, or IoT-based) 
            that transmits consumption data to a central server or SCADA system. 
            This real-time process minimizes human error and enables faster billing and analysis.
          </p>
          <p>
            Compatible with both Smart and Bulk Meters, AMR solutions provide centralized 
            monitoring of water distribution, flow rates, and consumption trends. 
            Data can be accessed via dashboards for reporting, analytics, and remote supervision.
          </p>
        </div>
      </motion.div>

      {/* 🌟 Key Highlights */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-500 mb-10">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-sky-400 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-white text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMR;
