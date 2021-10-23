const router = require("express").Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const { data: coinbase_BTC_Data } = await axios.get(
      "https://api.pro.coinbase.com/products/BTC-USD/ticker"
    );
    const { data: coinbase_ETH_Data } = await axios.get(
      "https://api.pro.coinbase.com/products/ETH-USD/ticker"
    );
    const { data: binance_BTC_Data } = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );
    const { data: binance_ETH_Data } = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
    );
    const coins = {
      coinbase_BTC_Data,
      coinbase_ETH_Data,
      binance_BTC_Data,
      binance_ETH_Data,
    };
    res.json(coins);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
