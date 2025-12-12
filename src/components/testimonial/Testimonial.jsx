import React from "react";
import { Stethoscope, CalendarDays, Ambulance, Headset } from "lucide-react"; 
import Heading from "../heading/Heading";

const services = [
  {
    title: "Consult a Doctor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Stethoscope size={32} />,
  },
  {
    title: "Medical Appointments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <CalendarDays size={32} />,
    active: true, 
  },
  {
    title: "Emergency Case",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Ambulance size={32} />,
  },
  {
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Headset size={32} />,
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-50">
        <Heading text="Our Services" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md transition transform hover:-translate-y-2 cursor-pointer hover:shadow-2xl
                ${
                  service.active
                    ? "bg-teal-600 text-white"
                    : "bg-white text-gray-700 hover:bg-teal-50"
                }`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl mb-4
                ${
                  service.active
                    ? "bg-white text-teal-600"
                    : "bg-teal-100 text-teal-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p
                className={`text-sm ${
                  service.active ? "text-gray-100" : "text-gray-500"
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

