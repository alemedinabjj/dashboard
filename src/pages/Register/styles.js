import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #f5f5f5;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;

  font-family: "Roboto", sans-serif;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  font-family: "Roboto", sans-serif;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #333;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #555;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`