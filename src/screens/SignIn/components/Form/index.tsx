import { useState } from 'react';

import { Container, Footer, Description } from './styles';

import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Form/Button';

interface FormProps {
  onPress: () => void;
}

export function Form({ onPress }: FormProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container isFocus={isFocus}>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder='Usuário'
        onChangeText={() => {}}
        autoCorrect={false}
      />
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder='Senha'
        onChangeText={() => {}}
        autoCorrect={false}
      />

      <Button
        title='Entrar'
        onPress={onPress}
      />

      <Footer>
        <Description>Faça seu Login</Description>
      </Footer>
    </Container>
  );
}
