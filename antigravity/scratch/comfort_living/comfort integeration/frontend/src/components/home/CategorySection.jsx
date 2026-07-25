import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCategories } from '../../hooks/useCategories'
import { staggerContainer, fadeUp, revealText } from '../../utils/animations'

function CategorySection() {
  const { categories } = useCategories()

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-12"
      >
        <motion.p
          variants={revealText}
          className="text-primary text-sm uppercase tracking-widest font-medium mb-2"
        >
          Browse By
        </motion.p>
        <motion.h2
          variants={revealText}
          className="font-serif text-3xl md:text-4xl text-brand font-bold"
        >
          Shop by Category
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="w-16 h-0.5 bg-primary mx-auto mt-4"
        />
      </motion.div>

      {/* Category Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            variants={fadeUp}
            custom={index}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Link to={cat.path} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm md:text-base">{cat.name}</h3>
                  <p className="text-xs text-white/70">{cat.count} Products</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default CategorySection