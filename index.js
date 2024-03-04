const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
// const login = require('./controller/userController')

// app.use(cors())

//connecxion a la base de donnee methode  debuts

app.get('/', (req,resp) => {
  return "Hello"
});

// // user route
// app.post('/login', function(req, res) {
//   login
// });

app.listen(port, () => {
  console.log("serveur est en ligne !");
})
//connecxion a la base de donnee methode fin


 

