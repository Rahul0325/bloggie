import React from "react";

type IconProps = {
  iconPath: string;
  onClick?: () => void;
  altText?: string;
  class?: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <div className={props.class ? props.class : ""}>
      <img
        src={props.iconPath}
        alt={props.altText}
        onClick={props.onClick ? props.onClick : () => {}}
      />
    </div>
  );
};
