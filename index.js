const express = require('express')
// const cors = require('cors')
const app = express()
const port = 3005
const user = require('./controller/userController')

// app.use(cors())

//connecxion a la base de donnee methode  debuts

app.get('/', (req,resp) => {
  return resp.send("Hello")
});

// user route
app.post('/login', (req,resp) => {
 const  data = req.body

 return resp.send(data.email ?? 'kjh')
  // user.login.userAuth(req.body)
});

app.listen(port, () => {
  })

//connecxion a la base de donnee methode fin


 

