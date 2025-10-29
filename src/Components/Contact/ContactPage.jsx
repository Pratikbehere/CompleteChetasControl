import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-gray-800">
      {/* Header */}
      <div className="text-center pt-16 pb-8 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Reach Out Anytime
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Our team is ready to assist you with any water solutions, project
          inquiries, or support requests. Contact us and let's make every drop
          count!
        </p>
      </div>

      {/* Contact Info & Socials */}
      <div className="max-w-6xl mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-12 pb-16">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Contact Info</h2>
          <p>
            <span className="font-semibold">Address:</span> Chetas House, Plot
            No.1, Survey No.8+9, Shree Siddhatek Society, Sutarwadi, Pashan,
            Pune - 411 021
          </p>
          <p>
            <span className="font-semibold">Phone:</span> 020 - 25871111 / 25870370
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@chetascontrol.com" className="text-blue-600 hover:underline">
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
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
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
