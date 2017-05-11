var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient'); //.. goes up a level so we're on root
const ingredientController = require('../controllers/ingredientController')

/* GET home page. */
router.get('/', ingredientController.getIngredients);
router.get('/api/v1/ingredients', ingredientController.getApiIngredients);

router.post('/', ingredientController.postIngredients);
router.post('/api/v1/apipost', ingredientController.postApiIngredients);

router.get('/ingredients/:id/edit', ingredientController.editIngredients );

router.post('/ingredients/:id/edit', ingredientController.postEditIngredients )

router.get('/ingredients/:id/remove', (req, res) => {
  Ingredient.findOneAndRemove({ _id: req.params.id}) //brackets after findOne is how we're trying to find the specific Ingredient. In this instance it's by _id: which is in the req params
    .then(ingredient => {
      res.redirect('/')
    })
});

// router.get('/delete/:id', (req, res) => {
//   Ingredient.findByIdAndRemove()
// })

module.exports = router;
