import { Container, Form, Header, Logo, Title } from './styles';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function SignIn() {
  return (
    <Container>
      <Logo />

      <Header>
        <Title>Bem vindo de volta!</Title>
      </Header>

      <Form>
        <Input
          placeholder='Usuário'
          onChangeText={() => {}}
        />
        <Input
          placeholder='Senha'
          onChangeText={() => {}}
        />

        <Button
          title='Entrar'
          onPress={() => {}}
        />
      </Form>
    </Container>
  );
}
