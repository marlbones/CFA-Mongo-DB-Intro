const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

// Get Ingredient
exports.getIngredients = (req, res) => {
  Ingredient.find()
    .then(ingredients => {
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
      })
    })
};

// Get Json/API
exports.getApiIngredients = (req, res) => {
  Ingredient.find()
    .then(ingredients => {
      res.json(ingredients)
    })
};

// Post Ingredient
exports.postIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
    })
};

// Post Api ingredient
exports.postApiIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.json(ingredient)
    })
};

// Update Ingredients - This finds the particular ingredient and renders the ingredient page
exports.editIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    })
};

// Post edit Ingredients - When you click the submit button on the edit page this works.
exports.postEditIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
    })
};
