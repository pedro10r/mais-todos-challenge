import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';

import LogoSvg from '../../assets/login.svg';

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(40)}px ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled(LogoSvg).attrs({
  width: RFValue(270),
  height: RFValue(270),
})<SvgProps>`
  align-self: center;
`;

export const Header = styled.View`
  margin-bottom: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
`;
