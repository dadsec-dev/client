// const cheerio = require("cheerio");
// const axios = require("axios");
// import axios from "axios";
// import cheerio from "cheerio";
// import { index } from "cheerio/lib/api/traversing";
// import * as cheerio from "cheerio";
// import axios from "axios";

const axios = require("axios");
const cheerio = require("cheerio");

const Rates = async () => {
  try {
    const response = await axios.get("https://abokiforex.app/");
    const html = response.data;
    const $ = cheerio.load(html);
    //const allNews = [];
    //console.log($);
    $(".jumbotron .card").each((index, el) => {
      const text1 = $(el)
        .find("span.overlay-text")
        .text()
        .trim();
      //   const text2 = $(el)
      //     .find("span.overlay-text")
      //     .text()
      //     .trim();
      console.log(`Text 1: ${text1}`);
      //   console.log(`Text 2: ${text2}`);
    });
    //return allNews;src
  } catch (error) {
    console.error(error);
  }
};

Rates();

//module.exports = { fetchNews };
// export default Rates;
