import React from "react";
import { EmptyPlaceholderWrapper, EmptyPlaceholderIcon, EmptyPlaceholderText } from "./EmptyPlaceholder.style";
import icon from "./icon_empty.png";

const EmptyPlaceholder: React.FC = () => (
  <EmptyPlaceholderWrapper>
    <EmptyPlaceholderIcon src={icon} alt="icon empty" />
    <EmptyPlaceholderText>Fill in all the fields and the weather will be displayed</EmptyPlaceholderText>
  </EmptyPlaceholderWrapper>
);

export default EmptyPlaceholder;
