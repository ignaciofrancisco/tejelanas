import React, { useEffect, useState } from "react";
import TopNavbar from "../Nav/TopNavBar";

import {
  Wrapper,
  Title,
  Section,
  SectionTitle,
} from "../../style/historia.styles";

const Municipio = () => {
  const [aboutText, setAboutText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/", {
      headers: {
        Authorization: "Bearer ipss.get",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let cleanText = data.data;

        if (typeof cleanText === "string" && cleanText.startsWith('"') && cleanText.endsWith('"')) {
          cleanText = cleanText.slice(1, -1);
        }

        setAboutText(cleanText);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <Title>Quiénes Somos</Title>
        {loading ? (
          <p>Cargando información...</p>
        ) : (
          <>
            <Section>
              <SectionTitle>Nuestra Historia</SectionTitle>
              <p>{aboutText}</p>
            </Section>

            <Section>
              <SectionTitle>Compromiso Social</SectionTitle>
              <p>
                Nos dedicamos a fortalecer la identidad local a través del arte del tejido. Nuestra misión es empoderar a mujeres emprendedoras,
                ofrecer productos hechos a mano de alta calidad y fomentar una comunidad basada en el respeto, la tradición y la creatividad.
              </p>
            </Section>

            <Section>
              <SectionTitle>Valores que nos guían</SectionTitle>
              <ul>
                <li>❤️ Pasión por lo que hacemos</li>
                <li>🧵 Respeto por la tradición</li>
                <li>🌿 Compromiso con la sostenibilidad</li>
                <li>🤝 Trabajo colaborativo</li>
              </ul>
            </Section>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Municipio;
