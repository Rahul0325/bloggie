import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface ContentWrapperProps {
  children: ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
  return (
    <div className="content">
      <Header title="Adventures with Ellie and Ted" />
      {props.children}
      <Footer />
    </div>
  );
};
