import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 10px 20px 60px;
  max-width: 600px;
  margin: 80px auto 0;

  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 30px;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  label {
    font-weight: 600;
    color: #444;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"],
  select,
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #1d3557;
    outline: none;
  }

  button {
    background-color: #1d3557;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #27496d;
    }
  }
`;

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #444;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    margin: 0;
  }
`;
export const Resultado = styled.p`
  margin-top: 20px;
  padding: 10px;
  border-left: 5px solid ${({ $success }) => ($success ? "#4CAF50" : "#f44336")};
  background-color: #f1f1f1;
  font-weight: bold;
  color: ${({ $success }) => ($success ? "#2e7d32" : "#b71c1c")};
`;


export const Error = styled.span`
  color: #b71c1c;
  font-size: 14px;
  font-weight: 600;
  margin-top: 4px;
`;

export const CaptchaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 600;
    color: #444;
  }

  input {
    width: 100px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
`;
