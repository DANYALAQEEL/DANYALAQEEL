import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from '../common/ProductCard'
import { useProducts } from '../../hooks/useProducts'
import { staggerContainer, fadeUp, revealText } from '../../utils/animations'

function FeaturedProducts() {
  const { getFeatured } = useProducts()
const featured = getFeatured()

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-80px' }}
          className="text-center mb-12"
        >
          <motion.p variants={revealText} className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
            Hand Picked
          </motion.p>
          <motion.h2 variants={revealText} className="font-serif text-3xl md:text-4xl text-brand font-bold">
            Featured Products
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
         viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/shop"
            className="border-2 border-primary text-primary px-10 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default FeaturedProducts