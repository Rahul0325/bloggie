import React from "react";
import { Article } from "../../models/home";
import { useNavigate } from "react-router-dom";

type Props = {
  article: Article;
};

export const Card: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate("/article/" + id);
  };

  return (
    <div
      className="card"
      onClick={() => {
        handleClick(props.article.id);
      }}
    >
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
