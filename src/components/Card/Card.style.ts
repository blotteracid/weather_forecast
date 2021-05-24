import styled from "styled-components";
import { COLORS } from "../../constants/Colors";
import { BREAKPOINTS } from "../../constants/Breakpoints";

export const CardContainer = styled.div`
  width: 660px;
  height: 524px;
  background-color: ${COLORS.white};
  margin: 0 17px 34px;
  padding: 50px 58px 50px;
  border-radius: 8px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 300px;
    min-height: 464px;
    height: auto;
    padding: 32px 24px 64px;
    overflow-x: hidden;
    margin-bottom: 10px;
  }

`;

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 32px;
  color: ${COLORS.darkBlue};
  margin-bottom: 32px;
  line-height: 32px;
`;

export const CardSelectors = styled.div`
  display: flex;
  margin-bottom: 54px;
`;

export const WeatherCardContainer = styled.div`
  display: flex;
`;
