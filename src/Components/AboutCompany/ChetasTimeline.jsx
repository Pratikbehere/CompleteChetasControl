import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ✅ Import all timeline images
import MD from "../../assets/Images/AboutCompany/TimeLine/MD.webp";
import FlowMeasure from "../../assets/Images/AboutCompany/TimeLine/FlowMeasure.webp";
import SaveWater from "../../assets/Images/AboutCompany/TimeLine/SaveWater.webp";
import Ultrasonic from "../../assets/Images/AboutCompany/TimeLine/Ultrasonic.webp";
import PicoSonic from "../../assets/Images/AboutCompany/TimeLine/PicoSonic.webp";
import Parkhe from "../../assets/Images/AboutCompany/TimeLine/Parkhe.webp";
import BulkMeters from "../../assets/Images/AboutCompany/TimeLine/BulkMeters.webp";

const timelineEvents = [
  {
    year: "1989",
    title: "Incorporation",
    desc: "Chetas Control Pvt. Ltd. was founded, focusing on flow metering, instrumentation, and automation — emphasizing user-friendly systems over complex controls.",
    img: MD,
  },
  {
    year: "Early 1990s",
    title: "Flow Measurement Experiments",
    desc: "Experimented with multiple flow measurement technologies before finalizing on ultrasonic transit-time technology.",
    img: FlowMeasure,
  },
  {
    year: "1995–2000",
    title: "Shift to Water Utility Industry",
    desc: "With growing national awareness about water management, Chetas shifted focus to the water utility sector, forming a strong R&D team.",
    img: SaveWater,
  },
  {
    year: "2001",
    title: "First Indian Ultrasonic Flow Meter Prototype",
    desc: "Developed India’s first ultrasonic transit-time flow meter, targeting large-pipe water measurement. Introduced PicoSonic range.",
    img: Ultrasonic,
  },
  {
    year: "2004",
    title: "Second-Generation PicoSonic",
    desc: "Launched 2nd generation PicoSonic flow meters with remote communication and inbuilt printer.",
    img: PicoSonic,
  },
  {
    year: "2006",
    title: "National Recognition",
    desc: "Received the G.S. Parkhe Industrial Merit Award for import-substitute ultrasonic flow meter manufacturing.",
    img: Parkhe,
  },
  {
    year: "2007–2009",
    title: "Innovation in Bulk Metering",
    desc: "Developed JalSonic – a battery-operated ultrasonic water meter with GSM connectivity and tamper-proof design. Executed one of the largest ultrasonic meter orders.",
    img: BulkMeters,
  },
];

export default function ChetasTimelineV3() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 py-20 overflow-hidden">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-24 font-roboto">
        Decades of Precision and Innovation
      </h2>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto pb-20">
        {/* Sticky Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[4px] bg-gray-300 rounded" />

        {/* Animated Progress Line */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded origin-top"
          style={{ height: lineHeight }}
        />

        {/* Moving Dot */}
        <motion.div
          className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-lg -translate-x-1/2"
          style={{ top: dotPosition }}
        />

        {/* Timeline Events */}
        <div className="flex flex-col gap-40 relative">
          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                {/* Image with Curtain Reveal */}
                <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500">
                  <motion.img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-80 object-cover"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />

                  {/* Left Curtain */}
                  <motion.div
                    className="absolute top-0 left-0 w-1/2 h-full bg-blue-900"
                    initial={{ x: 0 }}
                    whileInView={{ x: "-100%" }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                  />

                  {/* Right Curtain */}
                  <motion.div
                    className="absolute top-0 right-0 w-1/2 h-full bg-blue-900"
                    initial={{ x: 0 }}
                    whileInView={{ x: "100%" }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Text Card */}
                <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl border border-blue-300 p-8 text-center md:text-left">
                  <h3 className="text-4xl font-bold text-blue-600 mb-3">
                    {event.year}
                  </h3>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
