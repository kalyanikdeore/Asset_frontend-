import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { navLogo } from "../../assets/index";

const navItems = [
  { label: "HOME", path: "/" },
  {
    label: "ABOUT US",
    path: "/aboutus",
    submenu: [
      { label: "Vision & Mission", path: "/aboutus#vision" },
      { label: "Our Team", path: "/aboutus#team" },
    ],
  },
  {
    label: "SERVICES",
    submenu: [
      { label: "Services Overview", path: "/services/services-overview" },
      {
        label: "Portfolio Management System",
        path: "/services/portfolio-management",
      },
      { label: "Mutual Fund", path: "/services/mutual-funds" },
      { label: "Life Insurance", path: "/services/life-insurance" },
      { label: "Car Insurance", path: "/services/car-insurance" },
      { label: "Factory Insurance", path: "/services/factory-insurance" },
      { label: "WC Policy ", path: "/services/wc-insurance" },

      { label: "Marine Insurance", path: "/services/marine-insurance" },
      { label: "Liability Insurance", path: "/services/liability-insurance" },
      { label: "Bonds", path: "/services/bonds" },
      { label: "LiquiLoans", path: "/services/liquiloans" },
    ],
  },
  {
    label: "PRODUCTS",
    submenu: [
      { label: "Mutual Funds", path: "/products/mutual-funds" },
      { label: "Life Insurance", path: "/products/life-insurance" },
      { label: "General Insurance", path: "/products/general-insurance" },
    ],
  },
  {
    label: "PERSONALIZED PLANNING",
    submenu: [
      { label: "Child's Education Planning", path: "/goals/child-education" },
      { label: "Child's Wedding Planning", path: "/goals/child-wedding" },
      { label: "Dream Home", path: "/goals/dream-home" },
      { label: "Dream Car", path: "/goals/dream-car" },
      { label: "Dream Vacation", path: "/goals/dream-vacation" },
      { label: "Retirement Plan", path: "/goals/retirement-plan" },
      { label: "SIP Plan", path: "/goals/sip-plan" },
    ],
  },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contactus" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hideTopBar, setHideTopBar] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDesktopDropdown = (index) =>
    setDesktopDropdown(desktopDropdown === index ? null : index);
  const toggleMobileDropdown = (index) =>
    setMobileDropdown(mobileDropdown === index ? null : index);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-[100]">
      {/* Top Contact Bar */}
      <div
        className={`bg-gradient-to-r from-blue-900 to-blue-700 text-gray-100 text-sm px-4 md:px-10 transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-[100]`}
      >
        <ContentWrapper>
          <div className="flex justify-between items-center py-2">
            <a
              href="mailto:sanjay.insurance@gmail.com"
              className="hover:underline"
            >
              sanjay.insurance@gmail.com
            </a>
            <a href="tel:9970436943" className="hover:underline">
              +91 9822770225
            </a>
          </div>
        </ContentWrapper>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed w-full left-0 transition-all duration-300 z-[90] shadow-sm bg-white"
        style={{ top: hideTopBar ? "0" : "38px" }}
      >
        <div className="flex justify-between items-center px-4 md:px-10 py-3">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src={navLogo} alt="logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 font-medium text-gray-800 relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && toggleDesktopDropdown(index)
                }
                onMouseLeave={() => item.submenu && toggleDesktopDropdown(null)}
              >
                <button
                  onClick={() =>
                    item.submenu
                      ? toggleDesktopDropdown(index)
                      : navigate(item.path)
                  }
                  className="hover:text-blue-700 flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </button>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {desktopDropdown === index && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-10 left-0 bg-white rounded-lg shadow-lg py-2 px-3 min-w-[220px] z-[120]"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => navigate(subItem.path)}
                          className="hover:bg-blue-100 px-3 py-2 rounded text-sm text-gray-700 cursor-pointer"
                        >
                          {subItem.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-blue-700">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-[110] shadow-xl p-6 overflow-y-auto"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800"
            >
              <X size={28} />
            </button>

            <div className="mt-12 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="w-full text-left font-semibold py-3 flex justify-between items-center text-blue-600"
                      >
                        {item.label}
                        {mobileDropdown === index ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>

                      {/* Mobile Dropdown Content */}
                      <AnimatePresence>
                        {mobileDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-2 mt-2">
                              {item.submenu.map((sub, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    navigate(sub.path);
                                    toggleMenu();
                                  }}
                                  className="py-2 text-gray-700 hover:text-blue-600 cursor-pointer flex items-center hover:bg-blue-50 rounded px-2"
                                >
                                  <span className="mr-2">•</span>
                                  {sub.label}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        navigate(item.path);
                        toggleMenu();
                      }}
                      className="w-full text-left font-semibold py-3 text-gray-900"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
