import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'credit' | 'debit';
}

export const Container = styled.View<TypeProps>`
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === 'credit' ? theme.colors.secondary : theme.colors.white
  };
  padding: ${RFValue(22)}px;
  border-radius: ${RFValue(18)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(14)}px;

  box-shadow: 0px 3px 10px ${({ theme, type }) =>
    type === 'credit' ? theme.colors.secondaryLight : theme.colors.primaryLight
  };

${({ type }) => type === 'debit' && css`
    border: 1px;
    border-color: ${({ theme }) => theme.colors.primaryLight};
  `}
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, type }) =>
    type === 'credit' ? theme.colors.shape : theme.colors.primary
  };
`;

export const Balance = styled.View`
  align-items: flex-end;
`;

export const DescriptionTitle = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(3)}px;
  color: ${({ theme, type }) =>
    type === 'credit' ? theme.colors.shape : theme.colors.primary
  };
`;

export const Total = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, type }) =>
    type === 'credit' ? theme.colors.white : theme.colors.primary
  };
`;
