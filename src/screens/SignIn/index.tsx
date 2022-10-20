import { Container, Form, Header, Title } from './styles';

import LogoSvg from '../../assets/login.svg';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function SignIn() {
  return (
    <Container>
      <LogoSvg style={{ alignSelf: 'center' }} width={300} height={300} />

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
