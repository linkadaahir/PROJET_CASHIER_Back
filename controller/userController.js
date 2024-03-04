const express = require('express')
const app = express()
const db = require('../controller/dbConnexions')

login = async (req, resp) => {

   const user = await db.query(`select * from user where email=${req.body.email}`);

   if (!user) {
     return resp.json({
        message: 'l\'utilisateurs n\'existe pas',
        error: true
     })
   }

   return resp.json({
    message: 'l\'utilisateurs trouver avec success',
    error: false,
    user_profile: user
 })
};

module.exports = {login}