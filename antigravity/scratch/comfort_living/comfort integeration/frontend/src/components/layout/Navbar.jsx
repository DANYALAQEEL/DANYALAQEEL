import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiHeart, FiSearch, FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'
import SearchModal from '../common/SearchModal'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Categories', path: '/categories' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() { 
  const { cartCount } = useCart()
  const { isAuthenticated, user, logout } = useAuth()
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center text-sm py-2 px-4">
        🚚 Free delivery on orders over Rs. 2,999 | Shop Now
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl font-bold text-primary">
            Comfort Livings
          </span>
          <span className="text-xs text-secondary tracking-widest uppercase">
             Home & Lifestyle Store
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-brand'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
         onClick={() => setSearchOpen(true)}
           className="text-brand hover:text-primary transition-colors hidden md:block"
         >
          <FiSearch size={20} />
          </button>
          <Link to="/login" className="text-brand hover:text-primary transition-colors hidden md:block">
            <FiUser size={20} />
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              title={`Sign out (${user?.name || ''})`}
              className="text-brand hover:text-primary transition-colors hidden md:flex items-center gap-1"
            >
              <FiLogOut size={18} />
            </button>
          ) : null}
          <Link to="/wishlist" className="text-brand hover:text-primary transition-colors relative">
            <FiHeart size={20} />
          </Link>
          <Link to="/cart" className="text-brand hover:text-primary transition-colors relative">
          <FiShoppingCart size={20} />
            {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
           {cartCount}
           </span>
          )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-secondary px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-2 border-b border-accent transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-brand'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-sm font-medium py-2 text-brand hover:text-primary">
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
      )}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

    </header>
  )
}

export default Navbar