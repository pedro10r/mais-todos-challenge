import { useNavigation } from '@react-navigation/native';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { Container, Logo } from './styles';

import { Form } from './components/Form';

export function SignIn() {
  const navigation = useNavigation();

  function handleGoDashboard() {
    navigation.navigate('dashboard');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo />
          
          <Form onPress={handleGoDashboard} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
