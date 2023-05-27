import React from "react";

type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = (props) => {
  return <div className="title">{props.title}</div>;
};
