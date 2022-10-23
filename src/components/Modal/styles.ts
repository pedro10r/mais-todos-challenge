import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type: 'confirm' | 'cancel';
}

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<Props>`
  padding: ${RFValue(12)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(18)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme, type }) =>
    type === 'confirm' ? theme.colors.primaryLight : theme.colors.secondaryLight};
  border-radius: 12px;
`;

export const TextButton = styled.Text<Props>`
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === 'confirm' ? theme.colors.primary : theme.colors.secondary};
`;