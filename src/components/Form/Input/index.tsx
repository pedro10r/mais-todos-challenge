import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Container, InputText, Error } from "./styles";

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
  isError?: boolean;
}

export function Input({ control, name, error, ...rest }: InputProps) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }}) => (
          <InputText
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}