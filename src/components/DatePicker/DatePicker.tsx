import React from "react";
import { DatePickerContainer } from "./DatePicker.style";

type TProps = {
  onChange: (e: any) => void;
};

const DatePicker: React.FC<TProps> = ({ onChange }) => (
  <DatePickerContainer type="date" onChange={(e) => onChange(e.target.value)} />
);

export default DatePicker;
