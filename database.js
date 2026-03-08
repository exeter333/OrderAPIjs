const mongoose = require("mongoose");

async function connectDatabase() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB conectado com sucesso.");

    } catch (error) {

        console.error("Erro ao conectar ao MongoDB:", error.message);

        process.exit(1); // Encerra API com código de erro

    }

}

module.exports = connectDatabase;