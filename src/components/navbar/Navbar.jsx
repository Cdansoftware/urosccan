import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Brand from "../../assets/brand/Brand.png";
import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    // { title: "Property", path: "/property" },
    { title: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-300 overflow-hidden ${
        scrolled
          ? "bg-[#bbf7de] md:shadow-md"
          : "bg-transparent md:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          data-aos="fade-right"
          className="flex items-center font-medium cursor-pointer"
        >
          <img
            src={Brand}
            alt="img"
            height={100}
            width={100}
            layout="responsive"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          data-aos="fade-down"
          className="hidden md:flex justify-center space-x-6 w-full"
        >
          {navLinks.map((item, i) => (
            <Link key={i} to={item.path}>
              <span
                className={`hover:text-[#fafdfd] ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button (Aligned Right) */}
        <div data-aos="fade-left" className="hidden md:flex justify-end">
          <button className="flex items-center gap-2 bg-[#12b0c5] text-white font-semibold px-5 py-2 rounded-sm shadow-lg transition duration-300 transform hover:scale-105">
            <PiPhoneCallFill className="w-5 h-5" />
            <span>+91 8416847643</span>
          </button>
        </div>

        {/* Mobile Menu Toggle (Right Aligned) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl justify-self-end"
        >
          {isOpen ? (
            <FaTimes
              className={`${scrolled ? "text-slate-600" : "text-white"}`}
            />
          ) : (
            <FaBars
              className={`${scrolled ? "text-slate-600" : "text-green-900"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 h-full bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full px-3"
        }`}
      >
        <div className="w-full justify-between flex items-center bg-gradient-to-r from-BrownDark via-BrownMid to-BrownDark bg-BrownMid">
          <div
            onClick={() => navigate("/")}
            data-aos="fade-right"
            className="flex items-center font-medium h-16 w-18 cursor-pointer p-3"
          >
            <img
              src={Brand}
              alt="img"
              height={100}
              width={100}
              layout="responsive"
            />
          </div>
          <RxCross2
            onClick={() => setIsOpen(false)}
            className="text-black h-6 w-6 font-bold m-3"
          />
        </div>

        <div className="flex flex-col h-full py-5 px-4 bg-BrownDark">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={toggleMenu}
              className="px-3 py-4 text-lg font-medium border-b border-gray-200  
            hover:scale-110 hover:text-[#CFA500] hover:font-semibold 
            hover:drop-shadow-[0_0_5px_#CFA500]
            transition-transform duration-300 ease-in-out text-black"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
