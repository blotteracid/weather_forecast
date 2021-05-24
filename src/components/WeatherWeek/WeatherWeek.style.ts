import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/Breakpoints";

export const WeatherCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 30px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    margin: 0 -20px;
  }
`;

export const WeatherCardsArrowWrapper = styled.div<{ sideLeft?: boolean; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.sideLeft ? "-28px" : "auto")};
  right: ${(props) => (props.sideLeft ? "auto" : "-28px")};
  transform: ${(props) => (props.sideLeft ? "none˝" : "rotate(180deg)")};
  svg > path {
    stroke: ${(props) => (props.disabled ? "rgba(128, 131, 164, 0.4)" : "rgba(128, 131, 164, 1)")};
    fill: ${(props) => (props.disabled ? "rgba(128, 131, 164, 0.4)" : "rgba(128, 131, 164, 1)")};
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`;

export const WeatherCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 20px 30px;
    overflow-x: auto;
  }
`;

export const WeatherWeekActions = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    margin-bottom: 0;
  }
`;
