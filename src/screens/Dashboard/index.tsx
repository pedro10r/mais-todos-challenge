import { useEffect, useState } from "react";
import uuid from 'react-native-uuid';

import {
  Container,
  AreaTitle,
  Title,
  Content,
  TransactionHeader,
  TransactionTitle,
  Gutter,
  TransactionList
} from "./styles";

import api from "../../services/api";

import { Header } from "./components/Header";
import { Card } from "../../components/Card";
import { Transaction } from "../../components/Transaction";
import { Loading } from "../../components/Loading";

import { TransactionDTO } from "../../dtos/transactionDTO";
import { BalanceDTO } from "../../dtos/balanceDTO";

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [balance, setBalance] = useState<BalanceDTO>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBalanceTotal() {
      try {
        const response = await api.get('/balance');
        setBalance(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchTransactions() {
      try {
        const response = await api.get('/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
    fetchBalanceTotal();
  }, []);

  return (
    <Container>
      <Header
        balance={balance?.saldo as number}
        loading={loading}
      />

      <AreaTitle>
        <Title>Extrato</Title>
      </AreaTitle>

      <Content>
        <Card
          type='credit'
          title='Cartão de crédito'
          value='R$ 120,00'
        />
        <Card
          type='debit'
          title='Cartão de débito'
          value='R$ 80,00'
        />

        <TransactionHeader>
          <TransactionTitle>Transações</TransactionTitle>
          <Gutter>Valor</Gutter>
        </TransactionHeader>

        {loading ? <Loading /> :
          <TransactionList
            data={transactions}
            keyExtractor={item => String(item.id) + uuid.v4()}
            renderItem={({ item }) =>
              <Transaction data={item} />
            }
          />
        }
      </Content>
      
    </Container>
  );
}
