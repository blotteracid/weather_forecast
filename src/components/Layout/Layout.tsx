import React from "react";
import Footer from "../Footer";
import { LayoutContainer, LayoutLogo, Content } from "./Layout.style";
import logo from "./logo.png";

const Layout: React.FC = () => (
  <LayoutContainer>
    <LayoutLogo src={logo} alt="Weather forecast" />
    <Content>1 2</Content>
    <Footer />
  </LayoutContainer>
);

export default Layout;
