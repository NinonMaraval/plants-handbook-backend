const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b6a99cbb518608',
  password: 'f2561406',
  database: 'heroku_c57c7007d700637',
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
