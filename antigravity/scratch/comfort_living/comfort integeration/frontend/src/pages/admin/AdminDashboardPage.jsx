import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiTag, FiImage, FiList, FiActivity, FiBell,
  FiAlertTriangle, FiPlus, FiShoppingBag, FiMail as FiMailIcon,
} from 'react-icons/fi'
import {
  fetchDashboardStats, fetchMonthlySales, fetchTopSellingProducts,
  fetchCustomerAnalytics, fetchInventoryAnalytics, fetchOrderAnalytics,
  fetchSystemHealth,
} from '../../services/adminDashboardService'
import { fetchAdminOrders } from '../../services/adminOrderService'
import { fetchNotifications } from '../../services/adminNotificationService'
import { fetchActivityLogs } from '../../services/adminLogService'
import { fetchContactMessages } from '../../services/adminContactService'
import { fetchSubscribers } from '../../services/adminNewsletterService'
import { fetchCmsPages } from '../../services/adminCmsService'
import { fetchBanners } from '../../services/adminBannerService'
import { fetchFaqs } from '../../services/adminFaqService'
import { fetchTeamMembers } from '../../services/adminTeamService'
import SimpleBarChart from '../../components/admin/SimpleBarChart'

function StatCard({ label, value }) {
  return (
    <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5">
      <div className="text-2xl font-bold text-primary">{value ?? '—'}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function Section({ title, action, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  )
}

function Panel({ children, className = '' }) {
  return <div className={`bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5 ${className}`}>{children}</div>
}

const money = (n) => `Rs. ${(n || 0).toLocaleString()}`

function AdminDashboardPage() {
  const [dash, setDash] = useState(null)
  const [monthlySales, setMonthlySales] = useState([])
  const [topProducts, setTopProducts] = useState([])
  const [customerAnalytics, setCustomerAnalytics] = useState(null)
  const [inventory, setInventory] = useState(null)
  const [orderAnalytics, setOrderAnalytics] = useState(null)
  const [health, setHealth] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [activities, setActivities] = useState([])
  const [cancelRequests, setCancelRequests] = useState([])
  const [messages, setMessages] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [pages, setPages] = useState([])
  const [banners, setBanners] = useState([])
  const [faqs, setFaqs] = useState([])
  const [team, setTeam] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetchDashboardStats(),
      fetchMonthlySales(),
      fetchTopSellingProducts(),
      fetchCustomerAnalytics(),
      fetchInventoryAnalytics(),
      fetchOrderAnalytics(),
      fetchSystemHealth(),
      fetchAdminOrders(),
      fetchNotifications(),
      fetchActivityLogs(),
      fetchContactMessages(),
      fetchSubscribers(),
      fetchCmsPages(),
      fetchBanners(),
      fetchFaqs(),
      fetchTeamMembers(),
    ])
      .then(([
        dashRes, monthly, top, customers, inv, orderA, sys, orders,
        notifs, acts, msgs, subs, pgs, bnrs, fqs, tm,
      ]) => {
        setDash(dashRes)
        setMonthlySales(monthly)
        setTopProducts(top)
        setCustomerAnalytics(customers)
        setInventory(inv)
        setOrderAnalytics(orderA)
        setHealth(sys)
        setNotifications(notifs.slice(0, 5))
        setActivities(acts.slice(0, 5))
        setCancelRequests(orders.filter((o) => o.cancelRequest?.requested && o.orderStatus !== 'Cancelled'))
        setMessages(msgs.slice(0, 5))
        setSubscribers(subs)
        setPages(pgs)
        setBanners(bnrs)
        setFaqs(fqs)
        setTeam(tm)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-gray-500 text-sm">Loading dashboard...</p>

  const stats = dash?.stats
  const activeSubs = subscribers.filter((s) => s.active).length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of your store</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {/* KPI CARDS */}
      <Section title="Key Metrics">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <StatCard label="Total Revenue" value={money(stats?.revenue?.total)} />
          <StatCard label="Monthly Revenue" value={money(stats?.revenue?.monthly)} />
          <StatCard label="Total Orders" value={stats?.orders?.total} />
          <StatCard label="Today's Orders" value={stats?.orders?.today} />
          <StatCard label="Pending Orders" value={stats?.orders?.pending} />
          <StatCard label="Processing Orders" value={stats?.orders?.processing} />
          <StatCard label="Delivered Orders" value={stats?.orders?.delivered} />
          <StatCard label="Cancelled Orders" value={stats?.orders?.cancelled} />
          <StatCard label="Total Products" value={stats?.products?.total} />
          <StatCard label="Low Stock Products" value={stats?.products?.lowStock} />
          <StatCard label="Total Customers" value={customerAnalytics?.totalCustomers} />
          <StatCard label="Pending Payments" value={stats?.payments?.pending} />
        </div>
      </Section>

      {/* REVENUE CHART + TOP PRODUCTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Panel>
          <h3 className="text-white font-semibold mb-1">Monthly Sales</h3>
          <p className="text-xs text-gray-500 mb-2">Revenue by month (paid orders)</p>
          <SimpleBarChart data={monthlySales} valueKey="revenue" labelKey="month" formatValue={money} />
        </Panel>
        <Panel>
          <h3 className="text-white font-semibold mb-4">Top Selling Products</h3>
          {topProducts.length === 0 ? (
            <p className="text-gray-500 text-sm">No sales data yet.</p>
          ) : (
            <div className="space-y-3">
              {topProducts.slice(0, 6).map((p) => (
                <div key={p._id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 truncate mr-3">{p.title}</span>
                  <span className="text-gray-500 shrink-0">{p.quantitySold} sold · {money(p.revenue)}</span>
                </div>
              ))}
            </div>
          )}
        </Panel>
      </div>

      {/* ORDER ANALYTICS + INVENTORY OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Panel>
          <h3 className="text-white font-semibold mb-4">Order Analytics</h3>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div><span className="text-gray-500">Average Order Value</span><div className="text-white font-semibold">{money(orderAnalytics?.averageOrderValue)}</div></div>
            <div><span className="text-gray-500">Total Items Sold</span><div className="text-white font-semibold">{orderAnalytics?.totalItemsSold ?? '—'}</div></div>
          </div>
          {orderAnalytics?.highestOrder && (
            <p className="text-xs text-gray-500">
              Highest order: <span className="text-gray-300">{orderAnalytics.highestOrder.orderNumber}</span> — {money(orderAnalytics.highestOrder.totalAmount)}
            </p>
          )}
          <div className="mt-4 space-y-1.5">
            {(orderAnalytics?.statusCounts || []).map((s) => (
              <div key={s._id} className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{s._id}</span>
                <span className="text-gray-300">{s.total}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h3 className="text-white font-semibold mb-4">Inventory Overview</h3>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div><span className="text-gray-500">Total Stock (units)</span><div className="text-white font-semibold">{inventory?.analytics?.totalStock ?? '—'}</div></div>
            <div><span className="text-gray-500">Out of Stock</span><div className="text-white font-semibold">{inventory?.analytics?.outOfStock ?? '—'}</div></div>
          </div>
          <p className="text-xs text-gray-500 mb-2">Recent stock movements</p>
          <div className="space-y-1.5 max-h-40 overflow-y-auto">
            {(inventory?.recentInventoryLogs || []).length === 0 && <p className="text-gray-600 text-xs">No inventory activity yet.</p>}
            {(inventory?.recentInventoryLogs || []).map((log) => (
              <div key={log._id} className="flex items-center justify-between text-xs">
                <span className="text-gray-400 truncate mr-2">{log.productTitle} · {log.action}</span>
                <span className="text-gray-500 shrink-0">{log.stockBefore} → {log.stockAfter}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* CUSTOMER ANALYTICS */}
      <Section title="Customer Analytics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Customers" value={customerAnalytics?.totalCustomers} />
          <StatCard label="New This Month" value={customerAnalytics?.newCustomersThisMonth} />
          <StatCard label="Returning Customers" value={customerAnalytics?.returningCustomers} />
          <StatCard label="Total Reviews" value={customerAnalytics?.totalReviews} />
        </div>
      </Section>

      {/* RECENT ORDERS + LOW STOCK + PENDING CANCEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Panel>
          <h3 className="text-white font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {(dash?.recentOrders || []).length === 0 && <p className="text-gray-500 text-sm">No orders yet.</p>}
            {(dash?.recentOrders || []).map((o) => (
              <div key={o._id} className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-white">{o.orderNumber}</p>
                  <p className="text-gray-500 text-xs">{o.customer?.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-xs">{o.orderStatus}</p>
                  <p className="text-gray-500 text-xs">{money(o.totalAmount)}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/admin/orders" className="text-primary text-xs mt-4 inline-block hover:underline">View all orders →</Link>
        </Panel>

        <Panel>
          <div className="flex items-center gap-2 mb-4">
            <FiAlertTriangle className="text-amber-500" size={16} />
            <h3 className="text-white font-semibold">Low Stock Alert</h3>
          </div>
          <div className="space-y-2">
            {(inventory?.analytics?.lowStock ?? 0) === 0 && <p className="text-gray-500 text-sm">All products are well stocked.</p>}
            {(inventory?.analytics?.lowStock ?? 0) > 0 && (
              <p className="text-amber-400 text-sm">{inventory.analytics.lowStock} product(s) at 5 units or fewer.</p>
            )}
          </div>
          <Link to="/admin/products" className="text-primary text-xs mt-4 inline-block hover:underline">Manage inventory →</Link>
        </Panel>

        <Panel>
          <h3 className="text-white font-semibold mb-4">Pending Cancel Requests</h3>
          <div className="space-y-2">
            {cancelRequests.length === 0 && <p className="text-gray-500 text-sm">No pending cancellation requests.</p>}
            {cancelRequests.slice(0, 5).map((o) => (
              <div key={o._id} className="text-sm">
                <p className="text-white">{o.orderNumber}</p>
                <p className="text-gray-500 text-xs truncate">{o.cancelRequest?.reason || 'No reason given'}</p>
              </div>
            ))}
          </div>
          {cancelRequests.length > 0 && (
            <Link to="/admin/orders" className="text-primary text-xs mt-4 inline-block hover:underline">Review in Orders →</Link>
          )}
        </Panel>
      </div>

      {/* NOTIFICATIONS + ACTIVITIES + CONTACT MESSAGES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Panel>
          <div className="flex items-center gap-2 mb-4"><FiBell size={16} className="text-primary" /><h3 className="text-white font-semibold">Notifications</h3></div>
          <div className="space-y-2">
            {notifications.length === 0 && <p className="text-gray-500 text-sm">Nothing new.</p>}
            {notifications.map((n) => (
              <div key={n._id} className="text-sm">
                <p className={n.isRead ? 'text-gray-400' : 'text-white'}>{n.title}</p>
                <p className="text-gray-600 text-xs">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <Link to="/admin/notifications" className="text-primary text-xs mt-4 inline-block hover:underline">View all →</Link>
        </Panel>

        <Panel>
          <div className="flex items-center gap-2 mb-4"><FiActivity size={16} className="text-primary" /><h3 className="text-white font-semibold">Recent Activities</h3></div>
          <div className="space-y-2">
            {activities.length === 0 && <p className="text-gray-500 text-sm">No recent activity.</p>}
            {activities.map((a) => (
              <div key={a._id} className="text-sm">
                <p className="text-gray-300">{a.message}</p>
                <p className="text-gray-600 text-xs">{new Date(a.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <Link to="/admin/logs" className="text-primary text-xs mt-4 inline-block hover:underline">View all logs →</Link>
        </Panel>

        <Panel>
          <div className="flex items-center gap-2 mb-4"><FiMailIcon size={16} className="text-primary" /><h3 className="text-white font-semibold">Recent Contact Messages</h3></div>
          <div className="space-y-2">
            {messages.length === 0 && <p className="text-gray-500 text-sm">No messages yet.</p>}
            {messages.map((m) => (
              <div key={m._id} className="text-sm">
                <p className="text-white">{m.name}</p>
                <p className="text-gray-500 text-xs truncate">{m.message}</p>
              </div>
            ))}
          </div>
          <Link to="/admin/cms/contact-messages" className="text-primary text-xs mt-4 inline-block hover:underline">View all messages →</Link>
        </Panel>
      </div>

      {/* NEWSLETTER + WEBSITE OVERVIEW + SYSTEM HEALTH */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Panel>
          <h3 className="text-white font-semibold mb-4">Newsletter Statistics</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">Total Subscribers</span><div className="text-white font-semibold">{subscribers.length}</div></div>
            <div><span className="text-gray-500">Active</span><div className="text-white font-semibold">{activeSubs}</div></div>
          </div>
          <Link to="/admin/newsletter" className="text-primary text-xs mt-4 inline-block hover:underline">Manage subscribers →</Link>
        </Panel>

        <Panel>
          <h3 className="text-white font-semibold mb-4">Website Overview</h3>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div><span className="text-gray-500">Pages</span><div className="text-white font-semibold">{pages.length}</div></div>
            <div><span className="text-gray-500">Banners</span><div className="text-white font-semibold">{banners.length}</div></div>
            <div><span className="text-gray-500">FAQs</span><div className="text-white font-semibold">{faqs.length}</div></div>
            <div><span className="text-gray-500">Team Members</span><div className="text-white font-semibold">{team.filter((m) => m.active).length}</div></div>
          </div>
          <Link to="/admin/cms/home" className="w-full inline-block text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
            Manage Website
          </Link>
        </Panel>

        <Panel>
          <h3 className="text-white font-semibold mb-4">System Health</h3>
          {health ? (
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="text-green-400">{health.status}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Database</span><span className={health.database === 'Connected' ? 'text-green-400' : 'text-red-400'}>{health.database}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Environment</span><span className="text-gray-300">{health.environment}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Uptime</span><span className="text-gray-300">{Math.floor(health.uptime / 60)}m</span></div>
            </div>
          ) : <p className="text-gray-500 text-sm">Unavailable.</p>}
        </Panel>
      </div>

      {/* QUICK ACTIONS */}
      <Section title="Quick Actions">
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/products?new=1" className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"><FiPlus size={14} /> Add Product</Link>
          <Link to="/admin/coupons?new=1" className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"><FiTag size={14} /> Create Coupon</Link>
          <Link to="/admin/cms/banners?new=1" className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"><FiImage size={14} /> Add Banner</Link>
          <Link to="/admin/cms/faqs?new=1" className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"><FiList size={14} /> Add FAQ</Link>
          <Link to="/admin/orders" className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"><FiShoppingBag size={14} /> View Orders</Link>
        </div>
      </Section>
    </div>
  )
}

export default AdminDashboardPage
