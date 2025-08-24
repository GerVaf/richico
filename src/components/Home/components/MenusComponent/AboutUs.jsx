import { motion } from "framer-motion";

const sections = [
  {
    title: "Work With Us",
    text: `Ready to bring your designs to life? Let’s create something extraordinary together.`,
    contact: true,
  },
  {
    title: "About Us",
    text: `At RiChico, we transform fashion ideas into high-quality garments that stand out. 
Based in Myanmar, we are proud partners of more than 100 local clothing brands, delivering 
collections that range from unisex and casual wear to tailored formal pieces. Every project 
is driven by our commitment to craftsmanship, precision, and customer satisfaction. Whether 
you’re building your first collection or scaling an established brand, RiChico is here to bring 
your vision to life.`,
  },
  {
    title: "How We Work",
    text: `Our process is built on clarity, quality, and reliability:

• Consultation & Design Review – We listen, understand, and refine your vision.
• Cut-Make-Trim (CMT) Production – Skilled professionals deliver flawless workmanship.
• Quality Check – Every piece is inspected, ensuring perfect fit and finish.
• On-Time Delivery – We scale to your needs, from small runs to bulk orders, without compromise.

With a monthly production capacity of 10,000+ pieces, RiChico is trusted for both flexibility and consistency.`,
  },
  {
    title: "Our Journey",
    text: `RiChico began with a simple vision: to empower local fashion brands with reliable, 
premium manufacturing. What started as a small workshop has grown into a trusted garment 
factory serving designers and entrepreneurs across Myanmar. Along the way, we’ve partnered 
with over 100 brands, expanded our production capacity, and built a reputation for quality and trust. 
Today, we continue this journey with the same passion — helping brands grow and preparing to bring 
Myanmar’s craftsmanship to international markets.`,
  },
  {
    title: "Quality Guaranteed",
    text: `Every garment we produce carries our promise of quality. From precise stitching to flawless 
finishing, we treat every order with the same attention to detail. Our team of skilled professionals 
follows a rigorous inspection process so that every piece meets the highest standards before it reaches you. 
With RiChico, you can count on premium quality, reliable delivery, and a partnership you can trust.`,
  },
  {
    title: "Why Choose RiChico",
    text: `• Proven Trust – Over 100 brands already rely on us.
• Premium Quality – Each garment is carefully cut, stitched, and finished by experts.
• Flexible & Scalable – From prototypes to bulk production, we adapt to your needs.
• Founder-Led Dedication – Every project receives personal attention and care.`,
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wide mb-4">
          About <span className="text-indigo-600">RiChico</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Crafting garments that inspire brands and empower fashion across
          Myanmar.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 lg:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base sm:text-lg">
              {section.text}
            </p>

            {section.contact && (
              <div className="mt-6 text-gray-700 text-base sm:text-lg space-y-1">
                <p>
                  📞 Phone / WhatsApp 1:{" "}
                  <span className="font-semibold">09964311142</span>
                </p>
                <p>
                  📞 Phone / WhatsApp 2:{" "}
                  <span className="font-semibold">09785523223</span>
                </p>
                <p>
                  📧 Email:{" "}
                  <span className="font-semibold">richic900@gmail.com</span>
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
