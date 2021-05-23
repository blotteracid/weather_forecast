import React from "react";
import Select from "../Select";
import WeatherCard from "../ WeatherCard";
import {
  CardContainer,
  CardTitle,
  CardSelectors,
  WeatherCardContainer,
  CardWrapperEmpty,
  CardIconEmpty,
  CardTextEmpty,
} from "./Card.style";
import icon from "./icon_empty.png";

type TProps = {
  title: string;
};

const Card: React.FC<TProps> = ({ title }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardSelectors>
        <Select />
        <div>1111</div>
      </CardSelectors>
			{/* TODO: */}
      {/* <WeatherCardContainer>
        <WeatherCard />
      </WeatherCardContainer> */}
      <CardWrapperEmpty>
        <CardIconEmpty src={icon} alt="icon empty"></CardIconEmpty>
        <CardTextEmpty>Fill in all the fields and the weather will be displayed</CardTextEmpty>
      </CardWrapperEmpty>
    </CardContainer>
  );
};

export default Card;
