import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as your name, email address, phone number, and delivery address when you place an order or create an account. We may also collect information about your browsing behavior on our website to improve your shopping experience.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to process your orders, send order confirmations and updates, respond to your questions and requests, send promotional communications (with your consent), and improve our products and services.',
  },
  {
    title: '3. Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted delivery partners solely for the purpose of fulfilling your orders. All partners are required to keep your information confidential.',
  },
  {
    title: '4. Data Security',
    content: 'We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '5. Cookies',
    content: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at info@comfortlivings.com and we will respond within 7 business days.',
  },
  {
    title: '7. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.',
  },
  {
    title: '8. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at info@comfortlivings.com or call us at +92 323 2222202.',
  },
]

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Legal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mt-3">
          Last updated: June 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-500 text-sm leading-relaxed mb-10 p-5 bg-accent rounded-2xl">
          At Comfort Livings, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase.
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

export default PrivacyPolicyPage