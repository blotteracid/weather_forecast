import React, { useEffect, useState } from "react";
import Card from "../Card";
import Select from "../Select";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../WeatherCard";
import { CardWeatherCardWrapper } from "./WeatherWeek.style";

const WeatherWeek: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (city) {
      const [lat, lon] = city.split(",");

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat.trim()}&lon=${lon.trim()}&units=metric&appid=b8cd2ec6c2ebdc9dcde7792dd120d62b`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data.daily);
        });
    }
  }, [city]);



  const handleChange = (city: string) => {
    setCity(city);
  };

  return (
    <Card title="7 Days Forecast">
      <Select onChange={handleChange} />
      {weather.length ? (
        <CardWeatherCardWrapper>
          {weather.map((data) => (
            <WeatherCard isWeek={true} data={data} />
          ))}
        </CardWeatherCardWrapper>
      ) : (
        <EmptyPlaceholder />
      )}
    </Card>
  );
};

export default WeatherWeek;
