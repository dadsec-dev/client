const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://guardian.ng/category/technology/tech/";

const fetch = () => {
  axios
    .get(url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      const articles = [];

      $("section.category.category-tech.loadmore-container").each((i, el) => {
        const title = $(el).find("div.headline").text().trim();
        const link = $(el).find(".entry-title a").attr("href");
        const excerpt = $(el).find(".td-excerpt").text().trim();
        const image = $(el).find("img").attr("src");
        const article = { title, link, excerpt, image };
        articles.push(article);
      });

      console.log(articles);

      articles.map((article) => {
        return (
          <div>
            <h2>{article.title}</h2>
          </div>
        );
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

fetch();

export default fetch;
