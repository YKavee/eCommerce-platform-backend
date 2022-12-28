const express = require("express");
const Router = express.Router();
const ProductManagementService = require("../../service/product-management-service");

class ProductManagementApi {
  constructor() {
    Router.get("/", this.getAllProducts);
    Router.post("/", this.postProducts);
  }

  async getAllProducts(req, res) {
    try {
      const response = await ProductManagementService.getAll();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async postProducts(req, res) {
    try {
      const request = req.body;
      const response = await ProductManagementService.addProduct(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new ProductManagementApi();

module.exports = Router;
