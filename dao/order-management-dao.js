const Order = require("../model/order-model/order-model");

class OrderManagementDao {
  async addOrders(req, res) {
    const collection = await Order.create(req)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }
}
module.exports = new OrderManagementDao();
