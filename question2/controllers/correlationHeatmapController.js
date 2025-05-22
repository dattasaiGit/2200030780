const correlationHeatmapService = require('../services/correlationHeatmapService');

const getCorrelationHeatmap = async (req, res) => {
  try {
    const correlationHeatmap = await correlationHeatmapService.getCorrelationHeatmap();
    res.json(correlationHeatmap);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching correlation heatmap' });
  }
};

module.exports = { getCorrelationHeatmap };
