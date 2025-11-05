import React from "react";

// ✅ Import Telangana Logo
import telanganaLogo from "../../assets/Images/Telangana/telangana.webp";

// ✅ Import ALL images manually
import img1 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.31 PM.jpeg";
import img2 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.32 PM.jpeg";
import img3 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.31 PM (2).jpeg";
import img4 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.31 PM (1).jpeg";
import img5 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.30 PM.jpeg";
import img6 from "../../assets/Images/Telangana/WhatsApp Image 2025-11-04 at 12.42.30 PM (1).jpeg";

export default function ClientTelangana() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full min-h-screen p-6">
      {/* ✅ Logo & Header */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={telanganaLogo}
          alt="Government of Telangana"
          className="w-28 h-28 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold">Government of Telangana</h1>
          <p className="text-gray-600">Client — Telangana Smart Metering Work</p>
        </div>
      </div>

      {/* ✅ Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={img}
              alt={`Telangana Work ${index + 1}`}
              className="w-full object-cover"
              style={{ height: "420px" }} // ✅ Bigger images
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
