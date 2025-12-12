import { Link } from "react-router-dom";
import Img from "../assets/service.jpg";
import Ace from "../assets/ace.jpg";
import Godrej from "../assets/godrej.webp";
import Yammuna from "../assets/yamuna.jpg";
import { useEffect } from "react";

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Ace Acreville",
      price: "On Request",
      location: "Plots In Yamuna Expressway",
      features: "4 beds • 3 baths • 3,200 sq ft",
      image: Ace,
      type: "For Sale",
      path: "/ace", // internal path
    },
    {
      id: 2,
      title: "Godrej Luxury Apartment",
      price: "On Request",
      location: "Godrej",
      features: "2 beds • 2 baths • 1,500 sq ft",
      image: Godrej,
      type: "For Sale",
      path: "https://godrejpropertysector12.com/", // external URL
    },
    {
      id: 3,
      title: "Yamuna Expressway",
      price: "On Request",
      location: "Yamuna Expressway",
      features: "5 beds • 4 baths • 3,800 sq ft",
      image: Yammuna,
      type: "For Rent",
      path: "https://luxuryflatsandapartmentyamunaexpressway.com", // external URL
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="relative w-full h-[230px] sm:h-[400px] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <img
            src={Img}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-6 z-30 transition-opacity duration-500">
          <h1 className="text-xl sm:text-[60px] font-bold whitespace-pre-line">
            Our Luxury Properties
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Exclusive Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of{" "}
              <strong>luxurious, high-value</strong> properties in{" "}
              <strong>prime locations</strong>. Whether you're looking for a
              dream home or a strategic investment, we bring you the finest real
              estate opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => {
              const isExternal = property.path.startsWith("http");

              const cardContent = (
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#236d6f] hover:bg-[#1a5254] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {property.type}
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">
                        {property.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-blue-500 inline mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="line-clamp-1">{property.location}</span>
                    </p>

                    <p className="text-gray-500 mb-6 line-clamp-3">
                      {property.features}
                    </p>

                    <div className="flex space-x-3 mt-auto">
                      <button className="flex-1 bg-[#236d6f] hover:bg-[#1a5254] text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center cursor-pointer">
                        <span>Call us : +91 99710-02874</span>
                      </button>
                    </div>
                  </div>
                </div>
              );

              return isExternal ? (
                <a
                  key={property.id}
                  href={property.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              ) : (
                <Link key={property.id} to={property.path} className="block">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
