// GET - User
const bebida = require("../models/bebidasModels");
const alimento = require("../models/alimetosModels");

exports.registerBebidas = async (req, res) => {
  const { nome, valorU, quant } = req.body;
  if (!nome || !valorU || !quant) {
    return res.status(400).json({ error: "Preencha com todos os dados" });
  }

  try {
    const novaBebida = new bebida({ nome, valorU, quant });
    await novaBebida.save();
    return res.status(201).json({ message: "Bebida cadastrada com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Erro ao salvar bebida", details: error.message });
  }
};

exports.registerAlimento = async (req, res) => {
  const { nome, valorU, quant } = req.body;
  if (!nome || !valorU || !quant) {
    return res.status(400).json({ error: "Preencha com todos os dados" });
  }

  try {
    const novoAlimento = new alimento({ nome, valorU, quant });
    await novoAlimento.save();
    return res.status(201).json({ message: "Bebida cadastrada com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Erro ao salvar bebida", details: error.message });
  }
};

exports.getAllBebidas = async (req, res) => {
  try {
    const bebidas = await bebida.find();
    if (!bebidas) {
      return res.status(400).json({ error: "Nenhuma bebida encontrada" });
    }
    res.status(201).json(bebidas);
  } catch (error) {
    res.status(500).json({ erro: "Erro mostrar bebidas" });
  }
};

exports.getAllAlimentos = async (req, res) => {
  try {
    const alimentos = await alimento.find();
    if (!alimentos) {
      return res.status(400).json({ error: "Nenhum alimento encontrada" });
    }
    res.status(201).json(alimentos);
  } catch (error) {
    res.status(500).json({ erro: "Erro mostrar alimentos" });
  }
};

exports.deleteBebidaById = async (req, res) => {
  const { id } = req.params;
  try {
    const bebidaDeleted = await bebida.findByIdAndDelete(id);
    if (!bebidaDeleted) {
      return res.status(404).json({ erro: "Bebina não encontrada" });
    }
    res.status(204).send();
  } catch (error) {}
};

exports.deleteAlimentosById = async (req, res) => {
  const { id } = req.params;
  try {
    const alimentoDeleted = await alimento.findByIdAndDelete(id);
    if (!alimentoDeleted) {
      return res.status(404).json({ erro: "Alimento não encontrado" });
    }
    res.status(204).send();
  } catch (error) {}
};

exports.getAlimentosById = async (req, res) => {
  const { id } = req.params;
  try {
    const alimentoSearched = await alimento.findById(id);
    if (!alimentoSearched) {
      return res.status(400).json({ erro: "Alimento não encontrada" });
    }
    res.status(201).json(alimentoSearched);
  } catch (error) {
    res
      .status(500)
      .json({ erro: `Erro ao pesquisar alimento, erro: ${error}` });
  }
};

exports.getBebidasById = async (req, res) => {
  const { id } = req.params;
  try {
    const bebidaSearched = await bebida.findById(id);
    if (!bebidaSearched) {
      return res.status(400).json({ erro: "Bebida não encontrada" });
    }
    res.status(201).json(bebidaSearched);
  } catch (error) {
    res.status(500).json({ erro: `Erro ao pesquisar bebida, erro: ${error}` });
  }
};

exports.updateBebidasById = async (req, res) => {
  const { id } = req.params;
  const { nome, valorU, quant } = req.body;

  try {
    const bebidaSearched = await bebida.findByIdAndUpdate(
      id,
      { nome, valorU, quant },
      { new: true }
    );
    if (!bebidaSearched) {
      return res.status(400).json({ erro: "Bebida não encontrada" });
    }
    res.status(201).json(bebidaSearched);
  } catch (error) {
    res.status(500).json({ erro: `Erro ao pesquisar bebida, erro: ${error}` });
  }
};

exports.updateAlimentosById = async (req, res) => {
  const { id } = req.params;
  const { nome, valorU, quant } = req.body;

  try {
    const alimentosSearched = await alimento.findByIdAndUpdate(
      id,
      { nome, valorU, quant },
      { new: true }
    );
    if (!alimentosSearched) {
      return res.status(400).json({ erro: "Alimento não encontrada" });
    }
    res.status(201).json(alimentosSearched);
  } catch (error) {
    res
      .status(500)
      .json({ erro: `Erro ao pesquisar alimento, erro: ${error}` });
  }
};
