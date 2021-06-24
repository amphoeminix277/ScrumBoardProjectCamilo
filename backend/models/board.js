//importing modules
const mongoose = require("mongoose");

//Board Schema
const boardSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.ObjectId,ref:"user"},
  name: String,
  description: String,
  status: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

//Board Collection
const Board = mongoose.model("board", boardSchema);

//exports module
module.exports = Board;
