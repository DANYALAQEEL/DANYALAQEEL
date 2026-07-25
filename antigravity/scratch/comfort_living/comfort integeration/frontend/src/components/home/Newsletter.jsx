import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-2xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.2 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6">
            <FiMail size={24} className="text-white" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3">
            Get Exclusive Offers
          </h2>
          <p className="text-secondary text-sm mb-8">
            Subscribe to our newsletter and get 10% off your first order plus early access to new arrivals.
          </p>

          {submitted ? (
            <div className="bg-white/10 text-white py-4 px-8 rounded-full text-sm font-medium">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3 rounded-full text-brand text-sm outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}

export default Newsletter