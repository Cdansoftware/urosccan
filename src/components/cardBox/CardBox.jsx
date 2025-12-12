import React from "react";
import PageTitle from "../PageTitle/PageTitle"; 
import { IoHeartSharp } from "react-icons/io5";

const Virtue = () => {
  const data = [
    {
      id: 1,
      name: "Advanced Diagnostic Accuracy",
      desc: "Our healthcare solutions are engineered with high-precision sensors and AI-powered analysis to ensure early and reliable detection of critical health conditions."
    },
    {
      id: 2,
      name: "Smart & Connected Health Devices",
      desc: "All products are integrated with intelligent monitoring systems, enabling seamless data tracking and real-time updates for enhanced patient care."
    },
    {
      id: 3,
      name: "Reliable & User-Friendly Design",
      desc: "Each device is built for long-term performance with an easy-to-use interface, ensuring accessibility for hospitals, clinics, and home users alike."
    }
  ];

  return (
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <PageTitle title="Our Best Points" />
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            We develop innovative healthcare products designed to improve early diagnosis, patient safety, and overall well-being. Our solutions combine technology and precision to support modern medical needs.
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="w-full p-4 cursor-pointer"
            >
              <div className="border border-slate-300 p-6 rounded w-full h-[250px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-[#236d6f] hover:bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <IoHeartSharp />
                </div>
                <div className="border-2 border-slate-800 rounded-full my-5"></div>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {item.name}
                </h2>
                <p className="leading-relaxed hover:text-[#236d6f] text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Virtue;
