// eslint-disable-next-line no-undef
const { Pool } = require("pg");

const pool = new Pool({
  user: "pedro",
  host: "localhost",
  database: "testbanco",
  password: "123",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao conectar ao banco de dados", err.stack);
  }
  console.log("Conectado ao banco de dados PostgreSQL");
  release();
});

// eslint-disable-next-line no-undef
module.exports = pool;

// CREATE DATABASE testbanco;
// CREATE ROLE pedro PASSWORD '123' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;
