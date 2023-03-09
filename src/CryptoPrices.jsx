import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoPrice({ symbol }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
      );
      setPrice(result.data[symbol].usd);
    };
    fetchData();
  }, [symbol]);

  return (
    <div className="crypto-price">
      {price ? (
        <p className="crypto-price-text">
          {symbol.toUpperCase()} Price: ${price}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CryptoPrice;
