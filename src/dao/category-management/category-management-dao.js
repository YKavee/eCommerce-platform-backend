const Product = require("../../model/product-model/product-model");

class CategoryManagementDao {
  async getProductsByCategoryId(category) {
    const collection = await Product.find({ category })
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }
}
module.exports = new CategoryManagementDao();
