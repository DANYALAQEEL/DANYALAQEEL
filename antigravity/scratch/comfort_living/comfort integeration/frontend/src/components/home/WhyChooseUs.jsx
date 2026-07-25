import { motion } from 'framer-motion'
import { FiTruck, FiShield, FiRefreshCw, FiStar } from 'react-icons/fi'
import { staggerContainer, fadeUp, revealText } from '../../utils/animations'

const reasons = [
  {
    icon: <FiTruck size={32} />,
    title: "Free Delivery",
    description: "Free shipping on all orders above Rs. 2,999 across Pakistan.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Premium Quality",
    description: "Every product is carefully selected and quality tested before dispatch.",
  },
  {
    icon: <FiRefreshCw size={32} />,
    title: "Easy Returns",
    description: "Not satisfied? Return within 7 days for a full refund or exchange.",
  },
  {
    icon: <FiStar size={32} />,
    title: "Trusted Brand",
    description: "Thousands of happy customers across Pakistan trust Comfort Livings.",
  },
]

function WhyChooseUs() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.p variants={revealText} className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
            Our Promise
          </motion.p>
          <motion.h2 variants={revealText} className="font-serif text-3xl md:text-4xl text-brand font-bold">
            Why Choose Us
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
              >
                {reason.icon}
              </motion.div>
              <h3 className="font-semibold text-brand text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs