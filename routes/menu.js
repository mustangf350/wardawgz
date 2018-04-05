var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var menu = require('../models/menu.js');

/* GET ALL menu */
router.get('/', function(req, res, next) {
    menu.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE menu BY ID */
router.get('/:id', function(req, res, next) {
    menu.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE menu */
router.post('/', function(req, res, next) {
    menu.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE menu */
router.put('/:id', function(req, res, next) {
    menu.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE menu */
router.delete('/:id', function(req, res, next) {
    menu.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;