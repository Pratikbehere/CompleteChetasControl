// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/chetascontrolsystem",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/Chetascontrol",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/chetas-control/",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/chetascontrolsystems/",
      label: "Instagram",
      color: "#E4405F",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <footer className="relative overflow-hidden text-gray-300 font-['Roboto']">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-gray-900 to-sky-950 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.5),transparent_60%)]"></div>

      {/* Floating gradient blobs */}
      <div className="absolute w-[400px] h-[400px] bg-sky-500/30 blur-3xl rounded-full top-[-100px] left-[-100px] animate-float-slow"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-400/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-float-fast"></div>

      {/* Footer grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0}>
          <motion.h2
            animate={{
              textShadow: [
                "0 0 4px #38bdf8",
                "0 0 12px #38bdf8",
                "0 0 4px #38bdf8",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            className="text-2xl font-bold text-white mb-4 tracking-wide"
          >
            Chetas Control Systems
          </motion.h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Established in 1989, Chetas Control Systems Pvt Ltd is a pioneer in
            ultrasonic flow metering, SCADA automation, smart metering, and
            water audits across India.
          </p>

          {/* Animated Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 text-white text-lg flex items-center justify-center shadow-md relative overflow-hidden"
                whileHover={{
                  scale: 1.25,
                  rotate: 6,
                  boxShadow: `0 0 20px ${social.color}`,
                  backgroundColor: social.color,
                }}
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [`0 0 10px ${social.color}55`, `0 0 0 ${social.color}00`],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1}>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact Us", path: "/contact" },
            ].map((link, i) => (
              <motion.li key={i} whileHover={{ x: 6, color: "#38bdf8" }}>
                <Link
                  to={link.path}
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Expertise */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2}>
          <h2 className="text-xl font-semibold text-white mb-4">Our Expertise</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Ultrasonic Flow Metering",
              "SCADA & Automation",
              "Smart Metering Solutions",
              "Water Audits & Consultancy",
            ].map((service, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 8,
                  color: "#38bdf8",
                  textShadow: "0 0 8px #38bdf8",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Contact Info */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Information
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong>Address:</strong>
            <br />
            Chetas House, Plot No.1, Survey No.8+9,
            <br />
            Shree Siddhatek Society, Sutarwadi, Pashan,
            <br />
            Pune - 411021, Maharashtra, India
          </p>
          <p className="mt-4 text-sm text-gray-400">
            <strong>Phone:</strong> 020-25871111 / 25870370
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@chetascontrol.com"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              info@chetascontrol.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-700 my-4 mx-6 lg:mx-12 z-10"></div>

      {/* Copyright */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-6 text-center text-xs sm:text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300 font-medium hover:text-sky-400 transition-colors duration-300">
          Chetas Control Systems Pvt Ltd
        </span>
        . All rights reserved.
      </motion.div>

      {/* Extra animations */}
      <style jsx>{`
        @keyframes gradientX {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradientX 15s ease infinite;
        }
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes floatFast {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
