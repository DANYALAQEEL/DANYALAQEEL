const Product = require("../models/Product");
const Order = require("../models/Order");
const Wishlist = require("../models/Wishlist");
const Review = require("../models/Review");
const InventoryLog = require("../models/InventoryLog");


const getDashboardStats = async (req, res) => {
  try {
    // ==========================
    // PRODUCT STATS
    // ==========================

    const totalProducts = await Product.countDocuments({
      isActive: true,
    });

    const featuredProducts = await Product.countDocuments({
      featured: true,
      isActive: true,
    });

    const lowStockProducts = await Product.countDocuments({
      stock: { $lte: 5 },
      isActive: true,
    });

    // ==========================
    // ORDER STATS
    // ==========================

    const totalOrders = await Order.countDocuments();

    const pendingOrders = await Order.countDocuments({
      orderStatus: "Pending",
    });

    const processingOrders = await Order.countDocuments({
      orderStatus: "Processing",
    });

    const deliveredOrders = await Order.countDocuments({
      orderStatus: "Delivered",
    });

    const cancelledOrders = await Order.countDocuments({
      orderStatus: "Cancelled",
    });

    // ==========================
    // REVENUE
    // ==========================

    const revenueResult = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const totalRevenue =
      revenueResult.length > 0
        ? revenueResult[0].totalRevenue
        : 0;
    // ==========================
    // PAYMENT STATS
    // ==========================

    const paidOrders = await Order.countDocuments({
      paymentStatus: "Paid",
    });

    const pendingPayments = await Order.countDocuments({
      paymentStatus: "Pending",
    });

    const failedPayments = await Order.countDocuments({
      paymentStatus: "Failed",
    });

    // ==========================
    // TODAY'S ORDERS
    // ==========================

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todayOrders = await Order.countDocuments({
      createdAt: {
        $gte: today,
        $lt: tomorrow,
      },
    });

    // ==========================
    // MONTHLY REVENUE
    // ==========================

    const monthStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    const monthlyRevenueResult = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
          createdAt: {
            $gte: monthStart,
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const monthlyRevenue =
      monthlyRevenueResult.length > 0
        ? monthlyRevenueResult[0].total
        : 0;

    // ==========================
    // RECENT ORDERS
    // ==========================

    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select(
        "orderNumber customer.name totalAmount orderStatus paymentStatus createdAt"
      );

    // ==========================
    // RESPONSE
    // ==========================

    return res.status(200).json({
      success: true,

      stats: {

        products: {
          total: totalProducts,
          featured: featuredProducts,
          lowStock: lowStockProducts,
        },

        orders: {
          total: totalOrders,
          today: todayOrders,
          pending: pendingOrders,
          processing: processingOrders,
          delivered: deliveredOrders,
          cancelled: cancelledOrders,
        },

        payments: {
          paid: paidOrders,
          pending: pendingPayments,
          failed: failedPayments,
        },

        revenue: {
          total: totalRevenue,
          monthly: monthlyRevenue,
        },
      },
      recentOrders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getMonthlySalesAnalytics = async (req, res) => {
  try {

    const sales = await Order.aggregate([

      {
        $match: {
          paymentStatus: "Paid"
        }
      },

      {
        $group: {

          _id: {
            month: {
              $month: "$createdAt"
            }
          },

          revenue: {
            $sum: "$totalAmount"
          },

          orders: {
            $sum: 1
          }

        }
      },

      {
        $sort: {
          "_id.month": 1
        }
      }

    ]);

    const months = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const result = sales.map(item => ({
      month: months[item._id.month],
      orders: item.orders,
      revenue: item.revenue
    }));

    res.json({
      success: true,
      analytics: result
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
const getTopSellingProducts = async (req, res) => {
  try {

    const products = await Order.aggregate([

      {
        $unwind: "$items",
      },

      {
        $group: {
          _id: "$items.productId",
          title: {
            $first: "$items.title",
          },
          quantitySold: {
            $sum: "$items.quantity",
          },
          revenue: {
            $sum: {
              $multiply: [
                "$items.quantity",
                "$items.priceAtPurchase",
              ],
            },
          },
        },
      },

      {
        $sort: {
          quantitySold: -1,
        },
      },

      {
        $limit: 10,
      },

    ]);

    return res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const getCustomerAnalytics = async (req, res) => {
  try {

    // Total unique customers from orders

    const totalCustomers = await Order.distinct(
      "customer.email"
    );

    // Customers this month

    const monthStart = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );

    const newCustomers = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: monthStart
          }
        }
      },
      {
        $group: {
          _id: "$customer.email"
        }
      }
    ]);

    // Returning customers

    const returningCustomers = await Order.aggregate([
      {
        $group: {
          _id: "$customer.email",
          orders: {
            $sum: 1
          }
        }
      },
      {
        $match: {
          orders: {
            $gt: 1
          }
        }
      }
    ]);

    // Wishlist users

    const wishlistUsers =
      await Wishlist.countDocuments();

    // Reviews

    const totalReviews =
      await Review.countDocuments();

    res.json({
      success: true,

      analytics: {

        totalCustomers:
          totalCustomers.length,

        newCustomersThisMonth:
          newCustomers.length,

        returningCustomers:
          returningCustomers.length,

        wishlistUsers,

        totalReviews

      }

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }
};
const getInventoryAnalytics = async (req, res) => {
  try {

    const totalProducts = await Product.countDocuments({
      isActive: true
    });

    const outOfStock = await Product.countDocuments({
      stock: 0,
      isActive: true
    });

    const lowStock = await Product.countDocuments({
      stock: {
        $gt: 0,
        $lte: 5
      },
      isActive: true
    });

    const totalStock = await Product.aggregate([
      {
        $match: {
          isActive: true
        }
      },
      {
        $group: {
          _id: null,
          stock: {
            $sum: "$stock"
          }
        }
      }
    ]);

    const recentInventoryLogs =
      await InventoryLog.find()
        .sort({ createdAt: -1 })
        .limit(10)
        .select(
          "productTitle action quantity stockBefore stockAfter createdAt"
        );

    res.json({
      success: true,

      analytics: {
        totalProducts,
        outOfStock,
        lowStock,
        totalStock:
          totalStock.length
            ? totalStock[0].stock
            : 0
      },

      recentInventoryLogs

    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};
const getOrderAnalytics = async (req, res) => {
  try {

    const statusCounts = await Order.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          total: { $sum: 1 }
        }
      }
    ]);

    const averageOrder = await Order.aggregate([
      {
        $group: {
          _id: null,
          averageOrderValue: {
            $avg: "$totalAmount"
          }
        }
      }
    ]);

    const totalItemsSold = await Order.aggregate([
      {
        $unwind: "$items"
      },
      {
        $group: {
          _id: null,
          quantity: {
            $sum: "$items.quantity"
          }
        }
      }
    ]);

    const highestOrder = await Order.findOne()
      .sort({ totalAmount: -1 })
      .select(
        "orderNumber totalAmount customer.name"
      );

    res.json({
      success: true,

      analytics: {

        statusCounts,

        averageOrderValue:
          averageOrder.length
            ? averageOrder[0].averageOrderValue
            : 0,

        totalItemsSold:
          totalItemsSold.length
            ? totalItemsSold[0].quantity
            : 0,

        highestOrder

      }

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }
};

const getSystemHealth = async (req, res) => {

  try {

    const mongoose = require("mongoose");

    const dbState = mongoose.connection.readyState;

    let database = "Disconnected";

    if (dbState === 1)
      database = "Connected";

    const uptime =
      Math.floor(process.uptime());

    const memoryUsage =
      process.memoryUsage();

    res.json({

      success: true,

      system: {

        status: "Healthy",

        environment:
          process.env.NODE_ENV || "development",

        uptime,

        database,

        timestamp:
          new Date(),

        memory: {

          rss:
            memoryUsage.rss,

          heapUsed:
            memoryUsage.heapUsed,

          heapTotal:
            memoryUsage.heapTotal

        }

      }

    });

  }

  catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};

module.exports = {
  getDashboardStats,
  getMonthlySalesAnalytics,
  getTopSellingProducts,
  getCustomerAnalytics,
  getInventoryAnalytics,
  getOrderAnalytics,
  getSystemHealth
};