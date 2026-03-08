import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./database.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// rotas
app.use("/orders", orderRoutes);

// conectar ao banco
connectDatabase();

// iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});