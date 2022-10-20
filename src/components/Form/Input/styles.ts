import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme?.colors?.gray,
}))`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(16)}px;
`;
