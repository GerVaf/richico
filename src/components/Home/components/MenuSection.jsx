/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Garment from "./MenusComponent/Garment";
import Product from "./MenusComponent/Product";
import Textile from "./MenusComponent/Textile";
import AboutUs from "./MenusComponent/AboutUs";

import IMG1 from "../../../assets/garment.jpg";
import IMG2 from "../../../assets/textile.jpg";
import IMG3 from "../../../assets/product.jpg";
import IMG4 from "../../../assets/Aboutus.jpg";
const tabs = [
  {
    key: "garment",
    label: "Garment",
    image: IMG1,
    component: <Garment />,
  },
  {
    key: "textile",
    label: "Textile",
    image: IMG2,
    component: <Textile />,
  },
  {
    key: "product",
    label: "Product",
    image: IMG3,
    component: <Product />,
  },
  {
    key: "about",
    label: "About Us",
    image: IMG4,
    component: <AboutUs />,
  },
];

const MenuSection = () => {
  const [activeKey, setActiveKey] = useState("garment");

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Tabs Header */}
      <div className="flex justify-start sm:justify-center gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-6">
        {tabs.map((tab) => {
          const isActive = activeKey === tab.key;
          return (
            <motion.div
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              whileHover={{ scale: 1.05 }}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-md ${
                isActive
                  ? "ring-2 ring-indigo-500"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="h-24 w-40 sm:h-28 sm:w-48 md:h-32 md:w-56 rounded-xl overflow-hidden">
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <span
                    className={`text-white font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                      isActive ? "text-indigo-300" : ""
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots for mobile */}
      <div className="flex justify-center gap-2 mb-6 sm:hidden">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeKey === tab.key ? "bg-indigo-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {tabs.find((tab) => tab.key === activeKey)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuSection;
