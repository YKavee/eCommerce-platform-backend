const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
