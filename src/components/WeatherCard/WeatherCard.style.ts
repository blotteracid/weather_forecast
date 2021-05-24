import styled from "styled-components";
import { COLORS } from "../../constants/Colors";
import { BREAKPOINTS } from "../../constants/Breakpoints";

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 238px;
  padding: 20px;
  background-color: ${COLORS.blue};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25), 14px 14px 20px rgba(5, 6, 114, 0.2);

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    border: 2px solid ${COLORS.darkBlue};
  }
`;

export const WeatherCardDate = styled.div`
  color: ${COLORS.white};
  font-size: 16px;
  align-self: flex-start;
`;

export const WeatherCardIcon = styled.img<{ isWeek?: boolean }>`
  width: ${(props) => (props.isWeek ? "103px" : "143px")};
  object-fit: contain;
  align-self: center;
`;

export const WeatherCardDeg = styled.div`
  color: ${COLORS.white};
  font-size: 32px;
  align-self: flex-end;
`;
