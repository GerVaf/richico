import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import items from "../items";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Adjust items per slide on resize
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // small tablets
      } else if (window.innerWidth < 1280) {
        setItemsPerSlide(3); // tablets/medium screens
      } else {
        setItemsPerSlide(4); // large desktop
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
    }, 5000); // 5s for more breathing room
    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIndex = currentSlide * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="px-3 sm:px-6 lg:px-12 py-6">
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 tracking-wide">
        READY TO WEAR
      </h1>

      <div className="overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // Grid matches itemsPerSlide dynamically
            className={`grid gap-6 ${
              itemsPerSlide === 1
                ? "grid-cols-1"
                : itemsPerSlide === 2
                ? "grid-cols-2"
                : itemsPerSlide === 3
                ? "grid-cols-3"
                : "grid-cols-4"
            }`}
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[220px] sm:h-[260px] lg:h-[320px] xl:h-[360px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold mt-3 truncate">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.price.toFixed(2)} Kyats
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrentSlide(i)}
            whileHover={{ scale: 1.2 }}
            className="relative rounded-full"
            animate={{
              width: i === currentSlide ? 28 : 12,
              height: 12,
              borderRadius: i === currentSlide ? 12 : "50%",
              backgroundColor: i === currentSlide ? "#111827" : "#d1d5db",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <span className="absolute inset-0 bg-white/10 rounded-full" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Product;
