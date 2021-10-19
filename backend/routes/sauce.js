const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes du routeur
//ici '/' pour /api/sauce/ par défaut
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce); 
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/:id/like', auth, sauceCtrl.likeOrDislike);

module.exports = router;
