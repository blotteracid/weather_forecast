import React from "react";
import Card from "../Card";
import Select from "../Select";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../ WeatherCard";
import { CardWeatherCardWrapper } from "./WeatherWeek.style";

const WeatherWeek: React.FC = () => (
  <Card title="7 Days Forecast">
    <Select />
    <CardWeatherCardWrapper>
      <WeatherCard isWeek={true} />
      <WeatherCard isWeek={true} />
      <WeatherCard isWeek={true} />
    </CardWeatherCardWrapper>

    {/* <EmptyPlaceholder /> */}
  </Card>
);

export default WeatherWeek;
