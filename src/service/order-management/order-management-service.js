const OrderManagementDao = require("../../dao/order-management/order-management-dao");

class OrderManagementService {
  async createOrder(req, res) {
    try {
      const response = await OrderManagementDao.createOrder(req);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const response = await OrderManagementDao.getAllOrders();
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new OrderManagementService();
