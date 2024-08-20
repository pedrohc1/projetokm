/* eslint-disable no-undef */
const express = require("express");
const pool = require("./db.cjs");

const app = express();
const port = 3000;

app.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao consultar o banco de dados");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
