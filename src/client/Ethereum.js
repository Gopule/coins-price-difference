import React from "react";
import ETH_Logo from "../../public/eth.png";

const Ethereum = ({
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
        {generateSentence("Coinbase", "Ethereum", coinbase.ETH - binance.ETH)}
      </div>
    </>
  );
};

export default Ethereum;
