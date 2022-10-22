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
  width: RFValue(280),
  height: RFValue(280),
})<SvgProps>`
  flex: 1;
  align-self: center;
  margin-top: ${RFValue(15)}px;
`;
