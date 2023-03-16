import "./App.css";
import BlackMarketRatesTable from "./BlackMarketRatesTable";
// import CryptoPrice from "./CryptoPrices";
import fetchNews from "./FetchNews";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Headnews from "./Headnews";
// import HeadnewsItem from "./HeadnewsItem";
// import { response } from "express";

function App() {
  const [news, setNews] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getList();
    console.log(rate);
  }, []);

  const getList = () => {
    fetch("https://gn.onrender.com/api/rates")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // log the data to console
        setRate(data);
        console.log("rates");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const update = 3;

  // const getList = () => {
  //   fetch("http://localhost:5000/api/getList")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRate(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  return (
    <div className="App">
      {/* <div className="crypto-container">
        <CryptoPrice symbol="bitcoin" style={{ marginRight: "10px" }} />
        <CryptoPrice symbol="ethereum" style={{ marginRight: "10px" }} />
        <CryptoPrice symbol="solana" />
      </div> */}

      <Navbar />
      {rate && (
        <table className="table">
          <thead>
            <tr colSpan="2">
              <th>Currency</th>
              <th>Buy/Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>usdBuy</td>
              <td>{Number(rate[0]) - update}</td>
            </tr>
            <tr>
              <td>usdSell</td>
              <td>{Number(rate[1]) + update}</td>
            </tr>
            <tr>
              <td>gbpBuy</td>
              <td>{Number(rate[2]) - update}</td>
            </tr>
            <tr>
              <td>gbpSell</td>
              <td>{Number(rate[3]) + update}</td>
            </tr>
            <tr>
              <td>eurBuy</td>
              <td>{Number(rate[4]) - update}</td>
            </tr>
            <tr>
              <td>eurSell</td>
              <td>{Number(rate[5]) + update}</td>
            </tr>
          </tbody>
        </table>
      )}

      {/* <div>
        <BlackMarketRatesTable />
      </div> */}

      <div className="news-container">
        {news && news.length > 0 ? (
          news.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              link={article.link}
              image={article.image}
              excerp={article.excerp}
            />
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
