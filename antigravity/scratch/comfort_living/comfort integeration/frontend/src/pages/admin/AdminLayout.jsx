import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  FiGrid, FiBox, FiShoppingBag, FiLogOut, FiTag, FiFileText,
  FiImage, FiMail, FiStar, FiList, FiBell, FiSend, FiSettings,
  FiHome, FiInfo, FiUsers, FiSearch, FiMessageSquare,
} from 'react-icons/fi'
import { useAdminAuth } from '../../context/AdminAuthContext'

const mainNav = [
  { to: '/admin', label: 'Dashboard', icon: FiGrid, end: true },
  { to: '/admin/products', label: 'Products', icon: FiBox },
  { to: '/admin/orders', label: 'Orders', icon: FiShoppingBag },
  { to: '/admin/coupons', label: 'Coupons', icon: FiTag },
  { to: '/admin/reviews', label: 'Reviews', icon: FiStar },
]

const cmsNav = [
  { to: '/admin/cms/home', label: 'Home Page', icon: FiHome },
  { to: '/admin/cms/about', label: 'About Us', icon: FiInfo },
  { to: '/admin/cms/pages', label: 'Other Pages', icon: FiFileText },
  { to: '/admin/cms/banners', label: 'Banners', icon: FiImage },
  { to: '/admin/cms/faqs', label: 'FAQs', icon: FiList },
  { to: '/admin/cms/team', label: 'Team Members', icon: FiUsers },
  { to: '/admin/cms/website-settings', label: 'Website Settings', icon: FiSettings },
  { to: '/admin/cms/contact-messages', label: 'Contact Messages', icon: FiMessageSquare },
  { to: '/admin/cms/seo', label: 'SEO / Meta Settings', icon: FiSearch },
]

const systemNav = [
  { to: '/admin/newsletter', label: 'Newsletter', icon: FiSend },
  { to: '/admin/email-templates', label: 'Email Templates', icon: FiMail },
  { to: '/admin/notifications', label: 'Notifications', icon: FiBell },
  { to: '/admin/logs', label: 'Logs', icon: FiList },
]

function NavGroup({ title, items }) {
  return (
    <div className="mb-4">
      {title && <p className="px-5 text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1 mt-3">{title}</p>}
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-2.5 text-sm transition-colors border-l-2 ${
              isActive
                ? 'text-primary bg-[#0d1829] border-primary'
                : 'text-gray-400 border-transparent hover:text-primary hover:bg-[#0d1829]'
            }`
          }
        >
          <Icon size={16} />
          {label}
        </NavLink>
      ))}
    </div>
  )
}

function AdminLayout() {
  const { admin, logout } = useAdminAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex">
      <aside className="w-64 bg-[#050a14] border-r border-[#1a2a3a] flex flex-col fixed top-0 left-0 bottom-0">
        <div className="px-5 py-6 border-b border-[#1a2a3a]">
          <h2 className="text-lg font-bold text-primary">Comfort Livings</h2>
          <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 py-2 overflow-y-auto">
          <NavGroup items={mainNav} />
          <NavGroup title="CMS" items={cmsNav} />
          <NavGroup title="System" items={systemNav} />
        </nav>

        <div className="p-5 border-t border-[#1a2a3a]">
          <p className="text-xs text-gray-500 mb-3 truncate">{admin?.name} · {admin?.role}</p>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1e293b] text-gray-400 text-sm hover:bg-red-600 hover:text-white transition-colors"
          >
            <FiLogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
