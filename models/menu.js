var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    combo1: String,
    price: String,
    ingredients: String,
    updated_date: { type: Date, default: Date.now },
  });