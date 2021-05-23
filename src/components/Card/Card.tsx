import React, { Children, useEffect, useState } from "react";
import { CardContainer, CardTitle, CardSelectors, WeatherCardContainer } from "./Card.style";

type TProps = {
  title: string;
  showDate?: boolean;
};

const Card: React.FC<TProps> = ({ title, children, showDate }) => {
  //   const [city, setCity] = useState(null);
  //   const [date, setDate] = useState(null);
  //   const [weather, setWeater] = useState(null);

  //   useEffect(() => {
  //     if (city && date) {
  //       // Store.getWeher(city, date).then((res) => {
  //         setWeater(res)
  //       })
  //     }
  //   }, [city]);

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {children}
      {/* Soter.weaterWeek ? (pogoda) : (empty) */}
    </CardContainer>
  );
};

export default Card;
