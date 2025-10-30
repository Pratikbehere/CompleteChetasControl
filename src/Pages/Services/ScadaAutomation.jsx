import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Gauge,
  Server,
  Wifi,
  MonitorSmartphone,
  Bell,
  LineChart,
  ArrowLeft,
} from "lucide-react";

import ScadaVideo from "../../assets/Images/Services/ScadaAutomation/ScadaAutomation.mp4";

const highlights = [
  {
    icon: <Gauge className="w-8 h-8 text-white" />,
    title: "Real-time Monitoring",
    desc: "Continuous supervision and control of industrial processes with live data insights.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
    title: "Centralized Visualization",
    desc: "Unified dashboards for remote access, process analytics, and real-time decision-making.",
  },
  {
    icon: <Bell className="w-8 h-8 text-white" />,
    title: "Alarm & Event Management",
    desc: "Instant alerts and logging of critical events for quick and informed responses.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-white" />,
    title: "Seamless Integration",
    desc: "Supports integration with PLCs, RTUs, IoT devices, and multiple field sensors.",
  },
  {
    icon: <Server className="w-8 h-8 text-white" />,
    title: "Scalable Architecture",
    desc: "Flexible SCADA architecture that adapts to projects of any scale or complexity.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-white" />,
    title: "Enhanced Efficiency",
    desc: "Optimized operations and reduced downtime through predictive analytics and automation.",
  },
];

const ScadaAutomation = () => {
  const navigate = useNavigate();

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
          SCADA Automation
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          We provide advanced SCADA Automation solutions that enable real-time monitoring,
          control, and analysis of industrial processes.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-24 bg-sky-400 rounded-full mx-auto mt-4 origin-left"
        />
      </motion.div>

      {/* VIDEO SECTION */}
      <div className="w-full flex items-center justify-center px-6 md:px-14 pb-10 relative">
        <div className="relative w-full md:w-[80%] h-[65vh] md:h-[75vh] rounded-2xl shadow-lg bg-gray-50 border border-gray-300 overflow-hidden">
          <video
            src={ScadaVideo}
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-contain rounded-2xl"
          />
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
            SCADA (Supervisory Control and Data Acquisition) Automation is at the
            heart of modern industrial control systems. Our SCADA solutions are
            designed to monitor, control, and optimize processes in real-time,
            helping industries achieve seamless operations and improved productivity.
          </p>
          <p>
            We develop customized SCADA systems that integrate with PLC, RTU,
            sensors, and field devices, providing a centralized platform for live
            data visualization, trend analysis, and event management. Operators can
            remotely monitor and control multiple sites, ensuring timely decision-making
            and reduced manual intervention.
          </p>
          <p>
            Our automation services cover the complete SCADA lifecycle — from
            system design and development to installation, configuration, and
            maintenance. Whether it’s for water management, power distribution,
            manufacturing, or infrastructure projects, our SCADA systems enhance
            safety, efficiency, and reliability.
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

export default ScadaAutomation;
