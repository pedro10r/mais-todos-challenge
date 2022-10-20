import styled, { css }from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface PropsFocusInput {
  isFocus: boolean;
}

export const Container = styled.View<PropsFocusInput>`
  flex: 1;
  width: 100%;
  justify-content: flex-start;

  ${({ isFocus }) => isFocus && css`
    margin-top: ${RFValue(24)}px;
  `};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  margin-top: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors['gray-300']};
  font-size: ${RFValue(12)}px;
`;