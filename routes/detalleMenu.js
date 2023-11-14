const express = require('express');
const menuProducts = require('../database/menu.json')

const router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const idProduct = req.params.id;
  let product = menuProducts.find(product => product.id == idProduct)
  console.log(product)
  res.render('detalleMenu', { title: 'Express' , product});
});

module.exports = router;
