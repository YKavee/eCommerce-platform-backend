const express = require("express");
const router = express.Router();
const ProductManagementApi = require("../api/product-management/product-management-api");
const CategoryManagementApi = require("../api/category-management/category-management-api");
const OrderManagementApi = require("../api/order-management/order-management-api");

router.use("/products", ProductManagementApi);
router.use("/categories", CategoryManagementApi);
router.use("/orders", OrderManagementApi);

module.exports = router;
