import React from 'react'
import { IconContext } from 'react-icons'
import * as Icon from 'react-icons/fa'
import { useContext } from 'react'

import { ThemeContext } from '../styles/ThemeProvider'

export const BaseIcon = ({ name, size, color }) => {
  const { theme } = useContext(ThemeContext)
  const IconName = Icon[name]

  return (
    <IconContext.Provider
      value={{ size, color: color || (theme === 'light' ? 'black' : 'white') }}
    >
      <IconName />
    </IconContext.Provider>
  )
}
