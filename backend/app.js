const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./routes/user')
const saucesRoutes = require('./routes/sauce')


// Connexion à la base de données avec mongoose
mongoose.connect('mongodb+srv://user:gfy546@cluster0.dnnex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',              
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express ();


// Définition de headers pour éviters les erreurs de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//fonction pour tout type de requête qui permet à l'application express d'envoyer une réponse en JSON
app.use(express.json());


// Enregistrement des routeurs
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
//logique importé de sauceRoutes et appliqué à la même route
app.use('/api/sauces', saucesRoutes);


module.exports = app;









