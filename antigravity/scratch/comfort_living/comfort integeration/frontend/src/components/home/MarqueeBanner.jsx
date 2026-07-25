import { motion } from 'framer-motion'

const items = [
  ' Premium Bedsheets',
  ' Warm Blankets',
  ' Leather Bags',
  ' Ladies Handbags',
  ' Mattress Protectors',
  ' Memory Foam Pillows',
  ' Genuine Leather Belts',
  ' Laptop Bags',
  ' Mattress Toppers',
  ' Premium Quality',
  ' Free Delivery over Rs. 2,999',
]

function MarqueeBanner() {
  return (
    <div className="bg-brand text-white py-3 overflow-hidden mb-2">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium tracking-wider uppercase">
            {item}
            <span className="mx-8 text-secondary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeBanner