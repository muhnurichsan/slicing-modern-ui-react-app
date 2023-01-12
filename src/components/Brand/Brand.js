import React from "react";
import { dropbox, google, shopify, slack, atlassian } from "./imports";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <img src={dropbox} alt="dropbox" />
      <img src={google} alt="google" />
      <img src={shopify} alt="shopify" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
    </div>
  );
};

export default Brand;
