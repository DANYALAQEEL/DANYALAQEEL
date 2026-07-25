import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiUser, FiSend } from 'react-icons/fi'

function ContactPage() {
  const contactInfo = [
    {
      Icon: FiPhone,
      title: 'Phone / WhatsApp',
      detail: '+92 323 2222202',
      sub: 'Mon-Sat, 10am-5pm',
    },
    {
      Icon: FiMail,
      title: 'Email',
      detail: 'info@comfortlivings.com',
      sub: 'We reply within 24 hours',
    },
    {
      Icon: FiMapPin,
      title: 'Location',
      detail: 'Lahore, Pakistan',
      sub: 'Serving all across Pakistan',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Get In Touch
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Contact Us
        </h1>
        <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
          Have a question or need help? We are here for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 bg-accent rounded-2xl"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                  <info.Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand text-sm">{info.title}</p>
                  <p className="text-primary text-sm font-medium">{info.detail}</p>
                  <p className="text-gray-400 text-xs">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            <div className="p-5 bg-primary rounded-2xl text-white">
  <p className="font-semibold mb-2">Follow Us</p>
  <p className="text-white/70 text-sm mb-3">
    Stay updated with our latest products and offers.
  </p>
  <a
    href="https://www.facebook.com/share/1B1qw7hmTJ/"
    target="_blank"
    rel="noreferrer"
    className="inline-block bg-white text-primary text-sm font-semibold px-5 py-2 rounded-full hover:bg-secondary transition-colors"
  >
    Visit Facebook Page
  </a>
</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white border border-accent rounded-3xl p-8 shadow-sm"
          >
            <h2 className="font-serif text-2xl text-brand font-bold mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm">
                Thank you! Your message has been sent. We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={14}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={14}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-brand block mb-2">
                  Subject
                </label>
                <div className="relative">
                  <FiMessageSquare
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={14}
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-brand block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend size={16} />
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage