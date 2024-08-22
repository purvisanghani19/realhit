const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartItem = new mongoose.Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },

  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true, // quantity * price
  },
});

const PlaseOrder = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user", require: true },
  items: [CartItem],
  totalAmount: { type: Number, require: true },
  shippingAddress: {
    address: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    postalCode: { type: String, require: true, max: 32 },
    country: { type: String, require: true },
  },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("orderdetail", PlaseOrder);
