const express = require('express');
const router = express.Router();
const correlationHeatmapController = require('../controllers/correlationHeatmapController');

router.get('/correlation-heatmap', correlationHeatmapController.getCorrelationHeatmap);

module.exports = router;
