import { motion } from "framer-motion";
import GM1 from "../../../../assets/garment.jpg";
import GM2 from "../../../../assets/garment1.jpg";
import GM3 from "../../../../assets/garment2.jpg";
import GM4 from "../../../../assets/garment3.jpg";
import GM5 from "../../../../assets/garment4.jpg";
import GM6 from "../../../../assets/garment5.jpg";

const reasons = [
  {
    img: GM1,
    title: "Premium Quality",
    text: "Crafted from carefully chosen fabrics that guarantee both durability and comfort.",
  },
  {
    img: GM2,
    title: "Unique Style",
    text: "Bold, modern designs that highlight individuality and elevate your presence.",
  },
  {
    img: GM3,
    title: "Attention to Detail",
    text: "Every stitch and finish reflects our commitment to excellence and refinement.",
  },
  {
    img: GM4,
    title: "Versatile Wear",
    text: "Designed to adapt — perfect for casual days, work settings, or special occasions.",
  },
  {
    img: GM5,
    title: "Customer First",
    text: "Each piece is thoughtfully created to match your lifestyle, comfort, and confidence.",
  },
  {
    img: GM6,
    title: "Authentic Brand",
    text: "Wearing RICHICO means embracing authenticity, trust, and timeless fashion.",
  },
];

const Garment = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-16  sm:px-12 lg:px-20 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          We’re RICHICO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed"
        >
          At RICHICO, we weave happiness into every thread. Our garments are not
          just fashion — they are expressions of{" "}
          <span className="font-semibold">
            confidence, comfort, and authenticity
          </span>
          .
        </motion.p>
      </section>

      {/* Alternating Layout */}
      <section className="space-y-20">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center gap-10  sm:px-12 lg:px-20`}
          >
            {/* Image */}
            <div className="lg:w-1/2 w-full h-80 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {reason.text}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Closing Section */}
      <section className="py-20  sm:px-12 lg:px-20 bg-gray-50 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Should Brands Choose RICHICO Garment?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Partnering with <span className="font-semibold">RICHICO</span> means
            working with a garment manufacturer that combines{" "}
            <span className="font-semibold">
              modern design, superior fabrics, and reliable production
            </span>
            . We provide{" "}
            <span className="font-semibold">
              scalability, consistency, and craftsmanship
            </span>
            , making us the trusted choice for brands who want to deliver both{" "}
            <span className="font-semibold">quality and authenticity</span> to
            their customers.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Garment;
