// essa parte conecta com o banco de dados


const {Pool}  = require('pg');
// importando

// iniciando classe de conexão
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;