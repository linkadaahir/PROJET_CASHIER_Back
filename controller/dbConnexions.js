
// var mysql = require('mysql2/promise');

// exports.connexion = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database: 'cashier',
// });

const mysql = require('mysql2/promise');

exports.connexion = mysql.createPool({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USER || 'root',
  password : process.env.DB_PASSWORD || '',
  database : process.env.DB_DATABASE || 'cashier',
});