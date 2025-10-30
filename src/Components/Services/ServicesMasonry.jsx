import React, { useState } from "react";
import { FaWater, FaBolt, FaIndustry, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Import images
import smartMetering from "../../assets/Images/Services/smart-metering.jpeg";
import scada from "../../assets/Images/Services/scada.jpeg";
import waterAudits from "../../assets/Images/Services/water-audits.jpeg";
import iot from "../../assets/Images/Services/iot.jpeg";
import energyAudits from "../../assets/Images/Services/energy-audits.jpeg";
import dam from "../../assets/Images/Services/dam.jpeg";
import bulkMetering from "../../assets/Images/Services/bulk-metering.jpeg";
import amr from "../../assets/Images/Services/amr.jpeg";

const services = [
  {
    id: 1,
    title: "Smart Metering",
    desc: "Real-time measurement",
    img: smartMetering,
    icon: <FaWater />,
    color: "text-blue-500",
    bullets: ["Monitor flow", "Track usage", "Reduce waste"],
  },
  {
    id: 2,
    title: "SCADA Automation",
    desc: "Centralized monitoring",
    img: scada,
    icon: <FaCog />,
    color: "text-green-500",
    bullets: ["Remote control", "Instant alerts", "Data logging"],
    link: "/services/scada-automation",
  },
  {
    id: 3,
    title: "Water Audits",
    desc: "Reduce water losses",
    img: waterAudits,
    icon: <FaWater />,
    color: "text-teal-500",
    bullets: ["Leak detection", "Usage report", "Optimize supply"],
  },
  {
    id: 4,
    title: "IoT Deployment",
    desc: "Smart sensors",
    img: iot,
    icon: <FaBolt />,
    color: "text-yellow-500",
    bullets: ["Easy setup", "Realtime data", "Remote monitoring"],
  },
  {
    id: 5,
    title: "Energy Audits",
    desc: "System energy analysis",
    img: energyAudits,
    icon: <FaBolt />,
    color: "text-orange-500",
    bullets: ["Consumption tracking", "Efficiency tips", "Cost savings"],
  },
  {
    id: 6,
    title: "Dam Monitoring",
    desc: "Remote structural health",
    img: dam,
    icon: <FaIndustry />,
    color: "text-purple-500",
    bullets: ["Structural check", "Alerts & alarms", "Remote access"],
    link: "/services/dam-monitoring",
  },
  {
    id: 7,
    title: "Bulk Metering",
    desc: "Large-scale measurement",
    img: bulkMetering,
    icon: <FaIndustry />,
    color: "text-pink-500",
    bullets: ["High capacity", "Accurate data", "Automated reports"],
  },
  {
    id: 8,
    title: "AMR",
    desc: "Automated meter reading",
    img: amr,
    icon: <FaCog />,
    color: "text-indigo-500",
    bullets: ["Automatic readings", "Reduced errors", "Time-saving"],
  },
];

export default function ServicesMasonry() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 sm:px-8 font-['Roboto']">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group perspective cursor-pointer"
            onClick={() => toggleFlip(service.id)} // flip on mobile tap
          >
            <div
              className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards[service.id] ? "rotate-y-180" : ""
              } md:group-hover:rotate-y-180`}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-gray-200 shadow-md bg-white flex flex-col items-center justify-between p-4 transition-all duration-300">
                <div className="w-full flex-1 flex items-center justify-center rounded-xl bg-gray-50 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ transform: "translateZ(0)" }}
                  />
                </div>
                <div className="p-3 text-center">
                  <div className={`${service.color} text-4xl mb-2`}>{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl border border-gray-200 shadow-md bg-white flex flex-col items-center justify-center p-5 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                <ul className="text-gray-700 text-sm mb-4 list-disc list-inside text-left">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <button
                  className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:scale-105 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (service.link) navigate(service.link);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ CSS FIX FOR 3D FLIP */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
