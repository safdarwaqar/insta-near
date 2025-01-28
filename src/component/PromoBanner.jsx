import React from "react";
import "tailwindcss/tailwind.css";

const PromoBanner = () => {
  return (
    <div className="w-full max-w-screen-md -mt-6 md:mt-10 px-4 lg:mt-0 md:p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0F4827] mb-4 text-center leading-tight md:leading-[50px]">
          Empowering Local Stores
          <span className="text-[#679A3D]">
            {" "}
            to Thrive in the Era of Quick Commerce!
          </span>
        </h1>
        <p className="text-xs md:text-sm text-[#0F4827] mb-6 text-center">
          Speed, innovation, and community—powering local stores for modern
          commerce.
        </p>
        <div className="flex flex-col mt-2 md:flex md:flex-row md:gap-12 gap-10">
          <button className="w-[150px] md:w-[180px] ">
            <h1 className="font-bold ml-1">Partner App</h1>
            <img
              className="mt-2"
              src="/Assets/playstore.png"
              alt="Play Store"
            />
          </button>

          <button className="font-bold w-[150px] md:w-[180px]">
            <h1>InstaNear</h1>
            <img
              className="mt-2"
              src="/Assets/ios-store.png"
              alt="Play Store"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
