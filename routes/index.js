const express = require('express');
const menuProducts = require('../database/menu.json')

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , menuProducts});
});

module.exports = router;
