const express = require('express');
const router = express.Router();
let productsController = require('../controllers/productsController');

router.get('/detail', productsController.detail);
router.get('/cart', productsController.cart);

module.exports = router;