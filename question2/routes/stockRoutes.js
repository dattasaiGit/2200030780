const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/stocks', stockController.getStocks);
router.get('/stocks/:ticker', stockController.getSpecificStock);

module.exports = router;
