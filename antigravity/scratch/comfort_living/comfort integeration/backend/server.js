const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

const adminRoutes = require("./routes/adminRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const contactRoutes = require("./routes/contactRoutes");
const teamRoutes = require("./routes/teamRoutes");

const orderRoutes = require("./routes/orderRoutes");
const couponRoutes = require("./routes/couponRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const websiteSettingsRoutes = require("./routes/websiteSettingsRoutes");
const faqRoutes = require("./routes/faqRoutes");
const cmsRoutes = require("./routes/cmsRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const auditRoutes = require("./routes/auditRoutes");
const activityRoutes = require("./routes/activityRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const emailTemplateRoutes = require("./routes/emailTemplateRoutes");
const seoRoutes = require("./routes/seoRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const customerAuthRoutes = require("./routes/customerAuthRoutes");
const cartRoutes = require("./routes/cartRoutes");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/products", productRoutes);

app.use("/api/auth", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/team", teamRoutes);

app.use("/admin", express.static("admin"));
app.use("/api/orders", orderRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/settings", websiteSettingsRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/email-templates", emailTemplateRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/customers", customerAuthRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", function (req, res) {
  res.send("Backend is running successfully");
});

app.get("/api/health", function (req, res) {
  res.json({ status: "ok" });
});

// Error middleware must be registered last so it catches errors
// thrown by every route above it (it was previously registered
// mid-list, which meant routes after it were never caught).
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});
