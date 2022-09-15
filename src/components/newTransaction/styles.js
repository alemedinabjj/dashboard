import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
  padding: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  .form-control {
    width: 100%;
    margin-bottom: 20px;
      
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`

  width: fit-content;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const Select = styled.select`

  //create select with a shadow
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`;
