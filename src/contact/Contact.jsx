import { useState } from "react";
import Img5 from "../assets/carousel/Cimg5.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaMapPin, FaClock, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1000);
  };

  const offices = [
    {
      name: "Uro-Scan",
      address:
        "Punjab, Ludhiana",
      phone: "+91 84168-47643",
      email: "uroscan.sameer@gmail.com",
      hours: "Monday to Saturday",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Property Listing",
    "Buying a Property",
    "Selling a Property",
    "Career Opportunities",
    "Press & Media",
  ];

  return (
    <div className="bg-white">
      <div className="relative w-full h-[230px] sm:h-[400px] overflow-hidden">
        <div className="relative w-full h-screen">
          {" "}
          <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
            <img src={Img5} alt="img" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-6 z-30 transition-opacity duration-500 opacity-100">
          <h1
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-xl sm:text-[60px] font-bold whitespace-pre-line"
          >
            Contact - Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have a question or need assistance? Fill out the form below, and
              one of our representatives will get back to you shortly.
            </p>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <span className="bg-green-100 p-2 rounded-full">
                    <FaCheckCircle className="w-8 h-8 text-green-600" />
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you
                  as soon as possible.
                </p>
                <button
                  onClick={() =>
                    setFormStatus({ submitted: false, error: false })
                  }
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>

            <hr className="border-2 border-b-slate-700 rounded-full" />

            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {office.name}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <FaMapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mr-3" />
                      <span className="text-gray-600">{office.address}</span>
                    </li>
                    <li className="flex">
                      <FaPhoneVolume className="h-6 w-6 text-blue-600 flex-shrink-0 mr-3" />
                      <span className="text-gray-600">{office.phone}</span>
                    </li>
                    <li className="flex">
                      <IoMdMailUnread className="h-6 w-6 text-blue-600 flex-shrink-0 mr-3" />
                      <span className="text-gray-600">{office.email}</span>
                    </li>
                    <li className="flex">
                      <FaClock className="h-6 w-6 text-blue-600 flex-shrink-0 mr-3" />
                      <span className="text-gray-600">{office.hours}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Us
          </h2>
          <div className="rounded-xl border-2 border-slate-400 backdrop-blur-lg shadow-2xl h-[400px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.9337633156033!2d77.4343625!3d28.5898501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3dae777eab%3A0x67981121a8de8a04!2sGolden%20I%20Noida%20Extension!5e0!3m2!1sen!2sin!4v1709653282000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
          <p className="text-center text-slate-800 mt-4">
            Interactive map would be embedded here. For implementation, you can
            use Google Maps, Mapbox, or another mapping service.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How quickly will I hear back after contacting you?
            </h3>
            <p className="text-gray-600">
              We aim to respond to all inquiries within 24 hours during business
              days. For urgent matters, we recommend calling our office
              directly.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do I need to make an appointment to visit your office?
            </h3>
            <p className="text-gray-600">
              Walk-ins are welcome during regular business hours, but scheduling
              an appointment ensures that the appropriate agent will be
              available to assist you.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do I list my property with Real-E-State?
            </h3>
            <p className="text-gray-600">
              Contact us through this form or call our office to schedule a
              consultation. A dedicated agent will assess your property and
              guide you through the listing process.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do you offer virtual consultations?
            </h3>
            <p className="text-gray-600">
              Yes, we provide virtual consultations via video call for clients
              who prefer remote meetings. Simply mention your preference when
              scheduling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
