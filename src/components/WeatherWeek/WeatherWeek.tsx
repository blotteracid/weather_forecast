import React, { useEffect, useState } from "react";
import Card from "../Card";
import Select from "../Select";
import EmptyPlaceholder from "../EmptyPlaceholder";
import WeatherCard from "../WeatherCard";
import { BREAKPOINTS } from "../../constants/Breakpoints";
import { WeatherCardsWrapper, WeatherCardsArrowWrapper, WeatherCardGrid } from "./WeatherWeek.style";
import { ReactComponent as WeatherCardsArrowLeft } from "./chevron.svg";

const STEP = 3;

const WeatherWeek: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState([]);
  const [step, setStep] = useState(0);
  const moreLeft = step >= 1;
  const moreRight = step + STEP < weather.length;
  const screenWidth = window.screen.width;

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

  let weatherArr = screenWidth <= BREAKPOINTS.mobile ? weather : weather.slice(step, STEP + step);

  return (
    <Card title="7 Days Forecast">
      <Select onChange={handleChange} />
      {weather.length ? (
        <WeatherCardsWrapper>
          <WeatherCardsArrowWrapper disabled={!moreLeft} sideLeft={true}>
            <WeatherCardsArrowLeft onClick={handleClickLeft} />
          </WeatherCardsArrowWrapper>
          <WeatherCardGrid>
            {weatherArr.map((data) => (
              <WeatherCard isWeek={true} data={data} />
            ))}
          </WeatherCardGrid>
          <WeatherCardsArrowWrapper disabled={!moreRight}>
            <WeatherCardsArrowLeft onClick={handleClickRight} />
          </WeatherCardsArrowWrapper>
        </WeatherCardsWrapper>
      ) : (
        <EmptyPlaceholder />
      )}
    </Card>
  );
};

export default WeatherWeek;
