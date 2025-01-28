import React from 'react';

const ImageCarousel = ({ reverse = false }) => {
  const images = [
    '/Assets/applogo.png',
    '/Assets/playstore.png',
    '/Assets/InstaNearLogo.jpg',
    '/Assets/applogo.png',
    '/Assets/detailedBrandInsight.jpeg',
    '/Assets/shop2.jpeg',
    '/Assets/ziraGo.png',
    '/Assets/commisionFreeModel.jpeg',
    '/Assets/InstaNearLogo.jpg',
    '/Assets/applogo.png',
    '/Assets/playstore.png',
    '/Assets/InstaNearLogo.jpg'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex animate-scroll ${reverse ? 'animate-scroll-reverse' : ''} whitespace-nowrap`}>
        {images.concat(images).map((image, index) => (
          <div key={index} className="flex-shrink-0 p-0.5 md:p-3 ">
            <img
              src={image}
              alt={`Carousel ${index}`}
              className="h-11 w-auto md:h-28 md:w-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;





