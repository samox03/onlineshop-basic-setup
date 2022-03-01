const { Schema, model } = require("mongoose");
const { boolean } = require("webidl-conversions");

const productSchema = new Schema(
  {
    id: { type: Number, },
    title: { type: String, },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String, },
    rating: {
      rate: { type: Number, },
      count: { type: Number, }
    }
  },
  {  timestamps: true
  }
)

const Product = model("Product", productSchema);

module.exports = Product;