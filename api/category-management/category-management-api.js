const express = require("express");
const Router = express.Router();
const CategoryManagementService = require("../../service/category-management-service");

class CategoryManagementApi {
  constructor() {
    Router.get("/:_id", this.getAllProductsByCategory);
  }

  //Retrieve products by category
  async getAllProductsByCategory(req, res) {
    try {
      const category = req.params._id;
      const response = await CategoryManagementService.getAllByCategory(
        category
      );
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new CategoryManagementApi();

module.exports = Router;
