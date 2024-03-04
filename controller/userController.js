const express = require('express')
const app = express()
const db = require('../controller/dbConnexions')

exports.login = {
   userAuth: (req, resp) => {

      console.log(req);

      const user = db.query(`select * from user where email=${req}`);
   
      if (!user) {
         response =  {
           message: 'l\'utilisateurs n\'existe pas',
           error: true
        }
      }
   
      response = {
       message: 'l\'utilisateurs trouver avec success',
       error: false,
       user_profile: user
    }
   
    console.log(response);
   
    return resp.json(response);
   }
}

// module.exports = {login}