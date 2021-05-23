import React from "react";
import { SelectContainer, SelectOption } from "./Select.style";

const Selector: React.FC = () => {
  return (
    <SelectContainer name="city" id="city-select">
      <SelectOption value="" disabled selected>
        Select city
      </SelectOption>
      <SelectOption value="Samara">Samara</SelectOption>
      <SelectOption value="Tlt">Tlt</SelectOption>
      <SelectOption value="Saratov">Saratov</SelectOption>
      <SelectOption value="Kazan">Kazan</SelectOption>
      <SelectOption value="Krasnodar">Krasnodar</SelectOption>
    </SelectContainer>
  );
};

export default Selector;
