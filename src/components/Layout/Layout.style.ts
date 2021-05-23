import styled from "styled-components";
import background from "./background.png";

export const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-image: url(${background});
  background-size: cover;
  background-color: #373af5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LayoutLogo = styled.img`
  width: 775px;
  height: 212px;
  object-fit: contain;
  margin: 65px auto 60px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
