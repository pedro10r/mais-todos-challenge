import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface Props {
  color?: string;
  size?: number | 'small' | 'large';
}

export function Loading({ color, size }: Props) {
  const theme = useTheme();
  
  return (
    <Container>
      <ActivityIndicator color={color ? color : theme.colors.primary} size={size} />
    </Container>
  );
}