const Product = require("../model/product-model/product-model");

class ProductManagementDao {
  async getAllProducts() {
    const collection = await Product.find({})
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return collection;
  }

  // async getOneProduct(req, res) {
  //   const collection = await Product.findOne(req)
  //     .then((docs) => {
  //       return docs;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  //   return collection;
  // }

  async addProducts(req, res) {
    const collection = await Product.create(req)
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
