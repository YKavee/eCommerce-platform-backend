const OrderManagementDao = require("../dao/order-management-dao");

class OrderManagementService {
  async addOrder(req, res) {
    try {
      const response = await OrderManagementDao.addOrders(req);
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new OrderManagementService();
