const express = require("express");
require("./config/db");
const serverRouter = require("./routes/serverRoutes");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(serverRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Bem Vindo à API!");
});
