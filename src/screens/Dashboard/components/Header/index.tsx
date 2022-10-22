import { useState } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { Loading } from '../../../../components/Loading';

import {
  Container,
  Top,
  SettingsIcon,
  Content,
  Balance,
  BalanceDescription,
  Button,
  EyeIcon,
  BalanceArea
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
          <SettingsIcon />
        </Button>
      </Top>

      <Content>
        <BalanceArea>
          <Button onPress={() => setShowBalance(!showBalance)}>
            <EyeIcon name={showBalance ? 'eye-off' : 'eye'} />
          </Button>

          <BalanceDescription>Saldo total</BalanceDescription>
        </BalanceArea>

        {showBalance 
          ? <Balance>{ !loading ? `R$ ${balance},00` : <Loading color={theme.colors.white} />}</Balance>
          : <Balance notShowBalance>••••••</Balance>
        }
      </Content>
    </Container>
  );
}