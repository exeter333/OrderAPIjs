require("dotenv").config();

const express = require("express");
const connectDatabase = require("./database");

const app = express();

app.use(express.json());

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});