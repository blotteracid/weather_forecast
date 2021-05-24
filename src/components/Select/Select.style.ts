import styled from "styled-components";
import { COLORS } from "../../constants/Colors"

export const SelectContainer = styled.select`
  height: 48px;
  width: 252px;
  padding: 0 16px;
  margin-bottom: 24px;
  background-color: rgba(128, 131, 164, 0.06);
  border-radius: 8px;
  border: 2px solid rgba(128, 131, 164, 0.2);
  color: ${COLORS.darkBlue};
`;

export const SelectOption = styled.option``;
