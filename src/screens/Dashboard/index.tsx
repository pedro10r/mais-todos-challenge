import { Container, Content, Title } from "./styles";

import { Header } from "./components/Header";

export function Dashboard() {

  return (
    <Container>
      <Header />

      <Content>
        <Title>Extrato</Title>
      </Content>
    </Container>
  );
}
