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
      background: #1a1a1a;
      color: #fff;
    }

    &.light {
      background: #fff;
      color: #1a1a1a;
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
    max-width: 2320px;
    margin: 0 auto;
    
    background: transparent;
  }

  .ReactModal__Overlay{ 

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .ReactModal__Overlay--after-open{
      background-color: rgb(32 32 32 / 75%)!important;
    }

    .ReactModal__Content{
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: .25rem;

    }

`
