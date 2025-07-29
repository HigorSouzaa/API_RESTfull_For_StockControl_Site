const express = require("express");
const serverController = require("../controllers/serverController");

const router = express.Router();

router.post("/register/bebidas", serverController.registerBebidas);
router.get("/get/bebidas", serverController.getAllBebidas);
router.get("/get/bebidas/:id", serverController.getBebidasById);
router.put("/update/bebidas/:id", serverController.updateBebidasById);
router.delete("/delete/bebidas/:id", serverController.deleteBebidaById);

router.post("/register/alimentos", serverController.registerAlimento);
router.get("/get/alimentos", serverController.getAllAlimentos);
router.put("/update/alimentos/:id", serverController.updateAlimentosById);
router.get("/get/alimentos/:id", serverController.getAlimentosById);
router.delete("/delete/alimentos/:id", serverController.deleteAlimentosById);

module.exports = router;
