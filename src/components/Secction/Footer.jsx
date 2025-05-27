import React from "react";
import styled from "styled-components";
import Logofooter from "../../assets/img/tree.png";

import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


const Wrapper = styled.footer`
  width: 100%;
  background-color: #fff9f5;
  padding: 20px 130px;
  color: #333;
  font-family: 'Khula', sans-serif;
  border-top: 3px solid #ffbf00;
  margin-top: 30px;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  img {
    width: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const RightSection = styled.div`
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    margin-top: 0; /* Ajuste para pantallas pequeñas */
    align-items: center;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;

  svg {
    color: #ffbf00;
    font-size: 18px;
  }

  span {
    transition: color 0.3s ease;
  }

  &:hover span {
    color: #ffbf00;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Reducir tamaño de fuente en pantallas pequeñas */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 20px; /* Ajuste en dispositivos pequeños */
  }
`;

const StyledIconButton = styled(IconButton)`
  color: #ffbf00;

  &:hover {
    color: #ffffff;
    background-color: #ffbf00;
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 10px; /* Ajuste de tamaño de fuente para móviles */
    margin-top: 20px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
      <LeftSection>
        <img src={Logofooter} alt="Logo" />
        <SocialIcons>
          <StyledIconButton
            onClick={() => window.open("https://www.instagram.com/teje_lanas.vivi", "_blank")}
          >
            <InstagramIcon />
          </StyledIconButton>
          <StyledIconButton
            onClick={() => window.open("https://www.facebook.com/viviana.m.orrego.5/", "_blank")}
          >
            <FacebookIcon />
          </StyledIconButton>
          <StyledIconButton
  onClick={() => window.open("https://wa.me/56976322314", "_blank")}
>
  <WhatsappIcon />
</StyledIconButton>

        </SocialIcons>
      </LeftSection>

        <RightSection>
          <InfoRow>
            <EmailIcon />
            <span>tejelanasvivi@email.com</span>
          </InfoRow>
          <InfoRow>
            <LocationOnIcon />
            <span>Laguna de Zapallar</span>
          </InfoRow>
          <InfoRow>
            <CallIcon />
            <span>Teléfono: +56976322314</span>
          </InfoRow>
        </RightSection>
      </Container>

      <Copyright>
        © {new Date().getFullYear()} Tejelanas Vivi – Lanas Naturales con Alma
      </Copyright>
    </Wrapper>
  );
}
