import React from "react";

const FeatureCard = () => {
  return (
    <section className="bg-[#001524] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-[#56E39F] mb-6 transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              <span className="block">Flexible</span>
              <span className="block">Delivery</span>
            </h3>
            <p className="text-[#56E39F] text-sm md:text-base max-w-[250px]">
              Timing is everything. We can bring it to you within minutes or tomorrow - you have the choice
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-[#56E39F] mb-6 transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              <span className="block">Quality</span>
              <span className="block">Products</span>
            </h3>
            <p className="text-[#56E39F] text-sm md:text-base max-w-[250px]">
              We feature best-sellers &amp; top local brands to make sure you find everything you love.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-[#56E39F] mb-6 transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              <span className="block">Attractive</span>
              <span className="block">Prices</span>
            </h3>
            <p className="text-[#56E39F] text-sm md:text-base max-w-[250px]">
              Same prices as your local supermarket.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-[#56E39F] mb-6 transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              <span className="block">Large</span>
              <span className="block">Assortment</span>
            </h3>
            <p className="text-[#56E39F] text-sm md:text-base max-w-[250px]">
              We offer over 10,000 different products - we customize our assortment for every customer to be relevant.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
