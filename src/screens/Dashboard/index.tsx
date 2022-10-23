import { useEffect, useState } from "react";
import { useQuery } from 'react-query';
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
import { ConfirmModal } from "../../components/Modal";

import { TransactionDTO } from "../../dtos/transactionDTO";
import { BalanceDTO } from "../../dtos/balanceDTO";

import { useAuth } from "../../hooks/auth";

export function Dashboard() {
  const [creditCardBalance, setCreditCardBalance] = useState<number>(0);
  const [debitCardBalance, setDebitCardBalance] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);

  const { signOut } = useAuth();

  async function fetchTransactions() {
    const { data } = await api.get('/transactions');
    return data as TransactionDTO[];
  }

  async function fetchTotalBalance() {
    const { data } = await api.get('/balance');
    return data as BalanceDTO;
  }

  const { data: transactions, isLoading: loadingTransactions } = useQuery('transactions', fetchTransactions);
  const { data: balance, isLoading: loadingBalance } = useQuery('balance', fetchTotalBalance);

  function sumBalance(typeCard: 'C' | 'D') {
    if (transactions) {
      const type = transactions.filter(element => element.tipoLancamento === typeCard);
      const balance = type.map(element => element.valorTransacao);

      var result = balance.reduce(function(sum, i) {
          return sum + i;
      }, 0);

      switch (typeCard) {
        case 'C':
          return setCreditCardBalance(result);
        case 'D':
          return setDebitCardBalance(result);
        default:
          return null;
      }
    }
  }

  useEffect(() => {
    sumBalance('C');
    sumBalance('D');
  }, [transactions]);

  function handleSignOut() {
    setOpenModal(false);
    setTimeout(() => {
      signOut();
    }, 1000);
  }

  return (
    <Container>
      <Header
        balance={balance?.saldo as number}
        loading={loadingBalance}
        signOut={() => setOpenModal(true)}
      />

      {openModal && (
        <ConfirmModal
          title='Sair do app?'
          closeText='Cancelar'
          confirmText='Sim'
          onClose={() => setOpenModal(false)}
          onConfirm={handleSignOut}
        />
      )}

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

        {loadingTransactions ? <Loading /> :
          <TransactionList
            data={transactions}
            keyExtractor={item => String(item.id) + uuid.v4()}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => <Transaction data={item} />}
          />
        }
      </Content>
      
    </Container>
  );
}
