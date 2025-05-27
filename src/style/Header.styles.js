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

const pulseGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 8px #c26d5d88;
  }
  50% {
    text-shadow: 0 0 18px #c26d5dcc;
  }
`;

const mapFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 20px 60px;
  background: #fff9f5;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 960px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  animation: ${fadeUp} 0.8s ease forwards;

  @media (max-width: 960px) {
    max-width: 100%;
    text-align: center;
    padding: 10px 0 40px;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #c26d5d;
  margin-bottom: 24px;
  font-family: "Georgia", serif;
  letter-spacing: 0.05em;
  animation: ${pulseGlow} 3s ease-in-out infinite;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #6b5248;
  line-height: 1.7;
  font-weight: 500;
  font-family: "Georgia", serif;
  max-width: 460px;
  animation: ${fadeUp} 1.2s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: 960px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  margin-top: 28px;
  padding: 14px 32px;
  background-color: #c26d5d;
  color: #fff;
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s ease, transform 0.3s ease;
  animation: ${fadeUp} 1.4s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;

  &:hover {
    background-color: #a04f3b;
    transform: scale(1.05);
  }
`;

export const Quote = styled.blockquote`
  margin-top: 40px;
  font-size: 1.4rem;
  color: #8b5e54;
  font-style: italic;
  font-family: "Georgia", serif;
  animation: ${fadeUp} 1.6s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
`;

export const Right = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;

  @media (max-width: 960px) {
    max-width: 100%;
    padding: 10px 0 0;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  background: linear-gradient(145deg, #f9e6db, #fff2e9);
  padding: 24px;
  border-radius: 28px;
  box-shadow: 0 12px 40px rgba(194, 109, 93, 0.12);
  box-sizing: border-box;

  .slick-dots {
    bottom: 14px;

    li {
      margin: 0 6px;
    }

    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #c26d5d;
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }

    .slick-active button {
      opacity: 1;
      background: #a04f3b;
    }
  }

  .slick-prev,
  .slick-next {
    width: 36px;
    height: 36px;
    z-index: 2;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 36px;
    color: #c26d5d;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
    color: #a04f3b;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: 320px;
  border-radius: 22px;
  border: 3px solid #f7d8ca;
  box-shadow: 0 8px 30px rgba(194, 109, 93, 0.28);
  object-fit: cover;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  margin: 0 auto;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 14px 38px rgba(194, 109, 93, 0.55);
    cursor: pointer;
  }

  @media (max-width: 960px) {
    max-width: 90vw;
    height: auto;
  }
`;

export const GoogleMapSection = styled.section`
  background-color: #fff9f5;
  padding: 50px 20px 80px;
  text-align: center;
  border-radius: 16px;
  max-width: 1200px;
  margin: 40px auto 0;
  animation: ${mapFadeIn} 0.8s ease forwards;
  opacity: 0;
  animation-delay: 0.9s;
  animation-fill-mode: forwards;
`;

export const MapTitle = styled.h2`
  font-size: 2.2rem;
  color: #c26d5d;
  margin-bottom: 28px;
  font-weight: 700;
  font-family: "Georgia", serif;
`;

export const IframeMap = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(194, 109, 93, 0.25);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(194, 109, 93, 0.4);
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;
