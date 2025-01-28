import React from "react";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <nav className="w-80 md:w-[614px] h-[55px] mt-5 md:mt-[64px] lg:mt-[64px] mx-auto rounded-full border border-[#679A3D] flex justify-between items-center px-4 md:px-8 bg-white">
      <img
        src="/Assets/instanear-logo.png"
        className="w-24 h-auto md:w-[134px] md:h-[32px]"
        alt="logo"
      />

      <div className="flex items-center gap-2 ml-2 md:ml-0">
        <a href="#" className="hidden  text-xs md:text-sm text-[#679A3D] font-bold">
          Become a Partner
        </a>
        <button className="hidden px-2 py-1 md:px-4 md:py-2 cursor-pointer">
          <img src="/Assets/download-icon-nav.png" alt="download icon" />
        </button>
      </div>

      <div className="flex items-center gap-1 md:gap-2 ml-auto">
        <a href="#" className="text-xs md:text-sm lg:text-sm text-[#679A3D] font-extrabold">
          About Us
        </a>
        <h3 className="text-sm pb-0.5 text-[#679A3D] font-bold">|</h3>
        <a href="#" className="text-xs md:text-sm lg:text-sm text-[#679A3D] font-extrabold">
          How it works?
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
