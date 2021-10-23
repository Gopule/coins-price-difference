import React, { useState, useEffect } from "react";
import axios from "axios";
import Exchanges from "./Exchanges";

const Main = () => {
  const [coinbase, setCoinbase] = useState({});
  const [binance, setBinance] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data: coins } = await axios.get("/api/coins/");
      setCoinbase({
        BTC: Number(coins.coinbase_BTC_Data.price).toFixed(2),
        ETH: Number(coins.coinbase_ETH_Data.price).toFixed(2),
      });
      setBinance({
        BTC: Number(coins.binance_BTC_Data.price).toFixed(2),
        ETH: Number(coins.binance_ETH_Data.price).toFixed(2),
      });
    };
    getData();
  }, []);

  return (
    <div>
      {coinbase.BTC && (
        <div>
          <Exchanges />

          <div className="compare-coins">
            <div
              className={checkStyle(coinbase.BTC - binance.BTC)}
              onClick={() =>
                window.open("https://pro.coinbase.com/trade/BTC-USD", "_blank")
              }
              title="Coinbase BTC"
            >
              <img src={BTC_Logo} />
              <section className="price-coin">
                <h3>BTC</h3>
                <p>${coinbase.BTC}</p>
              </section>
            </div>

            <span className="greater-lesser-equal">
              {checkPrices(coinbase.BTC, binance.BTC)}
            </span>

            <div
              className={checkStyle(binance.BTC - coinbase.BTC)}
              onClick={() =>
                window.open("https://www.binance.com/en/buy-Bitcoin", "_blank")
              }
              title="Binance BTC"
            >
              <img src={BTC_Logo} />
              <section className="price-coin">
                <h3 className="coin-name">BTC</h3>
                <p>${binance.BTC}</p>
              </section>
            </div>
          </div>

          <div className="sentence">
            {generateSentence(
              "Coinbase",
              "Bitcoin",
              coinbase.BTC - binance.BTC
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
