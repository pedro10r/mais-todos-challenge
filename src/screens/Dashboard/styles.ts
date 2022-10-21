import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { TransactionDTO } from "../../dtos/transactionDTO";

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
  flex: 1;
  width: 100%;
  padding: ${RFValue(24)}px;
`;

export const TransactionHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(10)}px;;
`;

export const TransactionTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Gutter = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<TransactionDTO>) => FlatList<TransactionDTO>)
.attrs({
  showsVerticalScrollIndicator: false,
})``;