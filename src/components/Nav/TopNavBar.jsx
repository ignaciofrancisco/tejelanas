import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import '../../app.css';
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../svg/Logo";
import BurgerIcon from "../../svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner>
          <LeftBlock to="/" className="pointer">
          <Logo />
            <Title>Tejelanas Vivi – Lanas Naturales</Title>
          </LeftBlock>

          <UlWrapper>
            <li>
              <StyledNavLink to="/" end>Inicio</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/parcelas">Quienes Somos</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/nosotros">Productos</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/PreguntasFrecuentes">Preguntas Frecuentes</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contacto">Contacto</StyledNavLink>
            </li>
          </UlWrapper>

          <BurderWrapper onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

// --- ESTILOS ---
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(3px); /* Ajusta el valor del blur si lo deseas */
  font-family: 'Khula', sans-serif;
`;



const NavInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
const LeftBlock = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  overflow: visible; /* <- Agrega esto */
`;


const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Khula', sans-serif;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;

  li {
    font-size: 17px;
    transition: all 0.3s ease;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  font-family: 'Khula', sans-serif;
  transition: color 0.3s ease;

  &.active {
    color: #d4af37;
  }

  &:hover {
    color: #d4af37;
  }
`;

const BurderWrapper = styled.button`
  background: transparent;
  border: none;
  height: 100%;
  padding: 0 15px;
  display: none;
  color: white;

  @media (max-width: 760px) {
    display: block;
  }
`;
const Logo = styled(LogoIcon)`
  width: 60px;
  height: auto;
  margin-left: -10px; /* alternativa más segura */
`;


