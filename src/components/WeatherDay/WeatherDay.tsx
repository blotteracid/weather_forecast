import React from "react";
import Card from "../Card";
import Select from "../Select";
import DatePicker from "../DatePicker";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../ WeatherCard";
import { WeatherDaySelectWrapper } from "./WeatherDay.style";

const WeatherDay: React.FC = () => (
  <Card title="Forecast for a Date in the Past">
    <WeatherDaySelectWrapper>
      <Select />
      <DatePicker />
    </WeatherDaySelectWrapper>

    <WeatherCard />
    {/* <EmptyPlaceholder /> */}
  </Card>
);

export default WeatherDay;
