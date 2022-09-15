import { useContext, useState } from 'react'
import { ThemeContext } from '../../styles/ThemeProvider'

import { CurrencyDollar, ArrowUp, ArrowDown } from 'phosphor-react'
import * as S from './styles'

export const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  //function controle de gastos entrada, saida e total
  const [total, setTotal] = useState(0)
  const [entrada, setEntrada] = useState(200)
  const [saida, setSaida] = useState(250)
  const [descricao, setDescricao] = useState('')

  const handleEntrada = () => {
    setTotal(total + entrada)
    setEntrada(0)
  }

  const handleSaida = () => {
    setTotal(total - saida)
    setSaida(0)
  }
  
 

  return (
    <S.Container
      background={theme === 'light' ? 'white' : 'rgb(21, 32, 43)'}
      color={theme === 'light' ? 'black' : 'white'}
    >
      <S.Title color={theme === 'light' ? 'black' : 'white'}>
        Olá, seja bem vindo Alexandre
      </S.Title>
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
          <S.CardValue color={theme === 'light' ? 'black' : 'white'}>
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
            R$ {entrada},00
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
            R$ {saida},00
          </S.CardValue>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
