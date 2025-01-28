import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import PromoBanner from "./component/PromoBanner";
import AppBenefits from "./component/AppBenefits";
import PromoSection from "./component/PromoSection";
import Footer from "./component/Footer";
import FeatureCard from "./component/FeatureCard";
import AppBanner from "./component/AppBanner";
import ImageCarousel from "./component/ImageCarousel";
import AppInstructions from "./component/AppInstructions";

const promoSections = [
  {
    title: "One place for groceries, medicines, food and much more",
    description:
      "Find everything you need in one app! Explore and shop for the best quality home and personal essentials.",
    imageSrc: "/Assets/iphone-instanear.png",
    reverse: false,
    bgColor: "#C4D9FF",
  },
  {
    title: "Explore the widest range of products",
    description:
      "Checkout and choose from a variety of products available from stores across the city.",
    imageSrc: "/Assets/iphone-instanear-shop.png",
    reverse: true,
    bgColor: "#E8F9FF",
  },
  {
    title: "One place for groceries, medicines, food and much more",
    description:
      "Find everything you need in one app! Explore and shop for the best quality home and personal essentials.",
    imageSrc: "/Assets/iphone-instanear.png",
    reverse: false,
    bgColor: "#FFE2E2",
  },
  {
    title: "Get exclusive discounts and offers!",
    description:
      "Save more with our special deals on groceries, medicine, and home essentials.",
    imageSrc: "/Assets/iphone-instanear-shop.png",
    reverse: true,
    bgColor: "#FFFDEC",
  },
];

function App() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center gap-14">
        <div className="w-44 top-72 md:w-96 md:top-64 md:left-32 h-auto absolute inset-0 z-0">
          <img src="/Assets/watermark.png" alt="logo" />
        </div>

        <Navbar className="z-10" />

        <div className="flex flex-col items-center justify-center gap-0 z-10">
          <PromoBanner />

          <div className="mt-20">
            <AppBanner />
          </div>

          <div className="md:flex items-start justify-center gap-32">
            <div>
              <h1 className="text-center text-[#679A3D] font-bold text-xl md:text-2xl mb-3">
                Partner App
              </h1>
              <img className="w-80" src="/Assets/ziraGo.png" alt="logo" />
            </div>
            <div className="mt-10 md:mt-0">
              <h1 className="text-center text-[#679A3D] font-bold text-xl md:text-2xl mb-3">
                InstaNear App
              </h1>
              <img className="w-80" src="/Assets/ziraGo.png" alt="logo" />
            </div>
          </div>

          {/* <AppBenefits /> */}

          {/* Promo Sections */}
          {promoSections.map((section, index) => (
            <div className="mt-5" key={index}>
              <PromoSection {...section} />
            </div>
          ))}
        </div>
        {/* <ImageCarousel className="mb-20" /> */}
      </div>

      <AppInstructions />
      {/* Full Width FeatureCard */}
      <FeatureCard />

      {/* Full Width Footer */}
      <Footer />
    </div>
  );
}

export default App;
