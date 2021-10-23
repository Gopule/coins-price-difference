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

          <Bitcoin
            checkStyle={checkStyle}
            checkPrices={checkPrices}
            generateSentence={generateSentence}
            coinbase={coinbase}
            binance={binance}
          />
          <div className="compare-coins">
            <div
              className={checkStyle(coinbase.ETH - binance.ETH)}
              onClick={() =>
                window.open("https://pro.coinbase.com/trade/ETH-USD", "_blank")
              }
              title="Coinbase ETH"
            >
              <img src={ETH_Logo} />
              <section className="price-coin">
                <h3 className="coin-name">ETH</h3>
                <p>${coinbase.ETH}</p>
              </section>
            </div>

            <span className="greater-lesser-equal">
              {checkPrices(coinbase.ETH, binance.ETH)}
            </span>

            <div
              className={checkStyle(binance.ETH - coinbase.ETH)}
              onClick={() =>
                window.open("https://www.binance.com/en/buy-Ethereum", "_blank")
              }
              title="Binance ETH"
            >
              <img src={ETH_Logo} />
              <section className="price-coin">
                <h3 className="coin-name">ETH</h3>
                <p>${binance.ETH}</p>
              </section>
            </div>
          </div>

          <div className="sentence">
            {generateSentence(
              "Coinbase",
              "Ethereum",
              coinbase.ETH - binance.ETH
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
