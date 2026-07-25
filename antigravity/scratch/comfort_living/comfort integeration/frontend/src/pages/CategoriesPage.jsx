import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCategories } from '../hooks/useCategories'

function CategoriesPage() {
  const { categories } = useCategories()

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Browse All
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          All Categories
        </h1>
        <p className="text-gray-500 text-sm mt-3">
          Explore our complete range of premium home textiles
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={cat.path} className="group block">
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      {cat.count} Products
                    </p>
                    <span className="inline-block bg-white text-primary text-xs font-semibold px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Shop Now
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CategoriesPage