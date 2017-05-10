const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose; //cleaner syntax. Could be  const schema = mongoose.Schema


const ingredientSchema = new Schema({
  name: {
    type: String,
    trim: true //gets rid of white spaces
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
