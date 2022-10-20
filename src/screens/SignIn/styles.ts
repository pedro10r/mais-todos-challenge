import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(40)}px ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Header = styled.View`
  margin-bottom: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
`;
