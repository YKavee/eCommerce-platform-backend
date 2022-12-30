const express = require("express");
const Router = express.Router();
const ProductManagementService = require("../../service/product-management-service");

class ProductManagementApi {
  constructor() {
    Router.get("/", this.getAllProducts);
    //Router.get("/single", this.getSingleProduct);
    Router.post("/", this.postProducts);
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

  //Retrieve single product by id
  // async getSingleProduct(req, res) {
  //   try {
  //     //console.log("params", req.params);
  //     const request = req.query._id;
  //     console.log("req", request);
  //     const response = await ProductManagementService.getSingle(request);
  //     res.status(200).send(response);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // }

  //Create new product
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
