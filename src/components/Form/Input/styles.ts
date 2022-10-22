import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isError: boolean;
}

export const Container = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const InputText = styled.TextInput<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ isError }) =>
    isError &&
    css`
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.danger};
    `
  }
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.danger};
  margin: 7px;
`;