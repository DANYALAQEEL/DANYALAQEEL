import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-brand text-white mt-auto">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Column 1 - Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-secondary mb-3">
            Comfort Livings
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Premium home textiles and leather accessories crafted for comfort, style, and lasting quality.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1B1qw7hmTJ/" target="_blank" rel="noreferrer"
               className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
              <FiFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/comfortlivings_" target="_blank" rel="noreferrer"
  className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
  <FiInstagram size={16} />
            </a>
            <a href="mailto:info@comfortlivings.com"
              className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors">
              <FiMail size={16} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'Shop', path: '/shop' },
              { name: 'Categories', path: '/categories' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Customer Care */}
        <div>
          <h4 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">
            Customer Care
          </h4>
          <ul className="space-y-2">
            {[
              { name: 'FAQ', path: '/faq' },
              { name: 'Track Order', path: '/track-order' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms & Conditions', path: '/terms' },
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">
            Get In Touch
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-400">
              <FiMapPin size={16} className="mt-0.5 text-secondary shrink-0" />
              Lahore, Pakistan
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <FiPhone size={16} className="text-secondary shrink-0" />
              +92 323 2222202
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <FiMail size={16} className="text-secondary shrink-0" />
              info@comfortlivings.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Comfort Livings. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer