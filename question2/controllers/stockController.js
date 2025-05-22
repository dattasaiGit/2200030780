const stockService = require('../services/stockService');

const getStocks = async (req, res) => {
  try {
    const stocks = await stockService.getStocks();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stocks' });
  }
};

const getSpecificStock = async (req, res) => {
  try {
    const ticker = req.params.ticker;
    const minutes = req.query.minutes;
    const stock = await stockService.getSpecificStock(ticker, minutes);
    res.json(stock);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching specific stock' });
  }
};

module.exports = { getStocks, getSpecificStock };
