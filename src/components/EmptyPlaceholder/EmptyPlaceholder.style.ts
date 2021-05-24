import styled from "styled-components";
import { COLORS } from "../../constants/Colors";

export const EmptyPlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyPlaceholderIcon = styled.img`
  margin-bottom: 24px;
  width: 160px;
  height: 160px;
  object-fit: contain;
`;

export const EmptyPlaceholderText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: ${COLORS.grey};
  text-align: center;
`;
