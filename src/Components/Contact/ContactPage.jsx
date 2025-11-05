import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// ✅ Import Office Images
import puneOffice from "../../assets/Images/Contact/pune.png";
import ncrOffice from "../../assets/Images/Contact/ncr.avif";
import mumbaiOffice from "../../assets/Images/Contact/mumbai-selected.png";
import hydOffice from "../../assets/Images/Contact/hyd.png";
import bangaloreOffice from "../../assets/Images/Contact/bang.avif";
import ahdOffice from "../../assets/Images/Contact/ahd.avif";

export default function ContactPage() {
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

  const offices = [
    { name: "Pune HQ", img: puneOffice },
    { name: "Delhi", img: ncrOffice },
    { name: "Mumbai", img: mumbaiOffice },
    { name: "Hyderabad", img: hydOffice },
    { name: "Bangalore", img: bangaloreOffice },
    { name: "Ahmedabad", img: ahdOffice },
  ];

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-gray-800">

      {/* ✅ Offices Section moved on top */}
      <div className="bg-gray-50 pt-20 pb-14">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
          Our Offices
        </h2>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 px-6">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white p-2
                flex items-center justify-center group-hover:border-blue-600 transition-all duration-300"
              >
                <img
                  src={office.img}
                  alt={office.name}
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>

              <p className="mt-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                {office.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Contact Info</h2>
          <p>
            <span className="font-semibold">Address:</span> Chetas House, Plot No.1,
            Survey No.8+9, Shree Siddhatek Society, Sutarwadi, Pashan,
            Pune - 411 021
          </p>
          <p>
            <span className="font-semibold">Phone:</span> 020 - 25871111 / 25870370
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@chetascontrol.com"
              className="text-blue-600 hover:underline"
            >
              info@chetascontrol.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
