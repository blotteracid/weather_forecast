import React from "react";
import Footer from "../Footer";
import Card from "../Card";
import { LayoutContainer, LayoutLogo, Content } from "./Layout.style";
import logo from "./logo.png";

const Layout: React.FC = () => (
  <LayoutContainer>
    <LayoutLogo src={logo} alt="Weather forecast" />
    <Content>
      <Card title="7 Days Forecast"></Card>
      <Card title="Forecast for a Date in the Past"></Card>
    </Content>
    <Footer />
  </LayoutContainer>
);

export default Layout;
