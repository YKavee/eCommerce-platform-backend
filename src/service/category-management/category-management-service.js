const CategoryManagementDao = require("../../dao/category-management/category-management-dao");

class CategoryManagementService {
  async getAllByCategoryId(category) {
    try {
      const response = await CategoryManagementDao.getProductsByCategoryId(
        category
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new CategoryManagementService();
