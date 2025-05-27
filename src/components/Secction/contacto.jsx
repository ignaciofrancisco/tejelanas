import React, { useState, useEffect } from "react";
import TopNavbar from "../Nav/TopNavBar";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  Formulario,
  CheckboxContainer,
  Resultado,
  Error,
  CaptchaContainer
} from "../../style/Contacto.styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    motivo: "",
    mensaje: "",
    aceptaTerminos: false,
    captchaAnswer: "",
  });

  const [resultado, setResultado] = useState("");
  const [errores, setErrores] = useState({});
  const [captcha, setCaptcha] = useState({ question: "", solution: null });
  const [opcionesApi, setOpcionesApi] = useState([]);
  const motivosEstandar = ["Producto", "Servicio", "Otro"];

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ question: `¿Cuánto es ${a} + ${b}?`, solution: a + b });
  };

  const query = useQuery();
  const unidadDesdeURL = query.get("motivo");

  useEffect(() => {
    generateCaptcha();

    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/", {
      headers: { Authorization: "Bearer ipss.get" },
    })
      .then((res) => res.json())
      .then((data) => {
        const productos = data.productos?.map((item) => item.nombre) || [];
        const servicios = data.servicios?.map((item) => item.nombre) || [];
        setOpcionesApi([...productos, ...servicios]);
      })
      .catch((err) => console.error("Error al cargar productos y servicios:", err));
  }, []);

  useEffect(() => {
    if (unidadDesdeURL) {
      setFormData((prev) => ({ ...prev, motivo: unidadDesdeURL }));
    }
  }, [unidadDesdeURL]);

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarNombre = (nombre) => /^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(nombre.trim());

  const validarFormulario = () => {
    let erroresTmp = {};

    if (!validarNombre(formData.nombre)) {
      erroresTmp.nombre = "Nombre inválido (solo letras y espacios, mínimo 2 caracteres).";
    }
    if (!validarEmail(formData.email)) {
      erroresTmp.email = "Email inválido.";
    }
    if (!formData.motivo) {
      erroresTmp.motivo = "Debe seleccionar un motivo.";
    }
    if (!formData.mensaje || formData.mensaje.trim().length < 10) {
      erroresTmp.mensaje = "Mensaje demasiado corto (mínimo 10 caracteres).";
    }
    if (!formData.aceptaTerminos) {
      erroresTmp.aceptaTerminos = "Debe aceptar los términos y condiciones.";
    }
    if (parseInt(formData.captchaAnswer) !== captcha.solution) {
      erroresTmp.captchaAnswer = "Respuesta CAPTCHA incorrecta.";
    }

    setErrores(erroresTmp);
    return Object.keys(erroresTmp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrores((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setResultado("✅ Mensaje enviado exitosamente.");
      setFormData({
        nombre: "",
        email: "",
        direccion: "",
        motivo: "",
        mensaje: "",
        aceptaTerminos: false,
        captchaAnswer: "",
      });
      generateCaptcha();
      setErrores({});
    } else {
      setResultado("❌ Por favor corrige los errores en el formulario.");
    }
  };

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <h1>Contáctanos</h1>
        <Formulario onSubmit={handleSubmit} noValidate>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              aria-invalid={!!errores.nombre}
              aria-describedby="error-nombre"
              placeholder="Tu nombre completo"
            />
            {errores.nombre && <Error id="error-nombre">{errores.nombre}</Error>}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!!errores.email}
              aria-describedby="error-email"
              placeholder="ejemplo@correo.com"
            />
            {errores.email && <Error id="error-email">{errores.email}</Error>}
          </label>

          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Tu dirección (opcional)"
            />
          </label>

          <label>
            Motivo de Consulta:
            <select
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
              aria-invalid={!!errores.motivo}
              aria-describedby="error-motivo"
            >
              <option value="">Seleccione una unidad</option>
              {formData.motivo &&
                !motivosEstandar.includes(formData.motivo) &&
                !opcionesApi.includes(formData.motivo) && (
                  <option value={formData.motivo}>{formData.motivo}</option>
                )}
              {motivosEstandar.map((motivo) => (
                <option key={motivo} value={motivo}>
                  {motivo}
                </option>
              ))}
              {opcionesApi.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
            {errores.motivo && <Error id="error-motivo">{errores.motivo}</Error>}
          </label>

          <label>
            Mensaje:
            <textarea
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
              aria-invalid={!!errores.mensaje}
              aria-describedby="error-mensaje"
              placeholder="Escribe tu consulta o comentario"
            />
            {errores.mensaje && <Error id="error-mensaje">{errores.mensaje}</Error>}
          </label>

          <CaptchaContainer>
            <label htmlFor="captchaAnswer">
              {captcha.question}
              <input
                id="captchaAnswer"
                type="number"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleChange}
                required
                aria-invalid={!!errores.captchaAnswer}
                aria-describedby="error-captchaAnswer"
                placeholder="Tu respuesta"
                autoComplete="off"
              />
            </label>
            {errores.captchaAnswer && (
              <Error id="error-captchaAnswer">{errores.captchaAnswer}</Error>
            )}
          </CaptchaContainer>

          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                aria-invalid={!!errores.aceptaTerminos}
                aria-describedby="error-aceptaTerminos"
              />
              Acepto los términos y condiciones
            </label>
            {errores.aceptaTerminos && (
              <Error id="error-aceptaTerminos">{errores.aceptaTerminos}</Error>
            )}
          </CheckboxContainer>

          <button type="submit">Enviar</button>
        </Formulario>

        <Resultado $success={resultado.startsWith("✅")}>{resultado}</Resultado>

      </Wrapper>
    </>
  );
};

export default Contacto;
