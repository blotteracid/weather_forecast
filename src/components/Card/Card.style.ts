import styled from "styled-components";

export const CardContainer = styled.div`
  width: 660px;
  height: 524px;
  background-color: #ffffff;
  margin: 0 17px 0;
  padding: 50px 58px 50px;
  border-radius: 8px;
`;

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #2c2d76;
  margin-bottom: 32px;
`;

export const CardSelectors = styled.div`
  display: flex;
  margin-bottom: 54px;
`;

export const WeatherCardContainer = styled.div`
  display: flex;
`;

export const CardWrapperEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const CardIconEmpty = styled.img`
  margin-bottom: 24px;
  width: 160px;
  height: 160px;
  object-fit: contain;
`;

export const CardTextEmpty = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #8083a4;
`;
