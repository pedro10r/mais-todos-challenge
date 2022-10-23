import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface BalanceProps {
  notShowBalance: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(180)}px;
  padding: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Top = styled.View`
  width: 100%;
  margin: ${RFValue(30)}px 0 ${RFValue(36)}px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PowerIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'power',
  color: theme?.colors?.secondary
}))`
  font-size: ${RFValue(22)}px;
`;

export const EyeIcon = styled(Feather).attrs(({ theme }) => ({
  color: theme?.colors?.shape
}))`
  font-size: ${RFValue(22)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const BalanceDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Balance = styled.Text<BalanceProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ notShowBalance }) =>
    notShowBalance ? RFValue(24) : RFValue(36)}px;
`;
