const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()
const port = 3005
const user = require('./controller/userController')

app.use(bodyParser.json())
app.use(cors())


//connecxion a la base de donnee methode  debuts

app.get('/', (req,resp) => {
  return resp.send("Hello")
});

// user route
app.post('/login', async (req,resp) => {
  console.log(req.body);
  let auth = await user.login.userAuth(req.body)
  return resp.json(auth)
});

app.listen(port, () => {
  })

//connecxion a la base de donnee methode fin


 

