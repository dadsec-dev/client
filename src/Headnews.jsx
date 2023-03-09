//https://www.techcityng.com/

// const cheerio = require("cheerio");
// const axios = require("axios");
// import axios from "axios";
// import cheerio from "cheerio";
// import { index } from "cheerio/lib/api/traversing";
import * as cheerio from "cheerio";
import axios from "axios";

const Headnews = async () => {
  try {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.techcityng.com/"
    );
    const html = response.data;
    const news = cheerio.load(html);
    const allNews = [];
    news("div.cnvs-block-layout__inner").each((index, el) => {
      const post = news(el);
      const title = post
        .find("h2.cs-entry__title span")
        .text()
        .trim();
      const link = "https://www.techcityng.com/";

      const article = { title, link };
      allNews.push(article);

      console.log(allNews);
    });
    return allNews;
  } catch (error) {
    console.error(error);
  }
};

Headnews();

// //module.exports = { fetchNews };
export default Headnews;
