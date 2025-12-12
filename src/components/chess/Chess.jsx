import React from "react";
import doctorImg from "../../assets/doct.png"; // replace with your image path
import Heading from "../heading/Heading";
import CustomButton from "../customeButton/CustomButton";

const Hero = () => {
  return (
    <section className="py-16 bg-white">
      <Heading text="Why Choose Us...?" />
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            We Made it Health Care <br />
            <span className="text-gray-900">Easy for your family</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            arcu euismod, placerat nunc eget, scelerisque elit. Curabitur
            scelerisque elit sit amet lorem varius, eget bibendum metus mattis.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <CustomButton submit="Learn more..." />
          </div>
        </div>

        {/* Right Image & Stats */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          {/* Circular Background */}
          <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-orange-100 rounded-full -z-10"></div>

          {/* Doctor Image */}
          <img
            src={doctorImg}
            alt="Doctor"
            className="relative z-10 w-64 lg:w-80 object-cover"
          />

          {/* Badge Top Right */}
          <div className="absolute top-4 right-8 bg-white shadow-lg rounded-lg px-4 py-2 text-center">
            <p className="text-gray-900 font-bold">600k+</p>
            <p className="text-sm text-gray-600">patient request</p>
          </div>

          {/* Badge Bottom Left */}
          <div className="absolute bottom-4 left-8 bg-white shadow-lg rounded-lg px-4 py-2 text-center">
            <p className="text-gray-900 font-bold">5600+</p>
            <p className="text-sm text-gray-600">Healthcare Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
