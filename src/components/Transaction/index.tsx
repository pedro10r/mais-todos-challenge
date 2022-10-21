import {
  CenterArea,
  Container,
  ContentTransaction,
  Date,
  Description,
  Divider,
  Icon,
  StartArea,
  Value
} from './style';

interface TransactionsData {
  descricao: string;
  dataTransacao: string;
  valorTransacao: number;
}

interface Props {
  data: TransactionsData;
}

export function Transaction ({ data }: Props) {
  return (
    <Container>
      <Divider />
      
      <ContentTransaction>
      <StartArea>
        <Icon />

        <CenterArea>
          <Description>{data.descricao}</Description>
          <Date>{data.dataTransacao}</Date>
        </CenterArea>
      </StartArea>

      <Value>R$ {data.valorTransacao}, 00</Value>
    </ContentTransaction>
    </Container>
  );
}
