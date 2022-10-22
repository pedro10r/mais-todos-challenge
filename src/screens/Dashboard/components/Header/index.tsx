import { useState } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { Loading } from '../../../../components/Loading';

import {
  Container,
  Top,
  PowerIcon,
  Content,
  Balance,
  BalanceDescription,
  Button,
  EyeIcon,
} from './styles';

interface Props {
  balance: number;
  loading: boolean;
  signOut: () => void;
}

export function Header({ balance, loading, signOut }: Props) {
  const [showBalance, setShowBalance] = useState(false);
  const theme = useTheme()

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      <Top>
        <Button onPress={signOut}>
          <PowerIcon />
        </Button>

        <Button onPress={() => setShowBalance(!showBalance)}>
          <EyeIcon name={showBalance ? 'eye-off' : 'eye'} />
        </Button>
      </Top>

      <Content>
        <BalanceDescription>Saldo total</BalanceDescription>

        {showBalance 
          ? <Balance>{ !loading ? `R$ ${balance},00` : <Loading color={theme.colors.white} />}</Balance>
          : <Balance notShowBalance>••••••</Balance>
        }
      </Content>
    </Container>
  );
}