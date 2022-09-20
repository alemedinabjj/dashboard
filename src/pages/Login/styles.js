import styled from 'styled-components'

<<<<<<< HEAD
export const Container = styled.section`
=======
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
>>>>>>> main
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
<<<<<<< HEAD
  height: 100%;
  background: ${props => props.background};
`

export const Content = styled.div`
  width: 500px;
  height: 800px;
`
export const Title = styled.h1``;

export const Form = styled.form``

export const Input = styled.input``

export const Button = styled.button``
=======
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
export const LoginSocial = styled.button`

  width: 160px;
  height: 30px;
  background: #e9e9e9;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 0;
  cursor: pointer;
  transition: filter 0.2s;

  color: #8d8d8d;
  font-family: "Roboto", sans-serif;
  font-size: 12px;

  &:hover {
    filter: brightness(0.9);
  }

`;

export const Paragraph = styled.p`
  font-size: 12px;
  color: #8d8d8d;
  margin-top: 10px;
  text-align: center;
  margin-top:1.4rem;

  span {
    color: #333;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1.4rem;
`;
>>>>>>> main
