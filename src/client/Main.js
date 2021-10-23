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
        </div>
      )}
    </div>
  );
};

export default Main;
