const OrderManagementDao = require("../dao/order-management-dao");

class OrderManagementService {
  async addOrder(req, res) {
    try {
      req.total_price = req.price1 + req.price2;
      const response = await OrderManagementDao.addOrders(req);
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
