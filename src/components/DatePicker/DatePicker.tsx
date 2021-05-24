import React from "react";
import { DatePickerContainer } from "./DatePicker.style";

type TProps = {
  onChange: (e: string) => void;
};

const DatePicker: React.FC<TProps> = ({ onChange }) => {
  const today = new Date();
  const minday = String(today.getDate() - 5).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return (
    <DatePickerContainer
      type="date"
      max={`${year}-${month}-${day}`}
      min={`${year}-${month}-${minday}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DatePicker;
