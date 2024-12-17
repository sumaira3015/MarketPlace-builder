import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/zapier-logo.png", alt: "Zapier Logo" },
  { src: "/images/pipedrive-logo.png", alt: "PipeDrive Logo" },
  { src: "/images/cibbank-logo.png", alt: "CIA Bank Logo" },
  { src: "/images/z-logo.png", alt: "Z Bank Logo" },
  { src: "/images/burn-logo.png", alt: "Burn Toast Logo" },
  { src: "/images/panadoc-logo.png", alt: "PanaDoc Logo" },
  { src: "/images/moz-logo.png", alt: "Moz Logo" },
];

const LogoSection = () => {
  return (
    <div className="w-full bg-[#ffffff] flex justify-center py-6">
      <div className="w-full max-w-[1321px] h-auto flex flex-wrap justify-center md:justify-between items-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[120px] sm:w-[140px] md:w-[107px] flex justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={107}
              height={109}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
