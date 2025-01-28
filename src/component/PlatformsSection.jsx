import React from "react";

const PlatformsSection = () => {
  const platforms = [
    { name: "meet-logo", src: "/images/playstore.png" },
   
  ];

  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-4 lg:gap-8">
      {/* Header Section */}
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h1 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95]">
          Works on, Android and iOS
        </h1>
        <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
        Take the Next Step Toward a Modern, Profitable Future
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center w-full">
        {platforms.map(({ name, src, hiddenOnMobile }) => (
          <div key={name} className={`flex justify-center items-center ${hiddenOnMobile ? "hidden md:block" : ""}`}>
            <img
              alt={`${name} logo`}
              loading="lazy"
              width="120"
              height="60"
              decoding="async"
              className="w-20 md:w-28"
              srcSet={`${src}?w=128&q=75 1x, ${src}?w=256&q=75 2x`}
              src={`${src}?w=256&q=75`}
              style={{ color: "transparent" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformsSection;
