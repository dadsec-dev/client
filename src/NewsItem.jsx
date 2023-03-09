import React from "react";

const NewsItem = ({ title, link, image, excerp }) => {
  return (
    <div className="news-item">
      <h2>
        <a href={link}>{title}</a>
      </h2>
      <img src={image} alt="" />
      <p>{excerp}</p>
    </div>
  );
};

export default NewsItem;
