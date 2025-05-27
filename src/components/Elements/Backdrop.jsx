import React from "react";
import styled from "styled-components";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper onClick={() => toggleSidebar(false)} />;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6); // Fondo oscuro con transparencia
  z-index: 999; // Debe estar por debajo del Sidebar (que está en 9999)
`;
