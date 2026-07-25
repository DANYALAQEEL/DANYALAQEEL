import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does delivery take?',
        a: 'We deliver within 3–5 working days across Pakistan. Major cities like Lahore, Karachi, and Islamabad usually receive orders within 2–3 days.',
      },
      {
        q: 'Is there free shipping?',
        a: 'Yes! We offer free delivery on all orders above Rs. 2,999. Orders below this amount have a flat shipping fee of Rs. 199.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes, once your order is dispatched you will receive a tracking number via WhatsApp or SMS. You can also use our Track Order page.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        q: 'What materials do you use?',
        a: 'We use premium cotton, microfiber, velvet, and wool depending on the product. All materials are carefully selected for softness, durability, and comfort.',
      },
      {
        q: 'Are the colors accurate to photos?',
        a: 'We make every effort to show accurate colors. However, slight variations may occur due to different screen settings. If you are not satisfied, you can return the product.',
      },
      {
        q: 'Do you offer different sizes?',
        a: 'Yes, most of our bedsheets and comforters are available in Single, Double, King, and Queen sizes. Size options are shown on each product page.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 7-day return policy. If you are not satisfied with your purchase, contact us within 7 days of delivery and we will arrange a return or exchange.',
      },
      {
        q: 'How do I return a product?',
        a: 'Simply contact us on WhatsApp or email with your order number and reason for return. We will guide you through the process.',
      },
      {
        q: 'When will I get my refund?',
        a: 'Refunds are processed within 3–5 business days after we receive the returned product. The amount is returned via the same payment method.',
      },
    ],
  },
  {
    category: 'Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We currently accept Cash on Delivery (COD) for all orders across Pakistan. Online payment options will be added soon.',
      },
      {
        q: 'Is Cash on Delivery available everywhere?',
        a: 'Yes, COD is available across all major cities and towns in Pakistan.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-secondary/40 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-accent transition-colors"
      >
        <span className="font-medium text-brand text-sm pr-4">{q}</span>
        <span className="text-primary shrink-0">
          {open ? <FiMinus size={16} /> : <FiPlus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-secondary/30 pt-3">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Help Center
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
          Find answers to the most common questions about our products and services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        {faqs.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-xl text-primary font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary inline-block" />
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, j) => (
                <FAQItem key={j} q={item.q} a={item.a} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Still need help */}
        <div className="bg-primary rounded-3xl p-8 text-center text-white">
          <h3 className="font-serif text-2xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="text-white/70 text-sm mb-6">
            Our team is happy to help you with anything.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full text-sm hover:bg-secondary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQPage