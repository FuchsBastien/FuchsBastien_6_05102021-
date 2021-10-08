const express = require('express');
const mongoose = require('mongoose');

/*const User = require('./models/user');*/
/*const Sauce = require('./models/sauce');*/

const userRoutes = require('./routes/user');

// Connexion à la base de données avec mongoose
mongoose.connect('mongodb+srv://kage59:shogun99@cluster0.dnnex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',              
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


app.use(express.json());


// Enregistrement des routeurs
app.use('/api/auth', userRoutes);



/*--------------------------------------------------------*/

/*app.post('/api/auth/signup', (req, res, next) => {
  delete req.body._id;
    const user = new User({
      ...req.body
    });
    user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur enregistrée !'}))
      .catch(error => res.status(400).json({ error }));
  

  console.log(req.body);
  res.status(201).json({
    message: 'Compte créé !'
  });
});

app.use('/api/auth/signup', (req, res, next) => {
  User.find()
  .then(Signup => res.status(200).json(Signup))
  .catch(error => res.status(400).json({ error }));
  const signup = [
  ];
  res.status(200).json(signup);
});

/*--------------------------------------------------------*/


/*app.post('/api/auth/login', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Compte connecté !'
  });
});


app.use('/api/auth/login', (req, res, next) => {
  const login = [
  ];
  res.status(200).json(login);
});

/*--------------------------------------------------------*/


module.exports = app;












/*app.post('/api/sauces', (req, res, next) => {
  delete req.body._id;
    const sauce = new Sauce({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Sauce enregistrée !'}))
      .catch(error => res.status(400).json({ error }));


  console.log(req.body);
  res.status(201).json({
    message: 'sauce enregistrée !'
  });
});


app.use('/api/sauces', (req, res, next) => {
    Sauce.find()
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(400).json({ error }));


  res.status(200).json(sauces);
});*/

/*--------------------------------------------------------*/





/*app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
  });

app.use((req, res, next) => {
res.status(201);
next();
});

app.use ((req, res, next) => {
res.json ({message : 'votre requête a bien été reçue!'})
});

app.use((req, res) => {
    console.log('Réponse envoyée avec succès !');
  });*/

