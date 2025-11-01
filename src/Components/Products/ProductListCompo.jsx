import React from "react";
import { motion } from "framer-motion";
import { Package, Layers, Droplet, Gauge } from "lucide-react";

// 🖼️ Import product images
import AMR from "../../assets/Images/Products/AMR meters/AMR.jpg";
import RUDRA from "../../assets/Images/Products/AMR meters/RUDRA 3G.webp";

import Smart524 from "../../assets/Images/Products/Level transmitor/524 Smart.webp";
import Smartcost from "../../assets/Images/Products/Level transmitor/Smartcost.webp";
import Swing from "../../assets/Images/Products/Level transmitor/swing.jpg";

import PicosonicP from "../../assets/Images/Products/UltrasonicFlowMeter/picosonic p flow meter.jpg";
import Picosonic3600 from "../../assets/Images/Products/UltrasonicFlowMeter/picosonic-3600.jpg";
import PicosonicOCFR from "../../assets/Images/Products/UltrasonicFlowMeter/PICOSONIC OCFR.jpg";
import Picosonic2200 from "../../assets/Images/Products/UltrasonicFlowMeter/picosonic 2200.jpg";
import Picosonic1500 from "../../assets/Images/Products/UltrasonicFlowMeter/PICOSONIC 1500.jpg";
import Jalsonic from "../../assets/Images/Products/UltrasonicFlowMeter/Jalsonic.jpg";

import Baylan from "../../assets/Images/Products/SmartwaterMeters/Baylan Water Meter.jpg";
import Digital from "../../assets/Images/Products/SmartwaterMeters/Digital Water Meter.jpg";
import Digitle from "../../assets/Images/Products/SmartwaterMeters/Digitle water meter.jpg";
import Domestic from "../../assets/Images/Products/SmartwaterMeters/Domestic water meter.webp";
import MultiJet from "../../assets/Images/Products/SmartwaterMeters/Multi jet water meter.jpg";
import SingleJet from "../../assets/Images/Products/SmartwaterMeters/single jet meter.jpg";
import WPHX from "../../assets/Images/Products/SmartwaterMeters/WPHX-WaterMeter.jpg";
import PulseOutput from "../../assets/Images/Products/SmartwaterMeters/Water Meter Pulse Output.jpg";

const productsData = [
  {
    category: "Smart Water Meters",
    icon: <Droplet className="w-7 h-7 text-sky-400" />,
    subCategories: [
      { name: "Baylan Water Meter", image: Baylan },
      { name: "Digital Water Meter", image: Digital },
      { name: "Digitle Water Meter", image: Digitle },
      { name: "Domestic Water Meter", image: Domestic },
      { name: "Multi Jet Water Meter", image: MultiJet },
      { name: "Single Jet Water Meter", image: SingleJet },
      { name: "WPHX Water Meter", image: WPHX },
      { name: "Water Meter with Pulse Output", image: PulseOutput },
    ],
  },
  {
    category: "Ultrasonic Flow Meters",
    icon: <Gauge className="w-7 h-7 text-sky-400" />,
    subCategories: [
      { name: "Picosonic P Flow Meter", image: PicosonicP },
      { name: "Picosonic 3600", image: Picosonic3600 },
      { name: "Picosonic OCFR", image: PicosonicOCFR },
      { name: "Picosonic 2200", image: Picosonic2200 },
      { name: "Picosonic 1500", image: Picosonic1500 },
      { name: "Jalsonic", image: Jalsonic },
    ],
  },
  {
    category: "Level Transmitters",
    icon: <Layers className="w-7 h-7 text-sky-400" />,
    subCategories: [
      { name: "524 Smart", image: Smart524 },
      { name: "Smartcost", image: Smartcost },
      { name: "Swing Type", image: Swing },
    ],
  },
  {
    category: "AMR Meters",
    icon: <Package className="w-7 h-7 text-sky-400" />,
    subCategories: [
      { name: "AMR Meter (Basic Model)", image: AMR },
      { name: "RUDRA 3G", image: RUDRA },
    ],
  },
];

const ProductListCompo = () => {
  return (
    <div
      className="min-h-screen py-20 px-6 md:px-16 font-[Roboto]"
      style={{
        background: "linear-gradient(to bottom right, #d9f0ff, #f0f8ff)",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-sky-600 mb-16 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
      >
        Our Product Range
      </motion.h1>

      {productsData.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Category Heading */}
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-sky-100 rounded-full shadow-inner border border-black/20">
              {category.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 tracking-tight drop-shadow-sm">
              {category.category}
            </h2>
            <div className="flex-1 border-t border-black/20 ml-3"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {category.subCategories.map((product, subIdx) => (
              <motion.div
                key={subIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative bg-sky-50 border-2 border-black/60 shadow-lg hover:shadow-2xl hover:border-black transition-all duration-500 rounded-3xl overflow-hidden group"
              >
                {/* Product Image */}
                <div className="h-60 flex items-center justify-center bg-gradient-to-b from-sky-100 to-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 text-center relative z-10 bg-white/70 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductListCompo;
