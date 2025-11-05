import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// ✅ MIDC Logo
import MIDCLogo from "../../assets/Images/Home/Client/midc.webp";

// ✅ Import ALL MIDC images
import img1 from "../../assets/Images/MIDC/Bento1.jpg";
import img2 from "../../assets/Images/MIDC/Bento2.jpg";
import img3 from "../../assets/Images/MIDC/Bento3.jpg";
import img4 from "../../assets/Images/MIDC/Bento4.jpg";
import img5 from "../../assets/Images/MIDC/Bento5.jpg";
import img6 from "../../assets/Images/MIDC/Bento6.jpg";
import img7 from "../../assets/Images/MIDC/Bento7.jpg";
import img8 from "../../assets/Images/MIDC/Bento8.jpg";
import img9 from "../../assets/Images/MIDC/Bento9.jpg";
import img10 from "../../assets/Images/MIDC/Bento10.jpg";
import img11 from "../../assets/Images/MIDC/Bento11.jpg";
import img12 from "../../assets/Images/MIDC/Bento12.jpg";
import img13 from "../../assets/Images/MIDC/Bento13.jpg";
import img14 from "../../assets/Images/MIDC/Bento14.jpg";
import img15 from "../../assets/Images/MIDC/Bento15.jpg";
import img16 from "../../assets/Images/MIDC/Bento16.jpg";
import img17 from "../../assets/Images/MIDC/Bento17.jpg";
import img18 from "../../assets/Images/MIDC/Bento18.jpg";
import img19 from "../../assets/Images/MIDC/Bento19.jpg";
import img20 from "../../assets/Images/MIDC/Bento20.jpg";
// import img21 from "../../assets/Images/MIDC/Bento21.jpg";
// import img22 from "../../assets/Images/MIDC/Bento22.jpg";
// import img23 from "../../assets/Images/MIDC/Bento23.jpg";
// import img24 from "../../assets/Images/MIDC/Bento24.jpg";
// import img25 from "../../assets/Images/MIDC/Bento25.jpg";
// import img26 from "../../assets/Images/MIDC/Bento26.jpg";
// import img27 from "../../assets/Images/MIDC/Bento27.jpg";
// import img28 from "../../assets/Images/MIDC/Bento28.jpg";
// import img29 from "../../assets/Images/MIDC/Bento29.jpg";
// import img30 from "../../assets/Images/MIDC/Bento30.jpg";
// import img31 from "../../assets/Images/MIDC/Bento31.jpg";
// import img32 from "../../assets/Images/MIDC/Bento32.jpg";
// import img33 from "../../assets/Images/MIDC/Bento33.jpg";
// import img34 from "../../assets/Images/MIDC/Bento34.jpg";
// import img35 from "../../assets/Images/MIDC/Bento35.jpg";
// import img36 from "../../assets/Images/MIDC/Bento36.jpg";
// import img37 from "../../assets/Images/MIDC/Bento37.jpg";

export default function ClientMIDC() {
  const navigate = useNavigate();

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    // img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    // img31, img32, img33, img34, img35, img36, img37,
  ];

  return (
    <div
      className="w-full min-h-screen p-6"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* ✅ Header + Logo */}
      <div className="flex items-center gap-4 mb-8">
        <img src={MIDCLogo} alt="MIDC Logo" className="w-28 h-28 object-contain" />
        <div>
          <h1 className="text-3xl font-bold">MIDC</h1>
          <p className="text-gray-600">
            Client — Maharashtra Industrial Development Corporation
          </p>
        </div>
      </div>

     

    

      {/* ✅ Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={img}
              alt={`MIDC Work ${index + 1}`}
              className="w-full object-cover"
              style={{ height: "420px" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
