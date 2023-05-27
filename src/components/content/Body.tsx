type BodyProps = {
  content: string;
};

export const Body: React.FC<BodyProps> = (props) => {
  return <div className="body">{props.content}</div>;
};
