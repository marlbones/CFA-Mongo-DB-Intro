var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient'); //.. goes up a level so we're on root
const ingredientController = require('../controllers/ingredientController')

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit', ingredientController.editIngredients );

router.post('/ingredients/:id/edit', ingredientController.postEditIngredients )

router.get('/ingredients/:id/remove', (req, res) => {
  Ingredient.findOneAndRemove({ _id: req.params.id}, req.body)
    .then(ingredient => {
      res.redirect('/')
    })
});

// router.get('/delete/:id', (req, res) => {
//   Ingredient.findByIdAndRemove()
// })

module.exports = router;
