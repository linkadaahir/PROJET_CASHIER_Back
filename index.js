const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

//connecxion a la base de donnee methode  debut

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'cashier',
});

connection.connect((err) =>{
  if(err){
    console.error("erreur de connexion : "+err.stack)
    return;
  }
  console.log("connexion reussie a la bdd!")
})

app.listen(port, () => {
  console.log("serveur est en ligne !");
})
//connecxion a la base de donnee methode fin


 

connection.end();