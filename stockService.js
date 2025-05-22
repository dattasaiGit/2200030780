const axios = require('axios');

const api = axios.create({
  baseURL: 'http://20.244.56.144/evaluation-service',
});

const getStocks = async () => {
  try {
    const response = await api.get('/stocks');
    return response.data.stocks;
  } catch (err) {
    throw err;
  }
};

const getSpecificStock = async (ticker, minutes) => {
  try {
    const response = await api.get(`/stocks/${ticker}${minutes ? `?minutes=${minutes}` : ''}`);
    return response.data.stock;
  } catch (err) {
    throw err;
  }
};

module.exports = { getStocks, getSpecificStock };