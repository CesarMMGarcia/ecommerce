import express from "express";
import asyncHandler from "express-async-handler";
import {
  getProducts,
  getProductsById,
} from "../controllers/productController.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductsById);

export default router;
