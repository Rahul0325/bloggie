import React from "react";
import { Article } from "../models/Article";
import { Card } from "./Card";

type Props = {
  title: string;
  articles: Article[];
};

export const Section: React.FC<Props> = (props) => {
  return (
    <div className={`section ${props.title}`}>
      <div className="sectionTitle">{props.title}</div>
      <div className="sectionArticles">
        {props.articles.map((article) => (
          <Card article={article}></Card>
        ))}
      </div>
    </div>
  );
};
