import { useNavigate } from "react-router-dom";
import { Icon } from "../shared";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <Icon
        class="go-back"
        iconPath="/assets/left-chevron.png"
        altText="Go back button"
        onClick={() => {
          handleClick();
        }}
      />

      <div className="header-title">{props.title}</div>
      <span></span>
    </div>
  );
};
