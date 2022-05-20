const mongoose = require("mongoose");

const causaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cause: { _id: Number, name: String },
  date: Date,
  count: Number,
});

const Causa = mongoose.model("causa_muerte", causaSchema);

module.exports = { Causa };
