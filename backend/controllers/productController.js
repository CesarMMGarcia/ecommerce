import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    fecth all products
// @route   get /api/products
// @access   public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    fecth a products
// @route   get /api/products/:id
// @access   public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts, getProductsById };
