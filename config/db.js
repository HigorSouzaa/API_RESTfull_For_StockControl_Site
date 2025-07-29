const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();

// credenciais do BD

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@api.1hr0gpv.mongodb.net/bcd_estoque?retryWrites=true&w=majority&appName=API`
  );
  console.log("Conectou o banco de dados!");
}

main().catch((err) => console.log(err));

module.exports = main;
