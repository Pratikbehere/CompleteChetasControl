import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Gauge,
  Cpu,
  Database,
  BarChart3,
  Settings,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// ✅ Import images
import Baylan from "../../assets/Images/Products/SmartwaterMeters/Baylan Water Meter.jpg";
import Digital from "../../assets/Images/Products/SmartwaterMeters/Digital Water Meter.jpg";
import Domestic from "../../assets/Images/Products/SmartwaterMeters/Domestic water meter.webp";
import Digitle from "../../assets/Images/Products/SmartwaterMeters/Digitle water meter.jpg";
import MultiJet from "../../assets/Images/Products/SmartwaterMeters/Multi jet water meter.jpg";
import SingleJet from "../../assets/Images/Products/SmartwaterMeters/single jet meter.jpg";
import PulseOutput from "../../assets/Images/Products/SmartwaterMeters/Water Meter Pulse Output.jpg";
import WPHX from "../../assets/Images/Products/SmartwaterMeters/WPHX-WaterMeter.jpg";

const images = [Baylan, Digital, Domestic, Digitle, MultiJet, SingleJet, PulseOutput, WPHX];
const meterNames = [
  "Baylan Water Meter",
  "Digital Water Meter",
  "Domestic Water Meter",
  "Digitle Water Meter",
  "Multi Jet Water Meter",
  "Single Jet Meter",
  "Water Meter Pulse Output",
  "WPHX Water Meter",
];

const SmartMetering = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱ slightly longer (5s)
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const highlights = [
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: "Real-time Monitoring",
      desc: "Track consumption data instantly with precise and live readings.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "IoT & Wireless Communication",
      desc: "Seamless connectivity via GPRS, GSM, or IoT protocols for remote data access.",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Centralized Data Management",
      desc: "Data securely transmitted to a central server for analytics and visualization.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Integration with SCADA/ERP",
      desc: "Easily connects to existing SCADA or ERP systems for unified operations.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Automated Reporting",
      desc: "Generate reports, analyze trends, and optimize resource utilization.",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Full Lifecycle Support",
      desc: "From system design to maintenance — we provide complete smart metering solutions.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-['Roboto'] overflow-hidden">
      {/* BACK BUTTON */}
      <div className="w-full flex items-center justify-start px-6 md:px-14 pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 px-4 py-2 border border-sky-400 text-sky-500 rounded-full shadow-sm hover:bg-sky-50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to services</span>
        </motion.button>
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 pb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-500 tracking-tight">
          Smart Metering
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Real-time monitoring, accurate measurement, and remote access to consumption data — driving efficiency and transparency.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-sky-400 rounded-full mx-auto mt-4 origin-left"
        />
      </motion.div>

      {/* IMAGE SLIDER (Reduced Size) */}
      <div className="w-full flex items-center justify-center px-6 md:px-14 pb-10 relative">
        <div className="relative w-full md:w-[70%] h-[45vh] md:h-[55vh] flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gray-50 border-3 border-black overflow-hidden p-1">
          <div className="relative w-full h-[85%] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={current}
                src={images[current]}
                alt={meterNames[current]}
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
                  onClick={() => handleDotClick(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-sky-500 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Meter Name */}
          <div className="mt-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {meterNames[current]}
            </h3>
          </div>
        </div>
      </div>

      {/* SYSTEM OVERVIEW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-6 md:px-14 pb-16 text-justify leading-relaxed"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 mb-6 text-center">
          System Overview
        </h2>
        <div className="space-y-5 text-gray-700 text-[1rem]">
          <p>
            Smart Metering is an innovative solution designed to automate and digitalize
            the measurement of utilities such as water, power, and gas. Our systems enable
            real-time data collection and remote monitoring for accurate and efficient tracking.
          </p>
          <p>
            With built-in GPRS, GSM, or IoT-based communication, smart meters send live
            data to a centralized server, eliminating manual readings and reducing errors.
          </p>
          <p>
            Clients can securely access their consumption data via web or mobile dashboards
            to analyze usage patterns, improve efficiency, and reduce wastage.
          </p>
          <p>
            We provide complete Smart Metering solutions — from design and supply to
            installation, integration, and long-term maintenance.
          </p>
        </div>
      </motion.div>

      {/* KEY HIGHLIGHTS */}
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

export default SmartMetering;
