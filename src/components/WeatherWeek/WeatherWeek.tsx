import React, { useEffect, useState } from "react";
import Card from "../Card";
import Select from "../Select";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../WeatherCard";
import {
  WeatherCardsWrapper,
  WeatherCardsArrowLeftWrapper,
  WeatherCardsArrowRightWrapper,
  WeatherCardGrid,
} from "./WeatherWeek.style";
import { ReactComponent as WeatherCardsArrowLeft } from "./chevron.svg";

const STEP = 3;

const WeatherWeek: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState([]);
  const [step, setStep] = useState(0);
  const moreLeft = step >= 1;
  const moreRight = step + STEP < weather.length;

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

  const handleClickLeft = () => {
    if (moreLeft) {
      setStep(step - 1);
    }
  };

  const handleClickRight = () => {
    if (moreRight) {
      setStep(step + 1);
    }
  };

  const handleChange = (city: string) => {
    setCity(city);
  };

  return (
    <Card title="7 Days Forecast">
      <Select onChange={handleChange} />
      {weather.length ? (
        <WeatherCardsWrapper>
          <WeatherCardsArrowLeftWrapper disabled={!moreLeft}>
            <WeatherCardsArrowLeft onClick={handleClickLeft} />
          </WeatherCardsArrowLeftWrapper>
          <WeatherCardGrid>
            {weather.slice(step, STEP + step).map((data) => (
              <WeatherCard isWeek={true} data={data} />
            ))}
          </WeatherCardGrid>
          <WeatherCardsArrowRightWrapper disabled={!moreRight}>
            <WeatherCardsArrowLeft onClick={handleClickRight} />
          </WeatherCardsArrowRightWrapper>
        </WeatherCardsWrapper>
      ) : (
        <EmptyPlaceholder />
      )}
    </Card>
  );
};

export default WeatherWeek;
