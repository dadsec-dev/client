import React, { useEffect } from "react";
import Rates from "./Rates";

function BlackMarketRatesTable() {
  // useEffect(() => {
  //   Rates()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  const rates = [
    { currency: "USD", rate: 747 + 3 },
    { currency: "EUR", rate: 800 },
    { currency: "GBP", rate: 850 },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2">Black Market Rates</th>
        </tr>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => (
          <tr key={rate.currency}>
            <td>{rate.currency}</td>
            <td>{rate.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BlackMarketRatesTable;
