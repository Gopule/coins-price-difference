import React from "react";
import { FaLessThan, FaGreaterThan, FaEquals } from "react-icons/fa";

export const checkPrices = (coinbase, binance) => {
  if (coinbase > binance) return <FaGreaterThan />;
  else if (coinbase < binance) return <FaLessThan />;
  else return <FaEquals />;
};
