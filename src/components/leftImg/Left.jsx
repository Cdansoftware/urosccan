import React from "react";
import doctorImage from "../../assets/doctormg.png";

const stats = [
  { number: "30+", label: "Specialist Doctors" },
  { number: "1k+", label: "Happy Patients" },
  { number: "50+", label: "Hospital Rooms" },
];

const LeftBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-teal-600 font-medium uppercase mb-2">
            Why patients choose
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Center</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-wrap gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer justify-center w-28 h-28 rounded-full border-2 border-teal-500 
                 bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.2), inset 0 4px 8px rgba(255, 255, 255, 0.6)",
                }}
              >
                <span className="text-2xl font-bold text-gray-800">
                  {item.number}
                </span>
                <span className="text-xs text-gray-500 text-center px-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={doctorImage}
            alt="Doctors"
            className="w-[350px] lg:w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LeftBanner;
