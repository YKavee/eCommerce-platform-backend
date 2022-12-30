const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  _id: { type: String, required: true },
  product_id: { type: String, required: true },
  customer_id: { type: String, required: true },
  order_date: { type: String, required: true },
  order_status: { type: String, required: true },
  total_price: { type: Number, required: true },
  payment_type: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
