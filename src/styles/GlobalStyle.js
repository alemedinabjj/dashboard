import { createGlobalStyle, css } from 'styled-components'

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
`

export default RobotoFont

export const GlobalStyle = createGlobalStyle`

  ${RobotoFont}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    min-height: 100vh;

    &.dark {
      background-color: #000;
      color: #fff;

      a {
        color: #fff;
      }


    }

    &.light {
      background-color: #fff;
      color: #000;

      a {
        color: #000;

      }
    }
  }

 

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: grey;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }

  main {
    display: flex;
    flex-direction: row;

    &.dark {
      background-color: #000;
      color: #fff;

      a {
        color: #fff;
      }


    }

    &.light {
      background-color: #fff;
      color: #000;

      a {
        color: #000;

      }
    }
  }

`
