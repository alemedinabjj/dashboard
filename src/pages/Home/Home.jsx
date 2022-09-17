import { useContext, useState } from 'react'
import { ThemeContext } from '../../styles/ThemeProvider'

import { CurrencyDollar, ArrowUp, ArrowDown } from 'phosphor-react'
import * as S from './styles'
import { TransactionTable } from '../../components/TransactionsTable/TransactionTable'
import { NewTransaction } from '../../components/newTransaction/NewTransaction'
import { useTransactions } from '../../context/useTransactions'

export const Home = ({ handleOpenTransactionModal }) => {
  const { theme } = useContext(ThemeContext)
  const { transactions } = useTransactions()


  

  console.log(transactions)

  return (
    <S.Container
      background={theme === 'light' ? 'white' : 'rgb(21, 32, 43)'}
      color={theme === 'light' ? 'black' : 'white'}
    >
      <S.Title color={theme === 'light' ? 'black' : 'white'}>
        Olá, seja bem vindo Alexandre
      </S.Title>
      <S.Button onClick={handleOpenTransactionModal}>
        <CurrencyDollar size={24} />
        Nova transação
      </S.Button>

      <S.SubTitle color={theme === 'light' ? 'black' : 'white'}>
        Aqui você pode ver seus gastos e controlar suas finanças
      </S.SubTitle>
      <S.Content>
        <S.Card background={theme === 'light' ? 'white' : 'rgb(32, 48, 63)'}>
          <S.HeaderCard>
            <S.CardTitle color={theme === 'light' ? 'black' : 'white'}>
              Saldo
            </S.CardTitle>
            <CurrencyDollar size={32} color="green" />
          </S.HeaderCard>
          <S.CardValue color={
           `red`
          }
        
          >
            R$ 0,00
          </S.CardValue>
        </S.Card>
        <S.Card background={theme === 'light' ? 'white' : 'rgb(32, 48, 63)'}>
          <S.HeaderCard>
            <S.CardTitle color={theme === 'light' ? 'black' : 'white'}>
              Entradas
            </S.CardTitle>
            <ArrowUp size={32} color="green" />
          </S.HeaderCard>
          <S.CardValue color={theme === 'light' ? 'black' : 'white'}>
            {' '}
            R$ 0,00
          </S.CardValue>
        </S.Card>
        <S.Card background={theme === 'light' ? 'white' : 'rgb(32, 48, 63)'}>
          <S.HeaderCard>
            <S.CardTitle color={theme === 'light' ? 'black' : 'white'}>
              Saídas
            </S.CardTitle>
            <ArrowDown size={32} color="red" />
          </S.HeaderCard>
          <S.CardValue color={theme === 'light' ? 'black' : 'white'}>
            {' '}
            R$ 0,00
          </S.CardValue>
        </S.Card>
      </S.Content>
      <TransactionTable />
      <NewTransaction />
    </S.Container>
  )
}
