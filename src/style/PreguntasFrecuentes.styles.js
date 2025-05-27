import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 20px;
  max-width: 700px;
  margin: 60px auto 80px;
`;

export const HeaderSection = styled.section`
  text-align: center;
  margin-top: 60px;

  h1 {
    font-size: 50px;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;

export const ContentSection = styled.section`
  margin-top: 40px;
`;

export const Accordion = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Pregunta = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

export const Respuesta = styled.div`
  padding: 10px 0 20px 0;

  p {
    font-size: 16px;
    color: #555;
    margin: 0;
  }
`;

export const Loading = styled.p`
  font-family: 'Khula', sans-serif;
  text-align: center;
  margin-top: 100px;
  font-size: 18px;
  color: #555;
`;
