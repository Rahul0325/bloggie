import {
  Body,
  ContentWrapper,
  CoverPicture,
  Title,
} from "../../components/content";
import "../../index.css";

export const Content = () => {
  return (
    <ContentWrapper>
      <CoverPicture pictureUrl="https://i.pinimg.com/474x/30/5c/5a/305c5a457807ba421ed67495c93198d3--cover-pics-cover-art.jpg" />
      <Title title="Blog Entry 1: A fun time in Cologne" />
      <Body content="This is my first blog post. I loved it in Cologne. It was a pretty city. And the nature trail we did on the first day was fabulous! :)" />
    </ContentWrapper>
  );
};
