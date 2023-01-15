import React from "react";
import "./Article.css";

const Article = ({ date, title, img }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={img} alt="img" />
      </div>
      <div className="gpt3__article-container">
        <div>
          <span>{date}</span>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
