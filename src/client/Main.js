import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  checkPrices,
  checkStyle,
  generateSentence,
} from "../helperFuncs/helperFunctions";
import Exchanges from "./Exchanges";
import Bitcoin from "./Bitcoin";
import Ethereum from "./Ethereum";

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

          <Ethereum
            checkStyle={checkStyle}
            checkPrices={checkPrices}
            generateSentence={generateSentence}
            coinbase={coinbase}
            binance={binance}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
