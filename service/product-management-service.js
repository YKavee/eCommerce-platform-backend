const ProductManagementDao = require("../dao/product-management-dao");

class ProductManagementService {
  async getAll() {
    try {
      const response = await ProductManagementDao.getAllProducts();
      return response;
    } catch (error) {
      return error;
    }
  }

  async addProduct(req, res) {
    try {
      const response = await ProductManagementDao.addProducts(req);
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new ProductManagementService();
