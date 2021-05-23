import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 238px;
  padding: 20px;
  background-color: #373af5;
  border-radius: 8px;
`;

export const WeatherCardDate = styled.div`
  color: #ffffff;
  font-size: 16px;
  align-self: flex-start;
`;

export const WeatherCardIcon = styled.img`
  max-width: 143px;
  object-fit: contain;
  align-self: center;
`;

export const WeatherCardDeg = styled.div`
  color: #ffffff;
  font-size: 32px;
  align-self: flex-end;
`;
