import { FlatList } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { 
  Container,
  Header,
  Title,
  Gutter,
  Content,
  Divider,
  ContentTransaction,
  Icon,
  CenterArea,
  Description,
  Date,
  Value,
  StartArea,
} from "./styles";

export function Transactions() {
  const data = [
    {
      id: 1,
      descricao: "McDonald's",
      dataTransacao: "2022-01-28",
      valorTransacao: 20,
    },
    {
      id: 2,
      descricao: "Rener",
      dataTransacao: "2022-01-13",
      valorTransacao: 20,
    },
    {
      id: 3,
      descricao: "Burguer King",
      dataTransacao: "2022-01-12",
      valorTransacao: 20,
    },
    {
      id: 4,
      descricao: "Americanas",
      dataTransacao: "2022-01-05",
      valorTransacao: 20,
    },
    {
      id: 5,
      descricao: "Big",
      dataTransacao: "2022-01-05",
      valorTransacao: 20,
    },
    {
      id: 6,
      descricao: "Centauro",
      dataTransacao: "2022-01-05",
      valorTransacao: 20,
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Transações</Title>
        <Gutter>Tudo</Gutter>
      </Header>

      <Content>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
          renderItem={({ item }) => (
            <>
              <Divider />
              
              <ContentTransaction>
              <StartArea>
                <Icon />

                <CenterArea>
                  <Description>{item.descricao}</Description>
                  <Date>{item.dataTransacao}</Date>
                </CenterArea>
              </StartArea>

              <Value>R$ {item.valorTransacao}, 00</Value>
            </ContentTransaction>
            </>
          )}
        />
      </Content>
    </Container>
  );
}