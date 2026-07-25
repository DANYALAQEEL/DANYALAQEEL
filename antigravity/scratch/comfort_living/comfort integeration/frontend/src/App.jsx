import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CategoriesPage from './pages/CategoriesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TrackOrderPage from './pages/TrackOrderPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

import AdminProtectedRoute from './components/admin/AdminProtectedRoute'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminCouponsPage from './pages/admin/AdminCouponsPage'
import AdminReviewsPage from './pages/admin/AdminReviewsPage'
import AdminCmsPage from './pages/admin/AdminCmsPage'
import AdminHomePage from './pages/admin/AdminHomePage'
import AdminAboutPage from './pages/admin/AdminAboutPage'
import AdminBannersPage from './pages/admin/AdminBannersPage'
import AdminFaqsPage from './pages/admin/AdminFaqsPage'
import AdminTeamPage from './pages/admin/AdminTeamPage'
import AdminContactMessagesPage from './pages/admin/AdminContactMessagesPage'
import AdminWebsiteSettingsPage from './pages/admin/AdminWebsiteSettingsPage'
import AdminSeoSettingsPage from './pages/admin/AdminSeoSettingsPage'
import AdminNewsletterPage from './pages/admin/AdminNewsletterPage'
import AdminEmailTemplatesPage from './pages/admin/AdminEmailTemplatesPage'
import AdminNotificationsPage from './pages/admin/AdminNotificationsPage'
import AdminLogsPage from './pages/admin/AdminLogsPage'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        {/* ADMIN — separate shell, no storefront Navbar/Footer */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="coupons" element={<AdminCouponsPage />} />
          <Route path="reviews" element={<AdminReviewsPage />} />

          {/* CMS module */}
          <Route path="cms/home" element={<AdminHomePage />} />
          <Route path="cms/about" element={<AdminAboutPage />} />
          <Route path="cms/pages" element={<AdminCmsPage />} />
          <Route path="cms/banners" element={<AdminBannersPage />} />
          <Route path="cms/faqs" element={<AdminFaqsPage />} />
          <Route path="cms/team" element={<AdminTeamPage />} />
          <Route path="cms/website-settings" element={<AdminWebsiteSettingsPage />} />
          <Route path="cms/contact-messages" element={<AdminContactMessagesPage />} />
          <Route path="cms/seo" element={<AdminSeoSettingsPage />} />

          <Route path="newsletter" element={<AdminNewsletterPage />} />
          <Route path="email-templates" element={<AdminEmailTemplatesPage />} />
          <Route path="notifications" element={<AdminNotificationsPage />} />
          <Route path="logs" element={<AdminLogsPage />} />
        </Route>

        {/* STOREFRONT — unchanged from before */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/track-order" element={<TrackOrderPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
              </Routes>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App