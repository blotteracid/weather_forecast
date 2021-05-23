import React from "react";
import { WeatherCardContainer, WeatherCardDate, WeatherCardIcon, WeatherCardDeg } from "./ WeatherCard.style";
import icon from "./image.png";

type TProps = {
  isWeek?: boolean;
};

const WeatherCard: React.FC<TProps> = ({ isWeek }) => (
  <WeatherCardContainer>
    <WeatherCardDate>29 sep 2021</WeatherCardDate>
    <WeatherCardIcon src={icon} isWeek={isWeek} />
    <WeatherCardDeg>+17°</WeatherCardDeg>
  </WeatherCardContainer>
);

export default WeatherCard;
