import React from "react";

type Props = {
  coverPictureUrl: string;
  title: string;
  readTime: string;
  author: string;
  date: string;
};

export const Card: React.FC<Props> = (props) => {
  return (
    <div className="card">
      <div className="coverPicture">
        <img src={props.coverPictureUrl}></img>
      </div>
      <div className="contentSection">
        <div className="author">{props.author}</div>
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};
