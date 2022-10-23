import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup
    .string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: Yup
    .string()
    .required('A senha é obrigatório')
})