import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Khula', sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 80px auto 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
`;

export const TabButton = styled.button`
  background: ${({ $active }) => ($active ? "#1d3557" : "#f0f0f0")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background: ${({ active }) => (active ? "#1a2e4f" : "#ddd")};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 15px;
  }

  h3 {
    color: #1d3557;
    font-size: 20px;
    margin: 10px 0 5px;
  }

  p {
    color: #555;
    font-size: 14px;
    margin-bottom: 8px;
  }

  small {
    font-size: 12px;
    color: #777;
  }
`;

export const Price = styled.div`
  margin-top: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #27ae60;
`;

export const ContactButton = styled.button`
  margin-top: 20px;
  background-color: #1d3557;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #27496d;
  }
`;
