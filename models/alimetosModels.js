const mongoose = require("mongoose");

const alimentosSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  quant: { type: Number, required: true},
  valorU: { type: Number, required: true},
});

const Alimentos = mongoose.model("Alimentos", alimentosSchema);

module.exports = Alimentos;
