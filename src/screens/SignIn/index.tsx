import { Container, Title } from "./styles";

import LogoSvg from '../../assets/login.svg';

export function SignIn() {
  return (
    <Container>
      <LogoSvg width={300} height={300} />
      <Title>SignIn</Title>
    </Container>
  );
}
