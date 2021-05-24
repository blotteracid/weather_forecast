import React, { useState, useEffect } from "react";
import Card from "../Card";
import Select from "../Select";
import DatePicker from "../DatePicker";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../WeatherCard";
import { WeatherDaySelectWrapper } from "./WeatherDay.style";

const WeatherDay: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city && time) {
      const [lat, lon] = city.split(",");

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat.trim()}&lon=${lon.trim()}&units=metric&dt=${time}&appid=b8cd2ec6c2ebdc9dcde7792dd120d62b`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data.current);
        });
    }
  }, [city, time]);

  const handleChangeDate = (time: string) => {
    const timestamp = new Date(time.split("-").join(".")).getTime() / 1000; // Convert milliseconds into unix timestamp

    setTime(timestamp);
  };

  const handleChange = (city: string) => setCity(city);

  return (
    <Card title="Forecast for a Date in the Past">
      <WeatherDaySelectWrapper>
        <Select onChange={handleChange} />
        <DatePicker onChange={handleChangeDate} />
      </WeatherDaySelectWrapper>
      {weather ? <WeatherCard data={weather} /> : <EmptyPlaceholder />}
    </Card>
  );
};

export default WeatherDay;
