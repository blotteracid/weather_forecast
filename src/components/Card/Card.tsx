import React from "react";
import { CardContainer, CardTitle } from "./Card.style";

type TProps = {
  title: string;
  showDate?: boolean;
};

const Card: React.FC<TProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContainer>
  );
};

export default Card;
