import React from "react";
import { Card } from "../components/Card";
import { FilterSection } from "../components/FilterSection";

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <FilterSection
        title="Menu"
        filterOptions={["Tech", "Art", "Movies", "Shows"]}
      ></FilterSection>
      <div className="mainSection">
        <Card
          coverPictureUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/capsule_616x353.jpg?t=1668565264"
          title="Why Titanfall is the best game ever"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/capsule_616x353.jpg?t=1668565264"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/capsule_616x353.jpg?t=1668565264"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="picture"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="picture"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="picture"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="picture"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
        <Card
          coverPictureUrl="picture"
          title="title 1"
          readTime="5 min"
          author="Rahul"
          date="Today"
        ></Card>
      </div>
    </div>
  );
};
