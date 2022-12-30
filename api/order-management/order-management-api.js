const express = require("express");
const Router = express.Router();
const OrderManagementService = require("../../service/order-management-service");

class OrderManagementApi {
  constructor() {
    Router.post("/", this.postOrder);
  }

  //Place new order
  async postOrder(req, res) {
    try {
      const request = req.body;
      const response = await OrderManagementService.addOrder(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new OrderManagementApi();

module.exports = Router;
