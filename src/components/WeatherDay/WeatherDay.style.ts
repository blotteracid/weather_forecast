import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/Breakpoints";

export const WeatherDaySelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: column;
    margin-bottom: 24px;
  }
`;
