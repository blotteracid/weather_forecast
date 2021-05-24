import styled from "styled-components";
import { COLORS } from "../../constants/Colors";
import { BREAKPOINTS } from "../../constants/Breakpoints";
import background from "./background.png";

export const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-image: url(${background});
  background-size: cover;
  background-color: ${COLORS.blue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LayoutLogo = styled.img`
  width: 775px;
  height: auto;
  object-fit: contain;
  margin: 65px auto 60px;

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    width: 420px;
    margin: 32px auto 24px;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 243px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.smallDesktop}px) {
    flex-direction: column;
  }
`;
