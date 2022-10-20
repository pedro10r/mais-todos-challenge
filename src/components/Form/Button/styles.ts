import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(10)}px;
  border-radius: 12px;
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
