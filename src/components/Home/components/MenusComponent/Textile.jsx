import { motion } from "framer-motion";

const Textile = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide">
          Textile Collection
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          We’re working on something exciting for you.
        </p>
        <span className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg">
          Coming Soon
        </span>
      </motion.div>
    </div>
  );
};

export default Textile;
