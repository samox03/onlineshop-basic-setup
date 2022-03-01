const { Schema, model } = require("mongoose");
const { boolean } = require("webidl-conversions");

const productSchema = new Schema(
  {
  id: {type: number,},
title: {type: string,},
price: {type: number},
description: {type: string},
category: {type: string},
image: {type: string,},
rating: {
rate: {type: number,},
count: {type: number,}
}
  }
)

const Product = model("Product", productSchema);

module.exports = Product;