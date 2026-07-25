import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const slides = [
  {
    id: 1,
    title: "Sleep in Pure Luxury",
    subtitle: "Premium Home Textiles",
    description: "Experience the comfort of 100% pure cotton bedsheets, blankets, pillows and more. Crafted for your perfect bedroom.",
    cta: "Shop Bedsheets",
    link: "/shop?category=Bedsheets",
    bg: "from-[#6B4F3B]/80 to-[#6B4F3B]/40",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400",
  },
  {
    id: 2,
    title: "Style That Speaks",
    subtitle: "Premium Leather Collection",
    description: "Discover our exclusive range of genuine leather belts, wallets, handbags and laptop bags. Crafted for the modern lifestyle.",
    cta: "Shop Leather",
    link: "/shop?category=Leather Products",
    bg: "from-[#2E2E2E]/80 to-[#2E2E2E]/30",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400",
  },
  {
    id: 3,
    title: "Everything You Need",
    subtitle: "Home & Fashion — All in One Place",
    description: "From cozy bedsheets to stylish leather accessories — Comfort Livings brings you premium quality products for every need.",
    cta: "Explore All",
    link: "/shop",
    bg: "from-[#4a3728]/80 to-[#4a3728]/30",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400",
  },
]

function HeroBanner() {
  const [current, setCurrent] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent(prev => (prev + 1) % slides.length)

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden">

      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`} />

             {/* Content */}
<div className="absolute inset-0 flex items-center">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <motion.p
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-secondary text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-medium"
    >
      {slide.subtitle}
    </motion.p>
    <div className="overflow-hidden mb-4 pb-2">
      <motion.h1
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight max-w-2xl"
      >
        {slide.title}
      </motion.h1>
    </div>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="text-white/80 text-sm md:text-base mb-8 max-w-md leading-relaxed"
    >
      {slide.description}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="flex gap-4"
    >
      <Link
        to={slide.link}
        className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        {slide.cta}
      </Link>
      <Link
        to="/shop"
        className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
      >
        View All
      </Link>
    </motion.div>
  </div>
</div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Arrow Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2'
            }`}
          />
        ))}
      </div>

    </section>
  )
}

export default HeroBanner