import React from "react";
import BTC_Logo from "../../public/btc.png";

const Bitcoin = ({
  checkStyle,
  checkPrices,
  generateSentence,
  coinbase,
  binance,
}) => {
  return (
    <>
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
        {generateSentence("Coinbase", "Bitcoin", coinbase.BTC - binance.BTC)}
      </div>
    </>
  );
};

export default Bitcoin;
