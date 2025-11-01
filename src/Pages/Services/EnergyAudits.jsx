import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Activity,
  Cpu,
  BarChart2,
  Battery,
  Settings,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import energyAudit from "../../assets/Images/Services/EnergyAudits/EnergyAudit.jpg";

const images = [energyAudit];
const auditNames = ["Energy Audit"];

const EnergyAudits = () => {
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
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Load & Power Analysis",
      desc: "Comprehensive evaluation of energy consumption, load, and power factor performance.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "SCADA Integration",
      desc: "Real-time tracking of power data through integration with SCADA and IoT systems.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      title: "Performance Insights",
      desc: "Identifies inefficiencies and provides actionable performance optimization reports.",
    },
    {
      icon: <Battery className="w-8 h-8 text-white" />,
      title: "Energy Conservation",
      desc: "Helps reduce losses and improve efficiency through data-driven recommendations.",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Automation Optimization",
      desc: "Analyzes electrical systems and automation for energy cost savings.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Sustainability & Compliance",
      desc: "Supports compliance with national energy audit and environmental standards.",
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
          Energy Audits
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Enhancing energy performance, reducing costs, and improving sustainability across all operations.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-sky-400 rounded-full mx-auto mt-4 origin-left"
        />
      </motion.div>

      {/* IMAGE SLIDER */}
      <div className="w-full flex items-center justify-center px-6 md:px-14 pb-10 relative">
        <div className="relative w-full md:w-[80%] h-[50vh] md:h-[60vh] flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gray-50 border-3 border-black overflow-hidden p-1">
          <div className="relative w-full h-[85%] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={current}
                src={images[current]}
                alt={auditNames[current]}
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

            {/* Arrows */}
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

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
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

          {/* Caption */}
          <div className="mt-3">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {auditNames[current]}
            </h3>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
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
            Our Energy Audit services help industries and infrastructure projects evaluate power consumption,
            identify inefficiencies, and implement performance improvement strategies.
          </p>
          <p>
            Using advanced monitoring tools and SCADA integration, we analyze load patterns, power factor, and
            equipment performance to enhance operational efficiency and sustainability.
          </p>
          <p>
            Detailed reports provide actionable insights for energy conservation, automation optimization,
            and compliance with national audit standards.
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
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyAudits;
