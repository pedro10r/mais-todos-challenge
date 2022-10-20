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
  margin-top: ${RFValue(24)}px;
  padding-top: ${RFValue(5)}px;
  padding-bottom: ${RFValue(18)}px;
  align-items: flex-start;
`;

export const SettingsIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'settings',
  color: theme?.colors?.shape
}))`
  font-size: ${RFValue(24)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-right: ${RFValue(12)}px;
`;

export const EyeIcon = styled(Feather).attrs(({ theme }) => ({
  color: theme?.colors?.shape
}))`
  font-size: ${RFValue(22)}px;
`;

export const BalanceArea = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: ${RFValue(3)}px;
`;

export const BalanceDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Balance = styled.Text<BalanceProps>`
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};

  ${({ notShowBalance }) => notShowBalance && css`
    font-size: ${RFValue(24)}px;
  `}
`;
