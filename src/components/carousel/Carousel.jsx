import React from "react";
import { ReactTyped } from "react-typed";
import vid from "../../assets/carousel-vid.mp4";

const Carousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (dark layer for better readability) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to{" "}
          <span className="text-teal-400">Uro-scan</span>
        </h1>

        <ReactTyped
          className="text-lg md:text-2xl max-w-2xl"
          strings={[
            "Providing trusted care with compassion and advanced technology",
            "Your health is our top priority",
            "Modern facilities with expert doctors",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>
    </div>
  );
};

export default Carousel;
