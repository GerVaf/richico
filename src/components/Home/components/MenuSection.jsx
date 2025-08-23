/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Garment from "./MenusComponent/Garment";
import Product from "./MenusComponent/Product";
import Textile from "./MenusComponent/Textile";

const tabs = [
  {
    key: "garment",
    label: "Garment",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/XJ/AC/FS/125472347/garment-job-work.jpg",
    component: <Garment />,
  },
  {
    key: "textile",
    label: "Textile",
    image:
      "https://img.freepik.com/free-photo/closeup-colorful-textile-fabric-collection-clothing-industry-background_90220-1216.jpg",
    component: <Textile />,
  },
  {
    key: "product",
    label: "Product",
    image:
      "https://img.freepik.com/free-photo/clothing-store-displays-shirts_23-2148901306.jpg",
    component: <Product />,
  },
];

const MenuSection = () => {
  const [activeKey, setActiveKey] = useState("garment");

  return (
    <div className=" py-6">
      {/* Tabs Header */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
        {tabs.map((tab) => (
          <motion.div
            key={tab.key}
            onClick={() => setActiveKey(tab.key)}
            className={`flex-shrink-0 cursor-pointer flex flex-col items-center gap-2 transition-all duration-300
              ${
                activeKey === tab.key
                  ? " rounded-xl"
                  : "opacity-70 hover:opacity-100"
              }
            `}
          >
            <div className="h-[90px] w-[140px] sm:h-[110px] sm:w-[180px] md:h-[130px] md:w-[220px] rounded-xl overflow-hidden shadow-md">
              <img
                src={tab.image}
                alt={tab.label}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <span className="text-sm sm:text-base font-medium text-gray-700">
              {tab.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {tabs.find((tab) => tab.key === activeKey)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuSection;
