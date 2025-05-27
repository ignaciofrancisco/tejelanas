import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // <- usamos react-router-dom ahora

// Assets
import CloseIcon from "../../svg/CloseIcon";
import LogoIcon from "../../svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <h1 className="whiteColor font21" style={{ marginLeft: "15px" }}>
            Municipalidad CholChol
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(false)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        {[
          { to: "/", label: "Inicio" },
          { to: "/parcelas", label: "Quienes Somos" },
          { to: "/nosotros", label: "Productos" },
          { to: "/PreguntasFrecuentes", label: "Preguntas Frecuentes" },
          { to: "/contacto", label: "Contacto" },
        ].map(({ to, label }) => (
          <li key={to} className="semiBold font15 pointer">
            <StyledLink to={to} onClick={() => toggleSidebar(false)}>
              {label}
            </StyledLink>
          </li>
        ))}
      </UlStyle>
    </Wrapper>
  );
}

// ----- ESTILOS -----
const Wrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "sidebarOpen",
})`
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  transition: right 0.3s ease;
  z-index: 9999;
  background-color: #111;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;

const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    font-size: 25px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;

  &:hover {
    text-decoration: underline;
  }
`;
