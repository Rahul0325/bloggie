import React from "react";
import { Icon } from "../shared";

type CoverPictureProps = {
  pictureUrl: string;
};

export const CoverPicture: React.FC<CoverPictureProps> = (props) => {
  return (
    <div className="cover">
      <Icon
        iconPath={props.pictureUrl}
        altText="Cover Picture"
        class="cover-picture"
      />
      <Icon
        iconPath={props.pictureUrl}
        altText="Background Picture"
        class="background-picture"
      />
    </div>
  );
};
