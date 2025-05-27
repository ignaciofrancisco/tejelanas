import React, { useState, useEffect } from "react";
import TopNavbar from "../Nav/TopNavBar";
import {
  Wrapper,
  HeaderSection,
  ContentSection,
  Accordion,
  Pregunta,
  Respuesta,
  Loading
} from "../../style/PreguntasFrecuentes.styles";

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [activa, setActiva] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/", {
      headers: { Authorization: "Bearer ipss.get" }
    })
      .then(res => res.json())
      .then(data => {
        setPreguntas(data?.data ?? []);
        setLoading(false);
      })
      .catch(() => {
        setPreguntas([]);
        setLoading(false);
      });
  }, []);

  const toggle = (index) => {
    setActiva(prev => (prev === index ? null : index));
  };

  if (loading) return <Loading>Cargando preguntas frecuentes...</Loading>;

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <HeaderSection>
          <h1>Preguntas Frecuentes</h1>
        </HeaderSection>

        <ContentSection>
          {preguntas.map((item, index) => (
            <Accordion key={item.id}>
              <Pregunta onClick={() => toggle(index)} aria-expanded={activa === index}>
                {item.titulo}
                <span>{activa === index ? "▲" : "▼"}</span>
              </Pregunta>
              {activa === index && (
                <Respuesta role="region" aria-live="polite">
                  <p>{item.respuesta}</p>
                </Respuesta>
              )}
            </Accordion>
          ))}
        </ContentSection>
      </Wrapper>
    </>
  );
};

export default PreguntasFrecuentes;
