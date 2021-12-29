const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  client
    .query(`CREATE TABLE IF NOT EXISTS values (
      id SERIAL PRIMARY KEY,
        number INT
        )`)
    .catch(err => console.log("PG ERROR", err));
  client
    .query(`CREATE TABLE IF NOT EXISTS cadastro (
      id SERIAL PRIMARY KEY,
      cep varchar(8), 
      cidade varchar(255), 
      cpf varchar(11), 
      email varchar(255), 
      endereco varchar(255), 
      estado varchar(2),
      nome varchar(255), 
      novidades INT, 
      numero INT, 
      promocoes INT, 
      senha varchar(255), 
      sobrenome varchar(255))`)
    .catch(err => console.log("=====================PG ERROR", err));
  client
    .query("CREATE TABLE IF NOT EXISTS teste (number INT)")
    .catch(err => console.log("+++++PG ERROR", err));
  pgClient.query("INSERT INTO teste(number) VALUES($1)", [1]);
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the values
app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");
  res.send(values);
});

// get the values
app.get("/values/:id", async (req, res) => {
  const value = await pgClient.query(`SELECT * FROM values WHERE id = ${req.params.id}`);
  res.send(value);
});

// get the values
app.get("/v/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");
  res.send(values);
});


// busca os valores
app.get("/cadastro/all", async (req, res) => {
  const cadastro = await pgClient.query("SELECT * FROM cadastro");
  res.send(cadastro);
});

app.get("/teste/all", async (req, res) => {
  const teste = await pgClient.query("SELECT * FROM teste");
  res.send(teste);
});

app.post("/teste", async (req, res) => {
  if (!req.body.value) {
    res.send({ working: false });
  } else {
    pgClient.query("INSERT INTO teste(number) VALUES($1)", [req.body.value]);
    res.send({ working: true });
  }
});

// now the post -> insert value
app.post("/values", async (req, res) => {
  if (!req.body.value) {
    res.send({ working: false });
  } else {
    pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);
    res.send({ working: true });
  }
});


app.post("/cadastro", async (req, res) => {
  if (!req.body.cep) {
    res.send({ working: false });
  } else {
    pgClient.query(`INSERT INTO cadastro 
      (cep, cidade, cpf, email, endereco, estado, nome, novidades, numero, promocoes, senha, sobrenome) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, 
        [req.body.cep, 
        req.body.cidade, 
        req.body.cpf, 
        req.body.email, 
        req.body.endereco, 
        req.body.estado, 
        req.body.nome, 
        req.body.novidades ? 1 : 0, 
        req.body.numero, 
        req.body.promocoes ? 1 : 0, 
        req.body.senha, 
        req.body.sobrenome ]);
    res.send({ working: true });
  }
});

app.listen(5000, err => {
  console.log("Listening");
});
