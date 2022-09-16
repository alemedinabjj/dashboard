import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../styles/ThemeProvider'
import * as S from './styles'
import api from '../../services/api'


export const Explorer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  //api notices economy
  const [notices, setNotices] = useState([])

  const getFetch = async () => {
    try {
      const response = await api.get()
      const data = response.data
      setNotices(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFetch()
  }, [])

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
            <S.Card key={notice.id}>
              <h2>{notice.name}</h2>
              <img src={notice.image} alt={notice.name} />
            </S.Card>
          )
        })}
      </S.Content>
    </S.Container>
  )
}
