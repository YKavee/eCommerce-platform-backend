const CategoryManagementDao = require("../dao/category-management-dao");

class CategoryManagementService {
  async getAllByCategory(category) {
    try {
      const response = await CategoryManagementDao.getProductsByCategory(
        category
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new CategoryManagementService();
