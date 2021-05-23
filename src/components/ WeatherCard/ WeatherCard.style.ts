import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 238px;
  padding: 20px;
  margin: 54px 10px 0;
  background-color: #373af5;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25), 14px 14px 20px rgba(5, 6, 114, 0.2);
`;

export const WeatherCardDate = styled.div`
  color: #ffffff;
  font-size: 16px;
  align-self: flex-start;
`;

export const WeatherCardIcon = styled.img<{ isWeek?: boolean }>`
  width: ${(props) => (props.isWeek ? "103px" : "143px")};
  object-fit: contain;
  align-self: center;
`;

export const WeatherCardDeg = styled.div`
  color: #ffffff;
  font-size: 32px;
  align-self: flex-end;
`;
