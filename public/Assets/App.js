import logo from './logo.svg';
import Navbar from './component/Navbar';
import Body from './component/Body';
import MeetingSection from './component/MeetingSection'
import HowItWorks from './component/HowItWorks'
import ImageCarousel from './component/ImageCarousel'
import DownloadButton from './component/DownloadButton'
import AppInstructions from './component/AppInstructions'
import PromoSection from './component/PromoSection'
import PromoSections from './component/FeatureCard'
import Footer from './component/Footer';



function App() {
  return (
    <div>

      <div className="mr-5 ml-5 mt-24 md:mr-10 md:ml-10">
        {/* Navigation Bar */}
        <div>
          <Navbar></Navbar>
        </div>

        <div className="mt-5">
          {/* Image on Right, Text on Left */}
          <PromoSection
            // <span className=" text-black">Shop from your</span>  <span className=" text-orange-600 text-3xl"> favorite local stores</span> and <span className=" text-orange-600 md:text-6xl text-3xl">supermarkets{" "}</span>

            title="Shop from your favorite local stores with instaNear!"
            // Shop from your favorite local stores for fruits, stationery, decor, toys, and more with InstaNear. Enjoy quick, hassle-free delivery to your doorstep!
            description="Shop from your favorite local stores for fruits, stationery, decor, toys, and more with InstaNear. Enjoy quick, hassle-free delivery to your doorstep!"
            imageSrc="/Assets/ziraGo.png" // Replace with your actual image path
            reverse={true} // Image Right, Text Left
            bgColor="#FFFDEC"

          />



        </div>

        <div className="mt-5">
          <AppInstructions />
        </div>

        <div className="mt-20 md:mt-32 md:ml-8 md:mr-8">
          {/* <Body /> */}
          <div className="flex items-center justify-center mt-10  flex-col grid-flow-col gap-2 md:mt-12 md:flex-row md:grid-flow-row md:gap-5">
            {/* <h1 className="text-lg text-gray-800 font-serif font-bold">Download Our Application</h1> */}
            {/* <DownloadButton /> */}
          </div>


        </div>

        <div className="mt-8 md:mt-8">
          {/* <h1 className="text-lg text-gra500">Why InstaNear?</h1> */}
          <ImageCarousel />
          {/* <h1 className="mt-4">Why InstaNear?</h1> */}
          {/* <ImageCarousel reverse /> */}
        </div>

        <div className="flex justify-center items-center min-h-screen">
          <HowItWorks />
        </div>

        <div>
          <MeetingSection />
        </div>




        <div className="mt-5">
          {/* Image on Left, Text on Right */}
          <PromoSection
            title="One place for groceries, medicines, food and much more"
            description="Find everything you need in one app! Explore and shop for the best quality home and personal essentials."
            imageSrc="/Assets/ziraGo.png" // Replace with your actual image path
            reverse={false} // Default (Image Left, Text Right)
            bgColor="#C4D9FF"
          />
        </div>

        <div className="mt-5 ">
          {/* Image on Right, Text on Left */}
          <PromoSection
            title="Explore the widest range of products"
            description="Checkout and choose from a variety of products available from stores across the city."
            imageSrc="/Assets/appStore.png" // Replace with your actual image path
            reverse={true} // Image Right, Text Left
            bgColor="#E8F9FF"
          />
        </div>

        <div className="mt-5">
          {/* Image on Left, Text on Right */}
          <PromoSection
            title="One place for groceries, medicines, food and much more"
            description="Find everything you need in one app! Explore and shop for the best quality home and personal essentials."
            imageSrc="/Assets/ziraGo.png" // Replace with your actual image path
            reverse={false} // Default (Image Left, Text Right)
            bgColor="#FFE2E2"
          />

        </div>

        <div className="mt-5">
          {/* Image on Right, Text on Left */}
          <PromoSection
            title="Get exclusive discounts and offers!"
            description="Save more with our special deals on groceries, medicine, and home essentials."
            imageSrc="/Assets/ziraGo.png" // Replace with your actual image path
            reverse={true} // Image Right, Text Left
            bgColor="#FFFDEC"
          />


        </div>

      </div>

      <div>
        <PromoSections></PromoSections>
      </div>

      <div>
        <Footer />
      </div>


    </div>
  );
}

export default App;
