import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature-container__feature">
      <div className="gpt3__feature-container__title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__feature-container__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
