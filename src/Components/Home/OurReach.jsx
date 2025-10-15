import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Users, Building2, Droplet } from "lucide-react";
import waterImage from "../../assets/Images/Home/Banner/water.webp";

const stats = [
  { id: 1, icon: <Droplet size={50} className="text-cyan-400" />, number: 400000, label: "Meters Installed" },
  { id: 2, icon: <Users size={50} className="text-blue-400" />, number: 150, label: "Happy Clients" },
  { id: 3, icon: <Building2 size={50} className="text-teal-400" />, number: 100, label: "Projects Completed" },
];

const CountUpNumber = ({ target, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => setDisplay(Math.floor(v)));
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, target, { duration, ease: "easeOut" });
      return () => animation.stop();
    }
  }, [isInView, target, count, duration]);

  return <span ref={ref}>{display.toLocaleString()}+</span>;
};

const OurReach = () => {
  return (
    <section
      className="
        relative w-full py-32 sm:py-40 px-4 sm:px-10 overflow-hidden font-['Roboto']
        min-h-[100vh] sm:min-h-0  /* full height only on mobile */
        flex flex-col sm:block justify-center sm:justify-start
      "
    >
      {/* Background Image */}
      <img
        src={waterImage}
        alt="water background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      />

      {/* Overlay for better readability on small screens */}
      <div className="absolute inset-0 bg-black/30 z-0 sm:bg-transparent"></div>

      {/* Heading */}
      <div className="relative text-center z-10 mb-20 sm:mb-28 md:mb-36 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl text-white font-normal drop-shadow-lg"
        >
          Our Reach & Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white font-normal max-w-3xl mx-auto drop-shadow-lg"
        >
          Delivering cutting-edge automation solutions across industries worldwide.
        </motion.p>
      </div>

      {/* Stats Cards */}
      <div
        className="
          relative z-10 flex flex-wrap justify-center items-start
          gap-x-8 sm:gap-x-16 md:gap-x-45
          gap-y-10 sm:gap-y-16 md:gap-y-24  /* increased vertical spacing on mobile */
        "
      >
        {stats.map((item, idx) => {
          let offsetClasses = "";
          if (idx === 0) offsetClasses = "sm:-mt-12 md:-mt-16";
          if (idx === 1) offsetClasses = "mt-0";
          if (idx === 2) offsetClasses = "sm:mt-12 md:mt-16";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`
                relative flex flex-col items-center justify-center text-center 
                w-full max-w-[260px] sm:max-w-[300px] md:w-72 py-8 px-6 
                rounded-3xl bg-white/90 border-2 border-gray-400 shadow-md 
                transition-all duration-300 cursor-pointer ${offsetClasses}
              `}
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 z-10"
              >
                {item.icon}
              </motion.div>

              {/* Number */}
              <h3 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold z-10 drop-shadow-lg">
                <CountUpNumber target={item.number} />
              </h3>

              {/* Label */}
              <p className="mt-2 text-base sm:text-lg md:text-2xl text-black font-medium z-10 drop-shadow-md">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurReach;
