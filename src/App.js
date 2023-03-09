import "./App.css";
import BlackMarketRatesTable from "./BlackMarketRatesTable";
import CryptoPrice from "./CryptoPrices";
import fetchNews from "./FetchNews";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Headnews from "./Headnews";
import HeadnewsItem from "./HeadnewsItem";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data);
        // setLoading(false);
      })
      .catch((error) => {
        // setLoading(false);
        // setError(true);
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {/* <div className="crypto-container">
        <CryptoPrice symbol="bitcoin" style={{ marginRight: "10px" }} />
        <CryptoPrice symbol="ethereum" style={{ marginRight: "10px" }} />
        <CryptoPrice symbol="solana" />
      </div> */}

      <Navbar />

      <div>
        <BlackMarketRatesTable />
      </div>

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
