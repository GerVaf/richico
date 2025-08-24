/* eslint-disable react/prop-types */
// src/components/Collaboration.jsx
import { motion } from "framer-motion";
import JUSTLWINT from "../../../assets/justlwint.jpg";
const imagesCol1 = [
  JUSTLWINT,
  "https://i.pinimg.com/1200x/e7/03/7b/e7037b4f23d40cbb0f8ffa51e2421aea.jpg",
  "https://i.pinimg.com/1200x/91/7b/f7/917bf7ba6f969a2d7a16f1a3d5f7dd00.jpg",
  "https://i.pinimg.com/1200x/f5/72/82/f572827c89417511b731d11f958942f7.jpg",
];

const imagesCol2 = [
  "https://i.pinimg.com/736x/0c/5a/87/0c5a87b3d1901cab11cda2b552b42869.jpg",
  "https://i.pinimg.com/736x/aa/fc/e1/aafce1b8cf74e27707ac12adecc91dbc.jpg",
  "https://i.pinimg.com/736x/c6/db/6b/c6db6b92c748fe00ba09938910970c2e.jpg",
  "https://i.pinimg.com/736x/f6/8d/35/f68d352fe42d5de1a268053bbf8c222f.jpg",
];

const MarqueeColumn = ({ direction = "up", images, duration = 20 }) => {
  // Duplicate images once for smooth loop
  const items = [...images, ...images];

  return (
    <div className="relative overflow-hidden h-full w-full">
      <motion.div
        className="flex flex-col items-center gap-4"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`brand-${index}`}
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg"
            draggable={false}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Collaboration = () => {
  return (
    <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-5 gap-4 h-auto sm:h-[300px] items-start">
      {/* Text Section */}
      <div className="col-span-1 sm:col-span-3 px-4 sm:px-0">
        <h1 className="main-title">The Brands That Collab With Us</h1>
        <p className="mt-2 text-gray-600 text-base sm:text-lg leading-relaxed">
          At Richico, we believe in the power of creativity and unity. Over the
          years, we’ve partnered with inspiring garment brands from around the
          globe — blending unique styles, cultural influences, and craftsmanship
          into one-of-a-kind collections. Every collaboration is a journey, and
          every piece tells a story of shared passion for fashion.
        </p>
      </div>

      {/* Two Separate Vertical Marquees */}
      <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-2 h-72 sm:h-full">
        {/* Left column scrolls up */}
        <MarqueeColumn direction="up" images={imagesCol1} duration={22} />
        {/* Right column scrolls down */}
        <MarqueeColumn direction="down" images={imagesCol2} duration={22} />
      </div>
    </div>
  );
};

export default Collaboration;
