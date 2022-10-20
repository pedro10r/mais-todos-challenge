import { TextInputProps } from "react-native";

import { Container, InputText } from "./styles";

interface InputProps extends TextInputProps {
  placeholder: string;
  value?: string;
  onChangeText: () => void;
}

export function Input({ placeholder, value, onChangeText, ...rest }: InputProps) {
  return (
    <Container>
      <InputText
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
}