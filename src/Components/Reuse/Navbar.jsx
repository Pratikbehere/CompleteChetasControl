import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebookF />, link: "https://www.facebook.com/chetascontrolsystem", label: "Facebook", color: "#1877F2" },
  { icon: <FaTwitter />, link: "https://x.com/Chetascontrol", label: "Twitter", color: "#1DA1F2" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/chetas-control/", label: "LinkedIn", color: "#0A66C2" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/chetascontrolsystems/", label: "Instagram", color: "#E4405F" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white text-black font-['Roboto'] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Chetas Control Systems Home">
            <img
              src="/ChetasLogo.webp"
              alt="Chetas Control Systems Logo"
              className="h-16 w-auto transform hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-14 text-lg font-medium">
          <NavLink to="/" label="Home" location={location} />
          <NavLink to="/services" label="Services" location={location} />

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button
              className={`flex items-center transition-all duration-300 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                location.pathname.includes("aboutCompanyPage") ||
                location.pathname.includes("awardsPage")
                  ? "font-semibold text-sky-700"
                  : ""
              }`}
            >
              About <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Slide-down dropdown */}
            <div
              className={`absolute left-0 mt-3 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 origin-top ${
                isAboutOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
              style={{ width: "15rem" }}
            >
              <Link
                to="/aboutCompanyPage"
                className="block px-6 py-3 text-base hover:bg-sky-50 hover:text-sky-700 transition-all duration-200 whitespace-nowrap"
              >
                About Company
              </Link>
              <Link
                to="/awardsPage"
                className="block px-6 py-3 text-base hover:bg-sky-50 hover:text-sky-700 transition-all duration-200 whitespace-nowrap"
              >
                Awards
              </Link>
            </div>
          </div>

          <NavLink to="/products" label="Products" location={location} />
          <NavLink to="/contact" label="Contact" location={location} />
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-xl transform hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 text-lg font-medium">
          <MobileLink to="/" label="Home" location={location} />
          <MobileLink to="/services" label="Services" location={location} />

          {/* About collapsible */}
          <div>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full hover:text-sky-600"
            >
              About <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isAboutOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  to="/aboutCompanyPage"
                  className="block hover:text-sky-600"
                >
                  About Company
                </Link>
                <Link
                  to="/awardsPage"
                  className="block hover:text-sky-600"
                >
                  Awards
                </Link>
              </div>
            )}
          </div>

          <MobileLink to="/products" label="Products" location={location} />
          <MobileLink to="/contact" label="Contact" location={location} />

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-6 pt-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-2xl hover:scale-110 transition-transform duration-300"
                style={{ color: social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ================== HELPER COMPONENTS ================== */

function NavLink({ to, label, location }) {
  return (
    <Link
      to={to}
      className={`group relative transition-all duration-300 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
        location.pathname === to ? "font-semibold text-sky-700" : ""
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 ${
          location.pathname === to ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
}

function MobileLink({ to, label, location }) {
  return (
    <Link
      to={to}
      className={`block hover:text-sky-600 ${
        location.pathname === to ? "font-semibold text-sky-700 underline" : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
