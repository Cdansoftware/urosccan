import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import Img1 from "../assets/villa/villaa.png";

const About = () => {
  const slides = [
    {
      image: Img1,
      heading: "Seeking the right real\nestate service?",
      description: "Let us help you find your property",
      primaryButton: "BUY A PROPERTY",
      secondaryButton: "LEASE A PROPERTY",
    },
    {
      image: Img1,
      heading: "Discover your dream\nhome today",
      description: "Exclusive properties waiting for you",
      primaryButton: "VIEW LISTINGS",
      secondaryButton: "CONTACT AN AGENT",
    },
    {
      image: Img1,
      heading: "Premium locations\nfor your lifestyle",
      description: "Find the perfect neighborhood for your needs",
      primaryButton: "EXPLORE AREAS",
      secondaryButton: "GET PRE-APPROVED",
    },
    {
      image: Img1,
      heading: "Investment properties\nwith high returns",
      description: "Grow your wealth with strategic real estate",
      primaryButton: "INVESTMENT OPTIONS",
      secondaryButton: "SPEAK TO AN ADVISOR",
    },
    {
      image: Img1,
      heading: "Custom built homes\ntailored to you",
      description: "Design your dream space from the ground up",
      primaryButton: "CUSTOM BUILDS",
      secondaryButton: "VIEW FLOOR PLANS",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentTransitioning, setIsContentTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsContentTransitioning(true);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setAnimationKey((prev) => prev + 1);
        setTimeout(() => {
          setIsContentTransitioning(false);
        }, 300);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white">
      <div className="relative w-full h-[230px] sm:h-[400px] overflow-hidden">
        {slides?.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlideIndex ? 1 : 0,
              zIndex: index === currentSlideIndex ? 10 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-6 z-30 transition-opacity duration-500 ${
            isContentTransitioning ? "opacity-0" : "opacity-100"
          }`}
          key={animationKey}
        >
          <h1 className="text-xl sm:text-[60px] font-bold whitespace-pre-line">
            About Our Product
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 transform transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] rounded-xl overflow-hidden shadow-2xl p-5">
                <img
                  src={Img1}
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-[#236d6f] opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-700 opacity-20 rounded-full blur-lg"></div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2 text-center md:text-left px-4 sm:px-6 md:px-0 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#236d6f] mb-2">
                Our Product Details
              </h2>
              <div className="w-24 h-1.5 bg-green-700 my-4 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Founded by <strong>Mr. Sameer and Mr. Chandan prajapati</strong>,{" "}
                <span className="font-semibold text-[#236d6f]">Uro-Scan</span>{" "}
                was created with a clear purpose: to revolutionize early health
                detection through waste analysis. After realizing how many
                health issues go unnoticed due to the lack of timely testing,
                Mr.Sameer brought together a team of experts passionate about
                accessible and preventive healthcare.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                What began as a small research initiative has now grown into one
                of the most promising innovations in medical diagnostics. Our
                technology enables users to detect potential problems related to
                the{" "}
                <span className="font-semibold text-[#236d6f]">
                  kidney, liver, lungs, and other vital organs
                </span>{" "}
                simply through urine-based analysis — making early diagnosis
                more accessible than ever before.
              </p>

              <div className="mt-2">
                <button className="bg-[#236d6f] hover:bg-[#1a5254] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        {/* <section className="text-gray-800 body-font bg-white my-5 p-6 sm:p-12 rounded-md shadow-lg hover:shadow-2xl">
          <div className="container px-5 py-12 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10 items-center sm:items-start">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full inline-flex items-center justify-center border-4 border-green-800 shadow-md p-2 bg-white">
                    <FaUserCircle className="w-16 h-16 text-green-900" />
                  </div>
                  <h2 className="font-semibold mt-4 text-gray-900 text-lg sm:text-xl">
                    Mr. Harsh Malik
                  </h2>
                  <div className="w-16 h-1 bg-amber-500 rounded mt-2 mb-4"></div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-6 bg-gray-100 rounded-lg p-6 border-l-4 border-green-700 shadow-sm text-center sm:text-left">
                  <p className="leading-relaxed text-sm sm:text-base font-light text-gray-700">
                    With over 22 years of expertise in the Indian real estate
                    industry, Harsh Malik has been a key influencer in shaping
                    the sector. Born and raised in Delhi, he possesses
                    deep-rooted knowledge of the region's evolving property
                    landscape. For the past 15+ years, he has specialized in the
                    sale and lease of high-value properties, including plots,
                    luxury villas, premium apartments, and farmhouses, serving
                    both residential and commercial clients with exceptional
                    professionalism and insight.
                  </p>
                  <div className="hidden md:flex justify-center">
                    <button className="flex items-center gap-2 bg-[#236d6f] text-white font-semibold px-5 py-2 rounded-sm shadow-lg transition duration-300 transform hover:scale-105 my-5">
                      <PiPhoneCallFill className="w-5 h-5" />
                      <span>+91 99710-02874</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default About;
