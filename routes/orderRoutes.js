import express from "express";
import Order from "../models/Order.js";

const router = express.Router();


// cria o pedido
router.post("/order", async (req, res) => {
  try {

    const body = req.body;

    const order = {
      orderId: body.numeroPedido.split("-")[0],
      value: body.valorTotal,
      creationDate: new Date(body.dataCriacao),
      items: body.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const newOrder = await Order.create(order);

    res.status(201).json(newOrder);

  } catch (error) {

    res.status(500).json({ error: "Erro ao criar pedido" });

  }
});


// lista todos os pedidos
router.get("/order/list", async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({ error: "Erro ao listar pedidos" });

  }

});


// busca pedido baseado no orderId
router.get("/order/:orderId", async (req, res) => {

  try {

    const order = await Order.findOne({ orderId: req.params.orderId });

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(order);

  } catch (error) {

    res.status(500).json({ error: "Erro ao buscar pedido" });

  }

});


// atualiza pedido baseado no orderId
router.put("/order/:orderId", async (req, res) => {

  try {

    const updated = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({ error: "Erro ao atualizar pedido" });

  }

});


// deleta pedido baseado no orderId
router.delete("/order/:orderId", async (req, res) => {

  try {

    await Order.deleteOne({ orderId: req.params.orderId });

    res.json({ message: "Pedido deletado" });

  } catch (error) {

    res.status(500).json({ error: "Erro ao deletar pedido" });

  }

});

export default router;