import { useParams } from 'react-router-dom'
import { useState, useMemo, useEffect, useContext } from 'react'
import api from '../../services/api'
import { URL_ID } from '../../services/api'
import * as S from './styles'
import { ThemeContext } from '../../styles/ThemeProvider'

export const DetailsExplorer = () => {
  const { id } = useParams()

  const [notice, setNotice] = useState([])

  const { theme } = useContext(ThemeContext)

  const getFetch = useMemo(() => {
    const fetchNotice = async () => {
      const response = await api.get(`${URL_ID}${id}`)
      setNotice(response.data)
    }
    fetchNotice()
  }, [id])

  useEffect(() => {
    getFetch
  }, [getFetch])

  console.log(notice)

  return (
    <S.Container
      background={theme === 'light' ? 'white' : 'rgb(21, 32, 43)'}
      color={theme === 'light' ? 'black' : 'white'}
    >
      <S.Content>
        {notice.map(item => (
          <S.Card key={item.id} color={theme === 'light' ? 'black' : 'white'}>
            <S.Title>{item.name}</S.Title>
            <img src={item.image} alt={item.name} />
            <p>
              <span>Preço atual:</span>{' '}
              {item.current_price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </p>
            <p>
              <span>Rank: </span>
              {item.market_cap_rank}
            </p>
            <p>
              <span>Market Cap: </span>
              {item.market_cap}
            </p>

            <p>
              <span>High 24h: </span>
              {item.high_24h.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </p>
            <p>
              <span>Low 24h: </span>
              {item.low_24h
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
                .replace('-', '')}
            </p>
            <p>
              <span>Price Change 24h: </span>
              {item.price_change_24h
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
                .replace('-', '')}
            </p>
            <p>
              <span>Price Change Percentage 24h: </span>
              {item.price_change_percentage_24h}
            </p>
            <p>
              <span>Total Volume: </span>
              {item.total_volume}
            </p>

            <p>
              <span>Market Cap Change 24h: </span>
              {item.market_cap_change_24h}
            </p>

            <p>
              <span>Market Cap Change Percentage 24h: </span>
              {item.market_cap_change_percentage_24h}
            </p>

            <p>
              <span>Circulating Supply: </span>
              {item.circulating_supply}
            </p>

            <p>
              <span>Total Supply: </span>
              {item.total_supply}
            </p>

            <p>
              <span>Max Supply: </span>
              {item.max_supply}
            </p>
            <S.Google>
              <a
                href={`https://www.google.com/search?q=${item.name}`}
                target="_blank"
                rel="noreferrer"
              >
                Pesquisar no Google
              </a>
            </S.Google>
          </S.Card>
        ))}
      </S.Content>
      <S.Button
        onClick={() => window.history.back()}
        color={theme === 'light' ? 'black' : 'white'}
        background={theme === 'light' ? 'white' : 'rgb(21, 32, 43)'}
      >
        Voltar
      </S.Button>
    </S.Container>
  )
}
