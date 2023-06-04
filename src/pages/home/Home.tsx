import React from "react";
import { Article } from "../../models/home";
import { FilterSection, Section } from "../../components/home";

const articles: Article[] = [
  {
    id: 1,
    Title: "Why Tianfall is the best game",
    Author: "Rahul",
    coverImageUrl: "https://images3.alphacoders.com/751/thumb-1920-751195.jpg",
    readTime: 5,
    date: "today",
  },
  {
    id: 1,
    Title: "Why Tianfall is the best game",
    Author: "Rahul",
    coverImageUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/0613/DofWaSgGffRBByLa8OvYgYFG.png",
    readTime: 5,
    date: "today",
  },
  {
    id: 1,
    Title: "Why Tianfall is the best game",
    Author: "Rahul",
    coverImageUrl:
      "https://media.wired.com/photos/5926a8c27034dc5f91bec361/master/w_2560%2Cc_limit/Titanfall_TA.jpg",
    readTime: 5,
    date: "today",
  },
  {
    id: 1,
    Title: "Why Tianfall is the best game",
    Author: "Rahul",
    coverImageUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/0613/DofWaSgGffRBByLa8OvYgYFG.png",
    readTime: 5,
    date: "today",
  },
];

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <FilterSection
        title="Menu"
        filterOptions={["Tech", "Art", "Movies", "Shows"]}
      />
      <div className="mainContent">
        <Section title="Latest in Tech" articles={articles} />
        <Section title="Latest in Movies" articles={articles} />
      </div>
    </div>
  );
};
