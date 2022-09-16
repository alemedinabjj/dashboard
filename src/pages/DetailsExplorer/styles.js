import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background:${props => props.background};
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background:${props => props.background};
  padding: 2rem 5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  width: fit-content;
  height: fit-content;
  background:${props => props.background};
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
`;


export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  align-self: center;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: 1rem;
  font-weight: 100;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s;
  padding: 0.5rem 1rem;

  margin-bottom: 1rem;

  &:hover {
    background: #fff;
    color: #000;

  }
`;

//create button google style


export const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: 1rem;
  font-weight: 100;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s;
  padding: 0.5rem 1rem;

  margin-bottom: 1rem;

  &:hover {
    background: #fff;
    color: #000;

  }
`;