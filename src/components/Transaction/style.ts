import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View``;

export const Divider = styled.View`
  height: ${RFValue(1)}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const ContentTransaction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(16)}px 0;
`;

export const Icon = styled(Feather).attrs({
  name: 'pie-chart',
})`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondaryLight};
  margin-right: ${RFValue(24)}px;
`;

export const CenterArea = styled.View`
`;

export const StartArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors['gray-400']};
  line-height: ${RFValue(18)}px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Value = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['gray-400']};
`;
