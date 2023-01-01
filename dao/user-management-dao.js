const User = require("../model/user-model/user-model");

class ProductManagementDao {
  async addUsers(req, res) {
    const collection = await User.create(req)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }
}
module.exports = new ProductManagementDao();
