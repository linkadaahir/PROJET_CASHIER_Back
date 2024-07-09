const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3005;
const user = require('./controller/userController');

app.use(bodyParser.json());
app.use(cors());

// Connexion à la base de données

app.get('/', (req, resp) => {
  return resp.send("Hello");
});

// Route utilisateur
app.post('/login', async (req, resp) => {
  console.log(req.body);
  let auth = await user.login.userAuth(req.body);
  return resp.json(auth);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} else {
  module.exports = app; // Exporter l'application pour les tests
}
