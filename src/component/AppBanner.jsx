import React from 'react';

const AppBanner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
        <img src="/Assets/app-banner.png" className="w-svw  px-12 md:w-[590px] md:h-[590px] md:px-10 mt-4" alt="app banner" />
        <div className="absolute bottom-0 left-0 z-10 w-full h-28 bg-white bg-opacity-1">
        </div>
        {/* Background circle */}
      <div className="absolute top-0 left-0 z-0">
        {/* <img src="/Assets/greenCircle.png" alt="background circle" /> */}
      </div>
    </div>
  );
};

export default AppBanner;
