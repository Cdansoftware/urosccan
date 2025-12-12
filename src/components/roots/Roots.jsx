
import React from 'react';
import BackgroundImg from '../../assets/carousel/fun.jpg';
import Img3 from '../../assets/villa/villa5.jpg';

const Roots = () => {

  const steps = [
    {
      id: 1,
      title: "Discover & Evaluate",
      description:
        "We conduct in-depth research and analysis for every real estate project, ensuring data accuracy and strategic insights. Our approach involves assessing market trends, verifying legal documentation, and evaluating key performance indicators to identify the best opportunities.",
      iconPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      id: 2,
      title: "Strategic Planning & Feasibility",
      description:
        "Based on thorough evaluations, we develop customized strategies and actionable plans. Our assessments integrate market demand, investment potential, and the latest technological advancements to ensure sustainable and profitable real estate ventures.",
      iconPath:
        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      id: 3,
      title: "Blueprint for Success",
      description:
        "Once a solid plan is in place, we transition into the implementation phase. Our team engages in negotiations, formulates solutions, and oversees project execution, ensuring alignment with business objectives and market dynamics.",
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      id: 4,
      title: "Seamless Implementation",
      description:
        "We take full ownership of project execution, leveraging industry expertise, innovative methodologies, and advanced tools. Our structured approach minimizes risks while maximizing efficiency and profitability at every stage.",
      iconPath:
        "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 5,
      title: "Sustained Growth & Optimization",
      description:
        "Beyond execution, we provide continuous oversight, optimizing real estate assets for long-term value. Our focus is on streamlining operations, enhancing returns, and adapting to market shifts for sustained growth and success.",
      iconPath:
        "M14 5l7 7m0 0l-7 7m7-7H3",
    },
  ];

  return (
    <section className="text-white min-h-screen bg-cover bg-center relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Img3}
          alt="Background"
          fill
          className="object-cover z-0"
          quality={100}
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-950 opacity-70 z-1"></div>
      </div>

      <div className="container mx-auto py-12 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">How We build...?</h1>
        </div>

        {/* Timeline container */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>

          {steps?.map((step, index) => (
            <div
              key={step.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`flex flex-col md:flex-row items-center mb-24 relative ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Text Section */}
              <div
                className={`md:w-1/2 px-4 ${index % 2 === 0
                    ? "md:pr-8 md:text-right text-center"
                    : "md:pl-8 md:text-left text-center"
                  }`}
              >
                <h2 className="text-2xl font-bold mb-2 text-white">{step.title}</h2>
                <p className="text-blue-100">{step.description}</p>
              </div>

              {/* Icon Section */}
              <div
                className={`md:w-1/2 flex items-center mt-8 md:mt-0 ${index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                <div className="z-10 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-4">
                  {step.id}
                </div>
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <svg
                    className="w-12 h-12 text-[#236d6f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={step.iconPath}
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roots;