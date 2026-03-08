import mongoose from "mongoose";

// cria o schema do item do pedido (productId, quantity, price)
const ItemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// cria o schema do pedido (orderId, value, creationDate, items)
const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },

  creationDate: {
    type: Date,
    default: Date.now
  },

  items: [ItemSchema]

});

const Order = mongoose.model("Order", OrderSchema);

export default Order;