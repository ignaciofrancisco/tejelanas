import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  font-family: "Khula", sans-serif;
  background: #fff9f5;
  padding: 100px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeUp} 0.8s ease forwards;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #c26d5d;
  font-family: "Georgia", serif;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  animation: ${fadeUp} 1s ease forwards;
`;

export const Section = styled.section`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
  box-shadow: 0 8px 24px rgba(194, 109, 93, 0.15);
  animation: ${fadeUp} 1s ease forwards;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #a04f3b;
  font-family: "Georgia", serif;
  margin-bottom: 20px;
`;
