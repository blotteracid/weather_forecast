import styled from "styled-components";

export const WeatherDaySelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 24px;
  }
`;
