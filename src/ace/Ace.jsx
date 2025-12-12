import React, { useEffect } from "react";
import Clint from "../assets/Client1.jpg";
import Clint2 from "../assets/client2.jpg";
import vill1 from "../assets/villa/villa1.jpg";
import vill2 from "../assets/villa/villa2.jpg";
import vill3 from "../assets/villa/villa3.jpg";
import vill5 from "../assets/villa/villa5.jpg";
import vill7 from "../assets/villa/villa7.jpg";
import { FaLocationDot } from "react-icons/fa6";
import Air from "../assets/ace/air.jpg";
import budh from "../assets/ace/buddh.jpg";
import filmcity from "../assets/ace/fil.jpg";
import Oly from "../assets/ace/oly.jpg";

export default function AceAcrevilleLandingPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const amenities = [
    {
      name: "GYM",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M6.5 6.5h11" stroke="#f3d06c" />
          <path d="M20 16V8M4 16V8" stroke="#f3d06c" />
          <rect x="8" y="4" width="8" height="4" rx="1" stroke="#f3d06c" />
          <rect x="8" y="16" width="8" height="4" rx="1" stroke="#f3d06c" />
          <path d="M15 12h1M8 12h1" stroke="#f3d06c" />
        </svg>
      ),
    },
    {
      name: "JOGGING TRACK",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <ellipse cx="12" cy="12" rx="8" ry="5" stroke="#f3d06c" />
          <ellipse cx="12" cy="12" rx="4" ry="2.5" stroke="#f3d06c" />
        </svg>
      ),
    },
    {
      name: "BANQUET",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path
            d="M17 10c0-4-4.5-6-5-6-0.5 0-5 2-5 6-0.5 0-2 0-2 2 0 1 1.5 2 1.5 2H12l1 2 1-2h5.5s1.5-1 1.5-2c0-2-1.5-2-2-2z"
            stroke="#f3d06c"
          />
          <path d="M12 16v2M9 18h6" stroke="#f3d06c" />
        </svg>
      ),
    },
    {
      name: "BADMINTON",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <circle cx="8" cy="8" r="4" stroke="#f3d06c" />
          <circle cx="16" cy="16" r="4" stroke="#f3d06c" />
          <path
            d="M4 16l4-4M20 8l-4 4M12 12l-2 2M14 10l-2 2"
            stroke="#f3d06c"
          />
        </svg>
      ),
    },
    {
      name: "BASKETBALL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <circle cx="12" cy="12" r="10" stroke="#f3d06c" />
          <path
            d="M4.93 4.93C7.83 7.83 12 12 12 12s4.17 4.17 7.07 7.07"
            stroke="#f3d06c"
          />
          <path
            d="M19.07 4.93C16.17 7.83 12 12 12 12s-4.17 4.17-7.07 7.07"
            stroke="#f3d06c"
          />
          <path d="M4.93 19.07L19.07 4.93" stroke="#f3d06c" />
        </svg>
      ),
    },
    {
      name: "KID PLAY AREA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M14 18l-3-3h-2l-3 3" stroke="#f3d06c" />
          <path d="M14 18v3h-9v-3" stroke="#f3d06c" />
          <path d="M17 15l-3-3M20 12l-3 3" stroke="#f3d06c" />
          <path d="M8 6h.01M16 6h.01" stroke="#f3d06c" />
          <path d="M12 10L8 6l4-3 4 3-4 4z" stroke="#f3d06c" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={vill1}
          alt="Luxury Real Estate"
          layout="responsive"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Ace Acreville
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Where Dreams Find Their Address
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-48 transition duration-300">
            Explore Now
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Prime Location Advantages
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Ace Acreville offers unparalleled access to the region's most
            exciting upcoming developments, positioning you at the center of
            future growth and prosperity.
          </p>

          {/* Upcoming Jewar Airport */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <img
                src={Air}
                layout="responsive"
                alt="Upcoming Jewar Airport"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Upcoming Jewar Airport
              </h3>
              <p className="text-gray-700 mb-4">
                Situated just 15 minutes from the new international airport
                development, Ace Acreville offers residents unparalleled
                convenience for business and leisure travel.
              </p>
              <p className="text-gray-700 mb-4">
                The Jewar Airport is set to become one of India's largest
                aviation hubs, handling over 70 million passengers annually when
                fully operational. This proximity not only enhances connectivity
                but ensures significant property value appreciation in the
                coming years.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="mr-2 font-semibold">Distance: 12 km</span>
                <span className="mr-2 font-semibold">•</span>
                <span className="font-semibold">Expected completion: 2026</span>
              </div>
            </div>
          </div>

          {/* Upcoming Film City */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <img
                src={budh}
                layout="responsive"
                alt="Upcoming Jewar Airport"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Upcoming Film City
              </h3>
              <p className="text-gray-700 mb-4">
                Live next door to India's most ambitious entertainment hub. The
                upcoming Film City project spans over 1,000 acres and will house
                world-class production facilities, studios, and post-production
                centers.
              </p>
              <p className="text-gray-700 mb-4">
                This development will not only create thousands of employment
                opportunities but also bring a vibrant cultural scene with
                theaters, restaurants, and entertainment venues right to your
                doorstep.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="mr-2 font-semibold">Distance: 8 km</span>
                <span className="mr-2 font-semibold">•</span>
                <span className="font-semibold">Expected completion: 2027</span>
              </div>
            </div>
          </div>

          {/* The Buddh International Circuit */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <img
                src={filmcity}
                layout="responsive"
                alt="Upcoming Jewar Airport"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                The Buddh International Circuit
              </h3>
              <p className="text-gray-700 mb-4">
                Experience the thrill of motorsport at your doorstep with the
                world-class Buddh International Circuit just minutes away from
                Ace Acreville.
              </p>
              <p className="text-gray-700 mb-4">
                This Formula 1 grade racetrack not only hosts international
                racing events but also serves as a venue for concerts,
                exhibitions, and corporate events throughout the year. The
                circuit area includes luxury hotels, retail spaces, and
                recreational facilities, making it a year-round attraction.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="mr-2 font-semibold">Distance: 20 km</span>
                <span className="mr-2 font-semibold">•</span>
                <span className="font-semibold">Fully operational</span>
              </div>
            </div>
          </div>

          {/* Upcoming Olympic Park */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-8 gap-8">
            <div className="md:w-1/2">
              <img
                src={Oly}
                layout="responsive"
                alt="Upcoming Jewar Airport"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Upcoming Olympic Park
              </h3>
              <p className="text-gray-700 mb-4">
                The planned Olympic Park will be a comprehensive sports and
                wellness destination spanning over 500 acres, designed to host
                national and international sporting events.
              </p>
              <p className="text-gray-700 mb-4">
                Residents of Ace Acreville will enjoy privileged access to
                world-class sports facilities including swimming pools, tennis
                courts, athletic tracks, and indoor arenas. The development also
                features expansive green spaces, walking trails, and
                recreational areas perfect for active lifestyles.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="mr-2 font-semibold">Distance: 15 km</span>
                <span className="mr-2 font-semibold">•</span>
                <span className="font-semibold">Expected completion: 2028</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-amber-200 border-2 border-amber-400 px-6 py-2">
              <h2 className="text-xl font-bold">AMENITIES AMENITIES</h2>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`bg-green-800 p-4 flex flex-col items-center justify-center ${
                  amenity.name === "BASKETBALL"
                    ? "border-2 border-amber-400"
                    : ""
                }`}
              >
                <div className="mb-4">{amenity.icon}</div>
                <p className="text-center text-white font-medium">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-4 mt-12 bg-green-800"></div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={vill2}
              alt="Modern Villa"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Modern Villa</h3>
              <p className="text-gray-700 mb-4">
                4 Beds • 3 Baths • 2,800 sq ft
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  On Request
                </span>
                <FaLocationDot className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={vill3}
              alt="Luxury Apartment"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Luxury Apartment</h3>
              <p className="text-gray-700 mb-4">
                3 Beds • 2 Baths • 1,500 sq ft
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  On Request
                </span>
                <FaLocationDot className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={vill5}
              alt="Suburban Home"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Suburban Home</h3>
              <p className="text-gray-700 mb-4">
                5 Beds • 4 Baths • 3,200 sq ft
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  On Request
                </span>
                <FaLocationDot className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Ace Acreville Pricing
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Premium living spaces designed to meet your needs, with flexible
              options and competitive pricing tailored to your requirements.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 200 sqd */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white py-4">
                <h3 className="text-2xl font-bold text-center">200 sq.ft</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-center h-24">
                  <p className="text-xl font-bold text-center text-gray-800">
                    Request on Call
                  </p>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Compact Design
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Studio Layout
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Modern Amenities
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Request Pricing
                </button>
              </div>
            </div>

            {/* 300 sqd */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform md:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-700 text-white py-4">
                <h3 className="text-2xl font-bold text-center">300 sq.ft</h3>
                <p className="text-center text-blue-200 text-sm">
                  Most Popular
                </p>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-center h-24">
                  <p className="text-xl font-bold text-center text-gray-800">
                    Request on Call
                  </p>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    1 Bedroom Design
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Balcony View
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Premium Amenities
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Parking Space
                  </li>
                </ul>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300">
                  Request Pricing
                </button>
              </div>
            </div>

            {/* 500 sqd */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white py-4">
                <h3 className="text-2xl font-bold text-center">500 sq.ft</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-center h-24">
                  <p className="text-xl font-bold text-center text-gray-800">
                    Request on Call
                  </p>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    2 Bedroom Design
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Premium Location
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Luxury Amenities
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Multiple Parking Spaces
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Garden Access
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Request Pricing
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-blue-600 text-white py-4">
              <h3 className="text-xl font-bold text-center">
                Property Comparison
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Property Type</th>
                    <th className="py-3 px-4 text-center">Size</th>
                    <th className="py-3 px-4 text-center">Price</th>
                    <th className="py-3 px-4 text-center">Inquiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Studio Apartment</td>
                    <td className="py-3 px-4 text-center">200 sq.ft</td>
                    <td className="py-3 px-4 text-center">Request on Call</td>
                    <td className="py-3 px-4 text-center">
                      <button className="bg-blue-600 text-white py-1 px-4 rounded text-sm hover:bg-blue-700">
                        Call Now
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="py-3 px-4">1 Bedroom Apartment</td>
                    <td className="py-3 px-4 text-center">300 sq.ft</td>
                    <td className="py-3 px-4 text-center">Request on Call</td>
                    <td className="py-3 px-4 text-center">
                      <button className="bg-blue-600 text-white py-1 px-4 rounded text-sm hover:bg-blue-700">
                        Call Now
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">2 Bedroom Apartment</td>
                    <td className="py-3 px-4 text-center">500 sq.ft</td>
                    <td className="py-3 px-4 text-center">Request on Call</td>
                    <td className="py-3 px-4 text-center">
                      <button className="bg-blue-600 text-white py-1 px-4 rounded text-sm hover:bg-blue-700">
                        Call Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Get Personalized Pricing
            </h3>
            <p className="text-lg mb-6">
              Our expert team is ready to provide you with detailed pricing
              information tailored to your specific needs and preferences.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xl font-bold">+91 99710-02874</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xl font-bold">
                  kapitalmultiplier7@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={vill7}
              alt="About Ace Acreville"
              layout="responsive"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Ace Acreville</h2>
            <p className="text-gray-700 mb-6">
              Ace Acreville – Premium Plots on Yamuna Expressway Ace Group
              proudly presents Ace Acreville, an exclusive plotted development
              nestled in Sector 22A, Greater Noida, strategically located along
              the Yamuna Expressway. This premium township offers a perfect
              blend of modern living and high investment potential, making it an
              exceptional choice for both homeowners and investors. Spread
              across 100 acres of verdant landscapes, Ace Acreville features 365
              thoughtfully planned residential plots ranging from 200 to 500 sq.
              yards, catering to varied lifestyle needs and architectural
              visions. Each plot is part of a well-structured, secure layout
              designed to deliver a seamless, upscale living experience. Located
              just 15 minutes from the upcoming Jewar International Airport, the
              project enjoys excellent connectivity to key urban centers
              including the proposed Film City, major commercial hubs, and
              leading educational institutions. With rapid infrastructure growth
              in the region, Ace Acreville is poised for significant capital
              appreciation. The township is enriched with world-class amenities
              such as a luxurious clubhouse, landscaped gardens, recreational
              zones, and eco-conscious designs, offering a harmonious balance of
              comfort, nature, and modernity. Its close proximity to malls,
              hospitals, schools, and temples further enhances the convenience
              and livability of the community. Registered under UP RERA
              (UPRERAPRJ248777/03/2025), Ace Acreville stands as a secure,
              well-planned gated community, offering not just land but a future
              of luxury, serenity, and long-term growth. Whether you're planning
              to build your dream home or looking for a smart investment with
              high rental yield and appreciation potential, Ace Acreville
              delivers on all fronts.
            </p>
            <p className="text-gray-700 mb-6">
              We pride ourselves on our personalized approach, attention to
              detail, and unparalleled market knowledge. Whether you're buying,
              selling, or investing, we're here to make your real estate journey
              seamless and rewarding.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <img
                src={Clint}
                alt="Client"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">Suresh Patel</h3>
                <p className="text-gray-600">Home Buyer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The team at Ace Acreville went above and beyond to help us find
              our dream home. Their expertise and dedication made the entire
              process smooth and enjoyable."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <img
                src={Clint2}
                alt="Client"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">Anita Rani</h3>
                <p className="text-gray-600">Property Investor</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I've worked with many real estate companies, but Ace Acreville
              stands out for their professionalism and market insight. They've
              helped me build a profitable investment portfolio."
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-200 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>

          <div className="mt-12 flex flex-col space-x-8">
            <div>
              <p className="font-bold text-xl mb-2">Call Us</p>
              <p> +91 99710-02874</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Email</p>
              <p>kapitalmultiplier7@gmail.com</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Visit</p>
              <p>
                Gaur City 1, Sector 4, Greater Noida West, Greater Noida, Uttar
                Pradesh, 201318
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
