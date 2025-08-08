// src/components/Item.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import items from "./items";

const Item = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  // Adjust items per slide on resize
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3); // tablet
      } else {
        setItemsPerSlide(5); // desktop
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIndex = currentSlide * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h1 className="main-title">READY TO WEAR</h1>

      <div className="overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            // Responsive grid
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                className="p-2 sm:p-4"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-top rounded-lg"
                />
                <h2 className="text-base sm:text-lg font-semibold mt-2">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  {item.price.toFixed(2)} Kyats
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
