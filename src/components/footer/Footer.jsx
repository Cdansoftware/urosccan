import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import Brand from "../../assets/brand/Brand.png";
import footerBg from "../../assets/building3.jpg"; // add your background image here

const Footer = () => {
  const styessions = "w-5 h-5 cursor-pointer hover:text-white";

  const SocialIcons = [
    {
      icon: <FaFacebookF className={styessions} />,
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61573755702740",
    },
    {
      icon: <FaTwitter className={styessions} />,
      title: "Twitter",
      link: "https://www.twitter.com",
    },
    {
      icon: <AiFillInstagram className={styessions} />,
      title: "Instagram",
      link: "https://www.instagram.com/kapitalmultiplier/",
    },
  ];

  const features = [
    { title: "Find our best Health Product" },
    { title: "24/7 Customer Support" },
    { title: "Live Chat & Assistance" },
  ];

  const sty =
    "text-slate-200 hover:scale-105 inline-block transition-transform duration-200 cursor-pointer";
  const styhead = "font-semibold tracking-widest text-xl text-blue-500";

  return (
    <footer className="relative text-gray-600 w-full border border-t-slate-400">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          opacity: 5,
        }}
      ></div>

      {/* Overlayed content */}
      <div className="relative z-10 mx-auto p-[5%] bg-slate-900 bg-opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 font-medium h-20 w-fit cursor-pointer bg-[#bbf7de] p-2 rounded-lg"
            >
              <img
                src={Brand}
                alt="Uro-Scan Logo"
                height={60}
                width={60}
                className="mb-2"
              />
              <h1 className="text-2xl font-bold text-[#236d6f]">Uro-Scan</h1>
            </div>

            <div className="flex flex-wrap gap-3 w-full">
              <p className="text-sm font-normal tracking-wide leading-6 text-slate-300">
                At <strong className="cursor-pointer">Uro-Scan</strong>, we are
                dedicated to revolutionizing early disease detection through
                intelligent waste analysis. Our advanced diagnostic system helps
                identify potential issues related to the{" "}
                <strong>kidney, liver, lungs, and other vital organs</strong>,
                bringing accessible healthcare to every home.
              </p>
            </div>
          </div>

          {/* Store Locator Section */}
          <div>
            <ul className="space-y-3">
              <h2 className={styhead}>STORE LOCATOR</h2>
              {features?.map((item, i) => (
                <li key={i}>
                  <a target="_blank" rel="noreferrer" className={sty}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h2 className={styhead}>CONTACT - US</h2>
            <div className="space-y-3 flex flex-col mt-2">
              <p className={sty}>
                <strong>Email: </strong>uroscan.sameer@gmail.com
              </p>
              <p className={sty}>
                <strong>Phone: </strong>+91 8416847643
              </p>
            </div>
          </div>

          {/* Services and Social */}
          <div className="flex flex-col space-y-4">
            <div className="mb-5">
              <h2 className={styhead}>SERVICES</h2>
              <ul className="flex flex-col space-y-3 mt-2">
                <li className={sty}>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li className={sty}>
                  <Link to="/about">About-Us</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-x-1">
              <h2 className={styhead}>SOCIAL LINKS</h2>
              <div className="flex space-x-2 mt-2">
                {SocialIcons.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-500 rounded-full p-2 hover:bg-slate-700 transition"
                  >
                    <span className="text-slate-400">{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between border border-t-slate-600 my-3"></div>
        <a
          href="https://www.google.com/maps/place/Golden+I+Noida+Extension/@28.5898501,77.4343625,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef3dae777eab:0x67981121a8de8a04!8m2!3d28.5898501!4d77.4343625!16s%2Fg%2F11s0t18mkc?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center space-x-3 hover:cursor-pointer hover:scale-105 transition-transform duration-200">
            <FaMapMarkerAlt className="w-9 h-9 sm:w-5 sm:h-5 fill-slate-50" />
            <span className="text-slate-300">
              Punjab, Ludhiana 
            </span>
          </div>
        </a>
        <div className="w-full flex justify-between border border-t-slate-600 my-3"></div>

        <div className="w-full justify-between hover:scale-105 inline-block transition-transform duration-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <strong className="cursor-pointer">Uro-scan</strong>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
