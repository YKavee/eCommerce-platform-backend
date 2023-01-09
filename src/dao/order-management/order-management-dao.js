const Order = require("../../model/order-model/order-model");

class OrderManagementDao {
  async createOrder(req, res) {
    const collection = await Order.create(req)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }

  async getAllOrders() {
    const collection = await Order.find({})
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }
}
module.exports = new OrderManagementDao();
