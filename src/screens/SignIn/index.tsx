import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { Container, Logo } from './styles';

import { Form } from './components/Form';

export function SignIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo />
          
          <Form />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
