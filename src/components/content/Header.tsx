import { Icon } from "../shared";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      <Icon
        class="go-back"
        iconPath="/assets/left-chevron.png"
        altText="Go back button"
        onClick={() => {
          console.log("should go back");
        }}
      />

      <div className="header-title">{props.title}</div>
      <span></span>
    </div>
  );
};
