import React from "react";
import { WeatherCardContainer, WeatherCardDate, WeatherCardIcon, WeatherCardDeg } from "./WeatherCard.style";
import icon from "./image.png";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type TProps = {
  isWeek?: boolean;
  [data: string]: any;
};

const WeatherCard: React.FC<TProps> = ({ isWeek, data }) => {
  const date = new Date(data.dt * 1000);

  const dateMetrix = date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear();

  return (
    <WeatherCardContainer>
      <WeatherCardDate>{dateMetrix}</WeatherCardDate>
      <WeatherCardIcon src={icon} isWeek={isWeek} />
      <WeatherCardDeg>{Math.round(data.temp.day || data.temp)}°</WeatherCardDeg>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
