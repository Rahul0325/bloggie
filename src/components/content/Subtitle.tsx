type SubtitleProps = {
  author: string;
  date: string;
};

export const Subtitle: React.FC<SubtitleProps> = (props) => {
  return (
    <div className="subtitle">
      {props.author}
      <br />
      {props.date}
      <br />
      <br />
      <div className="divider"></div>
    </div>
  );
};
