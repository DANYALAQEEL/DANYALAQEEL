const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mapProduct = require("../utils/productMapper");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse, errorResponse } = require("../utils/response");

// Shape the cart the same way for every response so the frontend
// always gets full product details alongside quantity/variant info.
const formatCart = async (cart) => {
  if (!cart) {
    return { items: [] };
  }

  const items = [];

  for (const item of cart.items) {
    const product = await Product.findById(item.productId);

    if (!product) continue; // product was deleted — skip silently

    items.push({
      ...mapProduct(product),
      quantity: item.quantity,
      selectedColor: item.selectedColor || null,
      selectedSize: item.selectedSize || null,
    });
  }

  return { id: cart._id, items };
};

/*
====================================
GET CART
====================================
*/
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  return successResponse(res, "Cart fetched successfully", await formatCart(cart));
});

/*
====================================
ADD / UPDATE ITEM IN CART
====================================
*/
const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1, selectedColor, selectedSize } = req.body;

  if (!productId) {
    return errorResponse(res, "productId is required", 400);
  }

  const product = await Product.findById(productId);

  if (!product || !product.isActive) {
    return errorResponse(res, "Product not found", 404);
  }

  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = await Cart.create({ userId: req.user.id, items: [] });
  }

  const existing = cart.items.find(
    (item) =>
      item.productId.toString() === productId &&
      (item.selectedColor || null) === (selectedColor || null) &&
      (item.selectedSize || null) === (selectedSize || null)
  );

  if (existing) {
    existing.quantity += Number(quantity);
  } else {
    cart.items.push({
      productId,
      quantity: Number(quantity),
      selectedColor: selectedColor || null,
      selectedSize: selectedSize || null,
    });
  }

  await cart.save();

  return successResponse(res, "Item added to cart", await formatCart(cart));
});

/*
====================================
UPDATE ITEM QUANTITY
====================================
*/
const updateCartItem = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return errorResponse(res, "Quantity must be at least 1", 400);
  }

  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    return errorResponse(res, "Cart not found", 404);
  }

  const item = cart.items.find((i) => i.productId.toString() === productId);

  if (!item) {
    return errorResponse(res, "Item not in cart", 404);
  }

  item.quantity = Number(quantity);
  await cart.save();

  return successResponse(res, "Cart updated", await formatCart(cart));
});

/*
====================================
REMOVE ITEM FROM CART
====================================
*/
const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    return errorResponse(res, "Cart not found", 404);
  }

  cart.items = cart.items.filter((i) => i.productId.toString() !== productId);
  await cart.save();

  return successResponse(res, "Item removed from cart", await formatCart(cart));
});

/*
====================================
CLEAR CART
====================================
*/
const clearCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  if (cart) {
    cart.items = [];
    await cart.save();
  }

  return successResponse(res, "Cart cleared", { items: [] });
});

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};
