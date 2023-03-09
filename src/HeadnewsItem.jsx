import React from "react";

const HeadnewsItem = ({ title, link }) => {
  return (
    <div className="head-news">
      <h2>
        <a href={link}>{title}</a>
      </h2>
    </div>
  );
};

export default HeadnewsItem;
