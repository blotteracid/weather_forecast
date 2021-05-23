import React from "react";
import Footer from "../Footer";
import WeatherDay from "../WeatherDay";
import WeatherWeek from "../WeatherWeek";
import { LayoutContainer, LayoutLogo, Content } from "./Layout.style";
import logo from "./logo.png";

const Layout: React.FC = () => (
  <LayoutContainer>
    <LayoutLogo src={logo} alt="Weather forecast" />
    <Content>
      <WeatherWeek />
      <WeatherDay />
    </Content>
    <Footer />
  </LayoutContainer>
);

export default Layout;
