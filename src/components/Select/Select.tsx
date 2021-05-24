import React from "react";
import { SelectContainer, SelectOption } from "./Select.style";

type TProps = {
  onChange: (city: string) => void;
};

const Selector: React.FC<TProps> = ({ onChange }) => (
  <SelectContainer name="city" defaultValue="" id="city-select" onChange={(e) => onChange(e.target.value)}>
    <SelectOption value="" disabled>
      Select city
    </SelectOption>
    <SelectOption value="53.195873, 50.100193">Samara</SelectOption>
    <SelectOption value="53.507836, 49.420393">Tolyatti</SelectOption>
    <SelectOption value="51.533557, 46.034257">Saratov</SelectOption>
    <SelectOption value="55.796127, 49.106405">Kazan</SelectOption>
    <SelectOption value="45.035470, 38.975313">Krasnodar</SelectOption>
  </SelectContainer>
);

export default Selector;
