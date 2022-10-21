import { Container, Title, Balance, DescriptionTitle, Total } from './styles';

interface Props {
  type: 'credit' | 'debit';
  title: string;
  value: string;
} 

export function Card({ type, title, value }: Props) {
  return (
    <Container type={type}>
      <Title type={type}>
        {title}
      </Title>
      <Balance>
        <DescriptionTitle type={type}>Valor total</DescriptionTitle>
        <Total type={type}>
          {value}
        </Total>
      </Balance>
    </Container>
  );
}