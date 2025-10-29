import React from "react";
import { motion } from "framer-motion";

// Import award images
import BestSmartWater from "../../assets/Images/Awards/Best Smart Water Meter Implementation.jpeg";
import BestSocialInfra from "../../assets/Images/Awards/Best Social Infrastructure.jpeg";
import EconomicResearch from "../../assets/Images/Awards/Economic Research & Developement.jpeg";
import Entrepreneur from "../../assets/Images/Awards/Entrepreneur.jpeg";
import Excellence from "../../assets/Images/Awards/Excellence.jpeg";
import GoldenGlobe from "../../assets/Images/Awards/Golden Globe Tigers.jpeg";
import MarathaBusiness from "../../assets/Images/Awards/Maratha Business Excellence Award.jpeg";
import Innovative100 from "../../assets/Images/Awards/Innovative100.jpeg";
import MCCIA from "../../assets/Images/Awards/MCCIA.jpeg";
import SmallBusiness from "../../assets/Images/Awards/Small Business Award.jpeg";
import UdyogBhushan from "../../assets/Images/Awards/UdyogBhushan Puraskar.jpeg";
import WhatsAppImage from "../../assets/Images/Awards/WhatsApp Image 2025-10-29 at 2.36.47 PM.jpeg";

const awards = [
  { image: BestSmartWater, title: "Best Smart Water Meter Implementation" },
  { image: BestSocialInfra, title: "Best Social Infrastructure" },
  { image: EconomicResearch, title: "Economic Research & Development" },
  { image: Entrepreneur, title: "Entrepreneur" },
  { image: Excellence, title: "Excellence" },
  { image: GoldenGlobe, title: "Golden Globe Tigers" },
  { image: MarathaBusiness, title: "Maratha Business Excellence Award" },
  { image: Innovative100, title: "Innovative 100" },
  { image: MCCIA, title: "MCCIA" },
  { image: SmallBusiness, title: "Small Business Award" },
  { image: UdyogBhushan, title: "UdyogBhushan Puraskar" },
  { image: WhatsAppImage, title: "Special Recognition" },
];

const AwardsGallery = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-gray-800">
      {/* Header */}
      <div className="text-center pt-12 pb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Awards & Recognitions
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Showcasing our achievements and milestones.
        </p>
        <div className="h-1 w-28 bg-gray-900 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-sky-100 border border-sky-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-60 object-contain mb-4 rounded-xl border-2 border-gray-800"
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {award.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsGallery;
