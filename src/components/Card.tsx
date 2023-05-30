import React from "react";
import { Article } from "../models/Article";

type Props = {
  article: Article;
};

export const Card: React.FC<Props> = (props) => {
  return (
    <div className="card">
      <div className="coverPicture">
        <img src={props.article.coverImageUrl}></img>
      </div>
      <div className="contentSection">
        <div className="author">{props.article.Author}</div>
        <div className="title">{props.article.Title}</div>
        <div className="date">{props.article.date}</div>
      </div>
    </div>
  );
};
