import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Gauge,
  Server,
  Wifi,
  MonitorSmartphone,
  Bell,
  LineChart,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Barna from "../../assets/Images/Services/DamMonitoring/Barna.png";
import Gandhisagar from "../../assets/Images/Services/DamMonitoring/Gandhisagar.png";
import LMD from "../../assets/Images/Services/DamMonitoring/LMD.png";

const images = [Barna, Gandhisagar, LMD];
const damNames = ["Barna", "Gandhisagar", "Lower Manair Dam"];

const DamMonitoring = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
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
      desc: "Continuous tracking of critical parameters — water level, inflow, outflow, and gate status.",
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Dedicated SCADA Servers",
      desc: "Each dam site includes its own SCADA server PC for uninterrupted data logging and control.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "IoT Integration",
      desc: "Seamlessly connects with PLCs, IoT sensors, and weather monitoring systems.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
      title: "Centralized Dashboard",
      desc: "Unified supervision and control through a secure, multi-dam web interface.",
    },
    {
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Smart Alerts",
      desc: "Instant notifications for threshold exceedance, anomalies, and equipment faults.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Data Analytics",
      desc: "Historical trend analysis, performance visualization, and automated reporting.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-['Poppins'] overflow-hidden">
      {/* BACK BUTTON */}
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

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 pb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-500 tracking-tight">
          Dam Monitoring System
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Real-time monitoring, intelligent automation, and safety assurance for modern dam infrastructure.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-sky-400 rounded-full mx-auto mt-4 origin-left"
        />
      </motion.div>

      {/* IMAGE SLIDER WITH DAM NAMES */}
      <div className="w-full flex items-center justify-center px-6 md:px-14 pb-10 relative">
        <div className="relative w-full md:w-[80%] h-[60vh] md:h-[75vh] flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gray-50 border-3 border-black overflow-hidden p-1">
          <div className="relative w-full h-[85%] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={current}
                src={images[current]}
                alt={damNames[current]}
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
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-lg p-3 hover:bg-gray-200 transition-all z-10"
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
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-lg p-3 hover:bg-gray-200 transition-all z-10"
            >
              <ArrowRight className="w-6 h-6 text-sky-500" />
            </motion.button>

            {/* Slider Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
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

          {/* Dam Name */}
          <div className="mt-3">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {damNames[current]}
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
            The Dam Monitoring System ensures operational safety and efficiency
            through advanced automation and continuous data acquisition.
          </p>
          <p>
            Each dam site integrates with SCADA systems that track key metrics
            such as water levels, gate positions, inflow, and rainfall — all
            updated in real time.
          </p>
          <p>
            Data is securely transmitted to a central monitoring hub for
            visualization, alarms, and analytical insights that support quick
            and accurate decision-making.
          </p>
          <p>
            Authorized users can access live dashboards and analytics through a
            secure web-based interface, enabling precise remote monitoring
            across all dam sites.
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

export default DamMonitoring;
