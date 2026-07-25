import { motion } from 'framer-motion'
import { FiHeart, FiAward, FiUsers, FiPackage } from 'react-icons/fi'

const stats = [
  { icon: <FiUsers size={28} />, number: '10,000+', label: 'Happy Customers' },
  { icon: <FiPackage size={28} />, number: '500+', label: 'Products' },
  { icon: <FiAward size={28} />, number: '5+', label: 'Years Experience' },
  { icon: <FiHeart size={28} />, number: '98%', label: 'Satisfaction Rate' },
]

const team = [
  {
    name: 'Ahmed Raza',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
  },
  {
    name: 'Sana Malik',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
  },
  {
    name: 'Usman Ali',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
  },
]

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-primary py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary text-sm uppercase tracking-widest font-medium mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl text-white font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
          >
            We believe everyone deserves a beautiful, comfortable home.
            That's why we bring you premium home textiles at honest prices.
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600"
              alt="Our Story"
              className="rounded-3xl w-full object-cover aspect-square"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-3">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand font-bold mb-6 leading-tight">
              Crafting Comfort Since Day One
            </h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>
                Comfort Livings was born from a simple idea — that your home should feel like a sanctuary. We started as a small family business with a passion for quality textiles and grew into one of Pakistan's most trusted home textile brands.
              </p>
              <p>
                Every product in our collection is carefully sourced and quality tested. From the thread count of our bedsheets to the fill weight of our comforters, we obsess over every detail so you don't have to.
              </p>
              <p>
                Today, we serve thousands of happy customers across Pakistan, delivering premium comfort directly to their doorstep through our Facebook page and now this website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full text-primary mb-4 shadow-sm">
                {stat.icon}
              </div>
              <p className="font-serif text-3xl font-bold text-primary mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
            What We Stand For
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand font-bold">
            Our Values
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality First',
              desc: 'We never compromise on quality. Every product goes through strict quality checks before reaching you.',
            },
            {
              title: 'Customer Happiness',
              desc: 'Your satisfaction is our success. We go above and beyond to ensure every order delights you.',
            },
            {
              title: 'Honest Pricing',
              desc: 'Premium quality should not cost a fortune. We offer the best prices without hidden charges.',
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-accent rounded-2xl p-6 text-center"
            >
              <div className="w-10 h-0.5 bg-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl text-brand font-bold mb-3">
                {val.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
              The People Behind
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand font-bold">
              Meet Our Team
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h3 className="font-semibold text-brand">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage