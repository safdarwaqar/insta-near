import React from "react";

const PromoSection = ({ title, description, imageSrc, reverse, bgColor }) => {
  return (
    <section
      className={`grid grid-cols-1z md:grid-cols-2 items-center gap-8 px-6 md:px-16 lg:px-24 py-14 rounded-3xl shadow-lg m-4`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Image Section */}
      <div
        className={`flex justify-center ${reverse ? "md:order-last" : "md:order-first"}`}
      >
        <img
          src={imageSrc}
          alt="Promo"
          className="w-[250px] md:w-[320px] lg:w-[400px] drop-shadow-xl rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PromoSection;
