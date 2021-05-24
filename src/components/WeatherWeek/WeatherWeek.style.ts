import styled from "styled-components";

export const WeatherCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 30px;
`;

export const WeatherCardsArrowLeftWrapper = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: -28px;

  svg > path {
    stroke: ${(props) => (props.disabled ? "rgba(128, 131, 164, 0.4)" : "rgba(128, 131, 164, 1)")};
  }
`;

export const WeatherCardsArrowRightWrapper = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  right: -28px;
  transform: rotate(180deg);
  
  svg > path {
    stroke: ${(props) => (props.disabled ? "rgba(128, 131, 164, 0.4)" : "rgba(128, 131, 164, 1)")};
  }
`;

export const WeatherCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
`;
