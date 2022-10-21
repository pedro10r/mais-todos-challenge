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
  TransactionList,
  Divider
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
  const [creditCardBalance, setCreditCardBalance] = useState<number>(0);
  const [debitCardBalance, setDebitCardBalance] = useState<number>(0);

  useEffect(() => {
    async function fetchTotalBalance() {
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
    fetchTotalBalance();
  }, []);

  useEffect(() => {
    sumBalance();
  }, [transactions]);

  function sumBalance() {
    if (transactions) {
      const typeCredit = transactions.filter(prevState => prevState.tipoLancamento === 'C');
      const balancesCredit = typeCredit.map(element => element.valorTransacao);
      var resultCredit = balancesCredit.reduce(function(sum, i) {
          return sum + i;
      }, 0);

      const typeDebit = transactions.filter(prevState => prevState.tipoLancamento === 'D');
      const balancesDebit = typeDebit.map(element => element.valorTransacao);
      var resultDebit = balancesDebit.reduce(function(sum, i) {
          return sum + i;
      }, 0);

      setCreditCardBalance(resultCredit);
      setDebitCardBalance(resultDebit);
    }
  }

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
          value={`R$ ${creditCardBalance},00`}
        />
        <Card
          type='debit'
          title='Cartão de débito'
          value={`R$ ${debitCardBalance},00`}
        />

        <TransactionHeader>
          <TransactionTitle>Transações</TransactionTitle>
          <Gutter>Valor</Gutter>
        </TransactionHeader>

        <Divider />

        {loading ? <Loading /> :
          <TransactionList
            data={transactions}
            keyExtractor={item => String(item.id) + uuid.v4()}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) =>
              <Transaction data={item} />
            }
          />
        }
      </Content>
      
    </Container>
  );
}
