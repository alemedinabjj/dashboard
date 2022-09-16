import { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../../styles/ThemeProvider'
import * as S from './styles'
import api, { ALL_COINS } from '../../services/api'
import { Link } from 'react-router-dom'

export const Explorer = () => {
  const { theme } = useContext(ThemeContext)

  const [notices, setNotices] = useState([])

  const getFetch = useMemo(() => {
    const fetchNotices = async () => {
      const response = await api.get(ALL_COINS)
      setNotices(response.data)
    }
    fetchNotices()
  }, [])

  useEffect(() => {
    getFetch
  }, [getFetch])

  return (
    <S.Container
      color={theme === 'light' ? 'black' : 'white'}
      background={theme === 'light' ? 'white' : 'rgb(21, 32, 43)'}
    >
      <h1>
        Explore o mundo das criptomoedas e descubra o que elas podem fazer por
        você!
      </h1>
      <S.Content>
        {notices.map(notice => {
          return (
            <S.Card
              key={notice.id}
              shadow={theme === 'light' && '0px 0px 10px 0px rgba(0,0,0,0.07)'}
            >
              <h2>{notice.name}</h2>
              <img src={notice.image} alt={notice.name} />
              <p>{notice.description}</p>
              <Link to={`/detailsexplorer/${notice.id}`}>Saiba mais</Link>
            </S.Card>
          )
        })}
      </S.Content>
    </S.Container>
  )
}
