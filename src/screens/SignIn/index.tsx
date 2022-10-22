import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { Container, Logo } from './styles';

import { Form } from './components/Form';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(email)
  console.log(password)

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo />
          
          <Form 
            onSignIn={handleSignIn}
            onChangeEmail={setEmail}
            onChangePass={setPassword}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
