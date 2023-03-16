// const cheerio = require("cheerio");
// const axios = require("axios");
// import axios from "axios";
// import cheerio from "cheerio";
// import { index } from "cheerio/lib/api/traversing";
// import * as cheerio from "cheerio";
import axios from "axios";

const fetchNews = async () => {
  try {
    const response = await axios.get("https://jojio.herokuapp.com/api/news"); // Update the URL to your server's URL
    const allNews = response.data;
    return allNews;
  } catch (error) {
    console.error(error);
  }
};

fetchNews();

//module.exports = { fetchNews };
export default fetchNews;
