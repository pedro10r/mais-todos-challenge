import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Footer, Description } from './styles';

import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Form/Button';

import { useAuth } from '../../../../hooks/auth';

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required('E-mail é obrigatário'),
  password: Yup
    .string()
    .required('Senha é obrigatário')
})

export function Form() {
  const [isFocus, setIsFocus] = useState(false);
  const { signIn } = useAuth();

  const handleSignIn = useCallback(({ email, password }: FormData) => {
    signIn(email, password);
    clearErrors();
  }, []);

  const { 
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const formControll = control as unknown as Control<FieldValues, any>;

  return (
    <Container isFocus={isFocus}>
      <Input
        name='email'
        control={formControll}
        placeholder='E-mail'
        error={errors.email && errors?.email.message}
        isError={!!errors.email}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoCorrect={false}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <Input
        name='password'
        control={formControll}
        placeholder='Senha'
        error={errors.password && errors?.password.message}
        isError={!!errors.email}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoCorrect={false}
        secureTextEntry
      />

      <Button
        title='Entrar'
        onPress={handleSubmit(handleSignIn)}
      />

      <Footer>
        <Description>Faça seu Login</Description>
      </Footer>
    </Container>
  );
}
