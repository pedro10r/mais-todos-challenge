import { useState } from 'react';

import { Container, Footer, Description } from './styles';

import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Form/Button';

interface FormProps {
  onSignIn: () => void;
  onChangeEmail: (text: string) => void;
  onChangePass: (text: string) => void;
}

export function Form({ onSignIn, onChangeEmail, onChangePass }: FormProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container isFocus={isFocus}>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder='Usuário'
        onChangeText={onChangeEmail}
        autoCorrect={false}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder='Senha'
        onChangeText={onChangePass}
        autoCorrect={false}
        secureTextEntry
      />

      <Button
        title='Entrar'
        onPress={onSignIn}
      />

      <Footer>
        <Description>Faça seu Login</Description>
      </Footer>
    </Container>
  );
}
