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
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIndex = currentSlide * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="px-3 sm:px-6 lg:px-12 py-6">
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 tracking-wide">
        READY TO WEAR
      </h1>

      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-black scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Why Choose RICHICO Section */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Why Choose RICHICO Brand Products?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At <span className="font-semibold">RICHICO</span>, we believe fashion is more
          than just clothing — it’s a statement of{" "}
          <span className="font-semibold">individuality, confidence, and quality</span>.
          Our products are crafted with attention to detail, using{" "}
          <span className="font-semibold">premium materials</span> that balance durability
          with comfort.
        </p>
        <ul className="text-gray-700 space-y-2 mb-4 text-left mx-auto w-fit">
          <li>✔ <span className="font-semibold">Unique Style</span> – Bold, modern, and refined designs.</li>
          <li>✔ <span className="font-semibold">Premium Quality</span> – Long-lasting and durable.</li>
          <li>✔ <span className="font-semibold">Versatile Wear</span> – Perfect for any occasion.</li>
          <li>✔ <span className="font-semibold">Customer First</span> – Designed with your lifestyle in mind.</li>
        </ul>
        <p className="text-gray-700">
          Choosing <span className="font-semibold">RICHICO</span> means joining a brand
          that values <span className="font-semibold">style, trust, and authenticity</span>.
        </p>
      </div>
    </div>
  );
};

export default Product;
