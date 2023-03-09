// const cheerio = require("cheerio");
// const axios = require("axios");
// import axios from "axios";
// import cheerio from "cheerio";
// import { index } from "cheerio/lib/api/traversing";
import * as cheerio from "cheerio";
import axios from "axios";

const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://nairametrics.com/category/industries/tech-news/"
    );
    const html = response.data;
    const news = cheerio.load(html);
    const allNews = [];
    news("div.jeg_posts > article").each((index, el) => {
      const post = news(el);
      const title = post
        .find("h3.jeg_post_title")
        .text()
        .trim();
      const link = post.find("h3.jeg_post_title a").attr("href");
      const image = post.find("img.lazy").attr("src");
      const excerp = post
        .find("div.jeg_post_excerpt")
        .text()
        .trim();
      const article = { title, link, image, excerp };
      allNews.push(article);

      //console.log(allNews);
    });
    return allNews;
  } catch (error) {
    console.error(error);
  }
};

fetchNews();

//module.exports = { fetchNews };
export default fetchNews;
