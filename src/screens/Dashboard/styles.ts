import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const AreaTitle = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;


export const Content = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
`;
