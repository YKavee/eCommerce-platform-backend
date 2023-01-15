const express = require("express");
const Router = express.Router();
const OrderManagementService = require("../../service/order-management/order-management-service");
const checkAuth = require("../../middleware/check-auth");

class OrderManagementApi {
  constructor() {
    Router.post("/", checkAuth, this.createOrder);
    Router.get("/", checkAuth, this.getAllOrders);
  }

  //Place new order
  async createOrder(req, res) {
    try {
      const request = req.body;
      const response = await OrderManagementService.createOrder(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //Retrieve orders
  async getAllOrders(req, res) {
    try {
      const response = await OrderManagementService.getAll();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new OrderManagementApi();

module.exports = Router;
