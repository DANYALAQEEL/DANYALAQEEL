import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using the Comfort Livings website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.',
  },
  {
    title: '2. Products and Pricing',
    content: 'All prices on our website are listed in Pakistani Rupees (PKR). We reserve the right to change prices at any time without prior notice. Product images are for illustration purposes only and actual products may vary slightly.',
  },
  {
    title: '3. Orders and Payment',
    content: 'Orders are subject to availability. We currently accept Cash on Delivery (COD) as our primary payment method. We reserve the right to refuse or cancel any order at our discretion.',
  },
  {
    title: '4. Delivery',
    content: 'We aim to deliver within 3-5 working days. Delivery times may vary depending on your location. Free delivery is available on orders above Rs. 2,999. We are not responsible for delays caused by circumstances beyond our control.',
  },
  {
    title: '5. Returns and Refunds',
    content: 'You may return products within 7 days of delivery if they are defective, damaged, or not as described. Products must be returned in their original condition and packaging. Refunds will be processed within 3-5 business days.',
  },
  {
    title: '6. Intellectual Property',
    content: 'All content on this website, including text, images, logos, and designs, is the property of Comfort Livings and is protected by copyright law. You may not reproduce or use any content without our written permission.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'Comfort Livings shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the product in question.',
  },
  {
    title: '8. Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.',
  },
]

function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Legal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Terms and Conditions
        </h1>
        <p className="text-gray-500 text-sm mt-3">
          Last updated: June 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-500 text-sm leading-relaxed mb-10 p-5 bg-accent rounded-2xl">
          Please read these Terms and Conditions carefully before using the Comfort Livings website or placing an order. These terms govern your use of our website and the purchase of products from us.
        </p>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-xl text-brand font-bold mb-3">
                {section.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TermsPage