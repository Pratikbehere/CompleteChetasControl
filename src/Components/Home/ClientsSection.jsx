import React from "react";
import { motion } from "framer-motion";

import ahmedabad from "../../assets/Images/Home/Client/ahmedabad.webp";
import cidco from "../../assets/Images/Home/Client/cidco.webp";
import dvc from "../../assets/Images/Home/Client/dvc.webp";
import midc from "../../assets/Images/Home/Client/midc.webp";
import jaljivan from "../../assets/Images/Home/Client/jaljivan.webp";
import mjp from "../../assets/Images/Home/Client/mjp.webp";
import navi from "../../assets/Images/Home/Client/navi.webp";
import nhp from "../../assets/Images/Home/Client/nhp.webp";
import telangana from "../../assets/Images/Home/Client/telangana.webp";
import upjal from "../../assets/Images/Home/Client/upjal.webp";

const row1 = [
  { name: "Ahmedabad Municipal Corporation", image: ahmedabad, review: "Chetas provided excellent SCADA and water automation solutions for our city projects." },
  { name: "CIDCO", image: cidco, review: "Reliable and efficient automation systems, delivered on time with great support." },
  { name: "DVC", image: dvc, review: "Professional team and high-quality water management solutions for our industrial projects." },
  { name: "MIDC", image: midc, review: "Smart and accurate flow monitoring systems, enhancing operational efficiency." },
  { name: "Jal Jivan Mission", image: jaljivan, review: "Innovative and effective automation solutions for rural water supply projects." },
];

const row2 = [
  { name: "Maharashtra Jeevan Pradhikaran", image: mjp, review: "Excellent service and modern technology implementation for water infrastructure." },
  { name: "Navi Mumbai Mahanagarpalika", image: navi, review: "Trusted partner for advanced water management and monitoring solutions." },
  { name: "NHP", image: nhp, review: "High-quality solutions with great support and timely project delivery." },
  { name: "Government of Telangana", image: telangana, review: "Chetas provided top-notch dam automation systems for state projects." },
  { name: "UP Jal Nigam", image: upjal, review: "Reliable, efficient, and innovative water management solutions delivered consistently." },
];

const ClientsSection = () => {
  // Duplicate array once (we’ll render twice for smooth loop)
  const duplicate = (arr) => [...arr, ...arr];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200 font-['Roboto'] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-black drop-shadow-lg">
          Our Clients
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-black/80 max-w-3xl mx-auto tracking-wide drop-shadow-sm">
          Trusted by government and public sector organizations across India.
        </p>
      </div>

      {/* Row 1 */}
      <div className="marquee-container mb-10 sm:mb-16">
        <div className="marquee">
          {[...duplicate(row1), ...duplicate(row1)].map((client, idx) => (
            <motion.div
              key={`r1-${idx}`}
              whileHover={{
                scale: 1.07,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="client-card"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="client-logo">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-review">{client.review}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee-container reverse">
        <div className="marquee">
          {[...duplicate(row2), ...duplicate(row2)].map((client, idx) => (
            <motion.div
              key={`r2-${idx}`}
              whileHover={{
                scale: 1.07,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="client-card"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="client-logo">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-review">{client.review}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 0 1rem;
        }

        /* Allow overflow when hovered so scaling cards are visible */
        .marquee-container:hover {
          overflow: visible;
          z-index: 20;
        }

        .marquee {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .reverse .marquee {
          animation: scroll-reverse 40s linear infinite;
        }

        /* Smooth pause on hover */
        .marquee-container:hover .marquee {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive speed */
        @media (max-width: 640px) {
          .marquee {
            animation: scroll 25s linear infinite;
          }
          .reverse .marquee {
            animation: scroll-reverse 25s linear infinite;
          }
        }

        @media (max-width: 400px) {
          .marquee {
            animation: scroll 18s linear infinite;
          }
          .reverse .marquee {
            animation: scroll-reverse 18s linear infinite;
          }
        }

        .client-card {
          flex-shrink: 0;
          width: 260px;
          background: linear-gradient(to bottom right, white, #ebf8ff);
          border: 1px solid #93c5fd;
          border-radius: 1.5rem;
          padding: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .client-card {
            width: 280px;
            padding: 1.25rem;
          }
        }

        @media (min-width: 768px) {
          .client-card {
            width: 320px;
            padding: 1.5rem;
          }
        }

        .client-logo {
          width: 4rem;
          height: 4rem;
          border-radius: 0.5rem;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .client-logo {
            width: 4.5rem;
            height: 4.5rem;
          }
        }

        @media (min-width: 768px) {
          .client-logo {
            width: 5rem;
            height: 5rem;
          }
        }

        .client-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #000;
        }

        .client-review {
          font-size: 0.75rem;
          color: #374151;
        }

        @media (min-width: 640px) {
          .client-name {
            font-size: 1rem;
          }
          .client-review {
            font-size: 0.85rem;
          }
        }

        @media (min-width: 768px) {
          .client-name {
            font-size: 1.1rem;
          }
          .client-review {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
