import React from "react";

type Props = {
  title: string;
  filterOptions: string[];
};
export const FilterSection: React.FC<Props> = (props) => {
  return (
    <div className="filter">
      <div>{props.title}</div>
      {props.filterOptions.map((option) => (
        <>
          <div className="filterOption">
            <div className="icon">O</div>
            <div className="text">{option}</div>
          </div>
        </>
      ))}
    </div>
  );
};
