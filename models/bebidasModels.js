const mongoose = require("mongoose");

const bebidasSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  quant: { type: Number, required: true },
  valorU: { type: Number, required: true },
});

const Bebidas = mongoose.model("Bebidas", bebidasSchema);

module.exports = Bebidas;
