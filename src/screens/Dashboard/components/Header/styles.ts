import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(180)}px;
  padding: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Top = styled.View`
  width: 100%;
  margin-top: ${RFValue(24)}px;
  padding-top: ${RFValue(5)}px;
  padding-bottom: ${RFValue(24)}px;
  align-items: flex-end;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'settings',
  color: theme?.colors?.shape
}))`
  font-size: ${RFValue(24)}px;
`;

export const Bottom = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Balance = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const BalanceDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;


