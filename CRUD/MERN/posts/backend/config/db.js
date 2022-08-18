/**
 * Arquivo de configuração do MongoDB.
 * 
 * Responsável por criar uma função com as
 * credênciais de conexão do banco.
 */
const mongoose = require('mongoose')

// Função responsável por realizar conexão com o banco.
// Exportar para o arquivo de configuração do servidor.
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB running at ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB