const express = require("express");
const Router = express.Router();
const ProductManagementService = require("../../service/product-management/product-management-service");
const checkAuth = require("../../middleware/check-auth");

class ProductManagementApi {
  constructor() {
    Router.get("/", this.getAllProducts);
    //Router.get("/single", this.getSingleProduct);
    Router.post("/", checkAuth, this.createProduct);
  }

  //Retrieve all products
  async getAllProducts(req, res) {
    try {
      const response = await ProductManagementService.getAll();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //Create new product
  async createProduct(req, res) {
    try {
      const request = req.body;
      const response = await ProductManagementService.createProduct(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new ProductManagementApi();

module.exports = Router;
