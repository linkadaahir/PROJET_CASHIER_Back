const express = require('express')
const app = express()
var mysql = require('mysql2/promise');

 
var connexion = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'cashier',
});


exports.login = {
  userAuth: async (req, resp) => {
    const [results, fields] = await connexion.execute(
      'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?',
      [req?.email, req?.password]
    );

    let response;

    if (results.length === 0) {
      response = {
        message: 'l\'utilisateur n\'existe pas',
        error: true
      };
    } else {
      response = {
        message: 'l\'utilisateurs trouver avec success',
        error: false,
        user_profile: results
      };
    }

    return response;
  }
};





// module.exports = {login}