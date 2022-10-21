import { Container, AreaTitle, Title, Content } from "./styles";

import { Header } from "./components/Header";
import { Card } from "../../components/Card";

export function Dashboard() {

  return (
    <Container>
      <Header />

      <AreaTitle>
        <Title>Extrato</Title>
      </AreaTitle>

      <Content>
        <Card
          type='credit'
          title='Cartão de crédito'
          value='R$ 120,00'
        />
        <Card
          type='debit'
          title='Cartão de débito'
          value='R$ 80,00'
        />
      </Content>
      
    </Container>
  );
}
