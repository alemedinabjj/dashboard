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
          <div>
            <S.Title color={theme === 'light' ? 'black' : 'white'}>
              {item.name}
            </S.Title>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
        <S.Table
          color={theme === 'light' ? 'black' : 'white'}
          background={theme === 'light' ? '#f0f0f0' : 'rgb(24, 37, 51)'}
        >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Rank</th>
              <th>Market Cap</th>
              <th>Volume 24h</th>
              <th>Variação 24h</th>
            </tr>
          </thead>
          <tbody>
            {notice.map(item => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td
                    style={{
                      color:
                        item.price_change_percentage_24h > 0 ? 'green' : 'red'
                    }}
                  >
                    {item.current_price.toLocaleString('en-us', {
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </td>

                  <td
                    style={{
                      color:
                        item.price_change_percentage_24h > 0 ? 'green' : 'red'
                    }}
                  >
                    {item.market_cap_rank}
                  </td>
                  <td
                    style={{
                      color:
                        item.market_cap_change_percentage_24h > 0
                          ? 'green'
                          : 'red'
                    }}
                  >
                    {item.market_cap
                      .toLocaleString('en-us', {
                        style: 'currency',
                        currency: 'USD'
                      })
                      .replace('$', '')}
                    %
                  </td>

                  <td
                    style={
                      item.price_change_percentage_24h > 0
                        ? { color: 'green' }
                        : { color: 'red' }
                    }
                  >
                    {
                      //volume 24h format
                      item.total_volume.toLocaleString('en-us', {
                        style: 'currency',
                        currency: 'USD'
                      })
                    }
                  </td>

                  <td
                    style={
                      item.price_change_percentage_24h > 0
                        ? { color: 'green' }
                        : { color: 'red' }
                    }
                  >
                    {item.price_change_percentage_24h.toLocaleString('en-us', {
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </S.Table>
        {notice.map(item => (
          <S.Google>
            <a
              href={`https://www.google.com/search?q=${item.name}`}
              target="_blank"
              rel="noreferrer"
            >
              Pesquisar no Google
            </a>
          </S.Google>
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
