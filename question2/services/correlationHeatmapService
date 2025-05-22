const axios = require('axios');

const api = axios.create({
  baseURL: 'http://20.244.56.144/evaluation-service',
});

const getCorrelationHeatmap = async () => {
  try {
    const response = await api.get('/correlation-heatmap');
    return response.data.correlationHeatmap;
  } catch (err) {
    throw err;
  }
};

module.exports = { getCorrelationHeatmap };
