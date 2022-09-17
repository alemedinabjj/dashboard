import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${props => props.background};
  padding: 2rem 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.background};
    color: ${props => props.color};
    padding: 2rem 5rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: ${props => props.color};
    }

    img {
      width: 5rem;
      height: 5rem;
      margin-top: 1rem;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  width: fit-content;
  height: fit-content;
  background: ${props => props.background};
  color: ${props => props.color};

  p {
    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.color};
  }

  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    align-self: center;
    margin-bottom: 2rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  align-self: center;
`

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
`

export const Price = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
`

export const Button = styled.button`
  background-color: #081f2d;
  border-radius: 29px;
  border: 1px solid #081f2d;
  color: white;
  font-size: 15px;
  padding: 10px 45px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: white;
    color: #081f2d;
    border-color: #081f2d;
    transition: 0.3s;
  }
`

//create button google style

export const Google = styled.button`
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #0066cc;
  padding: 10px 30px;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);

  &:hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  background: ${props => props.background};

  margin-top: 4rem;
  margin-bottom: 4rem;

  padding: 1rem 0.5rem;

  th {
    color: ${props => props.color};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: ${props => props.background};
    color: ${props => props.color};
    border-radius: 0.25rem;

    &:first-child {
      color: #ff9000;
    }

    &.deposit {
      color: green;
    }

    &.withdraw {
      color: red;
    }
  }
`
