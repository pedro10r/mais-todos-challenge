import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Top, SettingsIcon, Content, Balance, BalanceDescription, Button, EyeIcon, BalanceArea } from './styles';

export function Header() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      <Top>
        <Button>
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
          ? <Balance>R$ 25,00</Balance>
          : <Balance notShowBalance>••••••</Balance>
        }
      </Content>
    </Container>
  );
}