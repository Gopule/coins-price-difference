import React from "react";
import { FaLessThan, FaGreaterThan, FaEquals } from "react-icons/fa";

export const checkPrices = (coinbase, binance) => {
  if (coinbase > binance) return <FaGreaterThan />;
  else if (coinbase < binance) return <FaLessThan />;
  else return <FaEquals />;
};

export const checkStyle = (difference) => {
  if (difference > 0) return "greater";
  else if (difference < 0) return "lesser";
  else return "equal";
};

export const generateSentence = (exchange, coin, difference) => {
  const formatNubmer = (number) => {
    return Math.abs(number).toFixed(2);
  };
  let otherExchange = "";
  exchange === "Coinbase"
    ? (otherExchange = "Binance")
    : (otherExchange = "Coinbase");
  if (difference > 0) {
    return (
      <p>
        Buying {coin} from <span className="cheaper">{otherExchange}</span> is $
        {formatNubmer(difference)} cheaper than buying {coin} from{" "}
        <span className="expensive">{exchange}</span>
      </p>
    );
  } else if (difference < 0)
    return (
      <p>
        Buying {coin} from <span className="cheaper">{exchange}</span> is $
        {formatNubmer(difference)} cheaper than buying {coin} from{" "}
        <span className="expensive">{otherExchange}</span>
      </p>
    );
  else
    return (
      <p>
        The price of {coin} from {exchange} and {otherExchange} are exactly the
        same at the moment
      </p>
    );
};
