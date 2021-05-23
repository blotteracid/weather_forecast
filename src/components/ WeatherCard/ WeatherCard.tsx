import React from "react";
import { WeatherCardContainer, WeatherCardDate, WeatherCardIcon, WeatherCardDeg } from "./ WeatherCard.style";
import icon from "./image.png";

const WeatherCard: React.FC = () => (
  <WeatherCardContainer>
    <WeatherCardDate>29 sep 2021</WeatherCardDate>
    <WeatherCardIcon src={icon} />
    <WeatherCardDeg>+17°</WeatherCardDeg>
  </WeatherCardContainer>
);

export default WeatherCard;
