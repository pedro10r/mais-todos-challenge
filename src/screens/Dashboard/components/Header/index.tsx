import { StatusBar } from 'react-native';
import { Container, Top, Icon, Bottom, Balance, BalanceDescription } from './styles';

export function Header() {
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      <Top>
        <Icon />
      </Top>

      <Bottom>
        <Balance>25,400</Balance>
        <BalanceDescription>Saldo total</BalanceDescription>
      </Bottom>
    </Container>
  );
}