import React, { useEffect, useState } from "react";
import TopNavbar from "../Nav/TopNavBar";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  Tabs,
  TabButton,
  Grid,
  Card,
  Price,
  ContactButton,
} from "../../style/productos.style";

const ServiceCard = ({ item, tipo }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contacto?motivo=${encodeURIComponent(item.nombre)}`);
  };

  return (
    <Card>
      <img src={item.imgs?.[0]} alt={item.nombre} />
      <h3>{item.nombre}</h3>

      {tipo === "producto" ? (
        <>
          <p>{item.descripcion}</p>
          <small>
            <strong>Tallas:</strong> {item.tallas?.length ? item.tallas.join(", ") : "N/A"}
          </small>
          <br />
          <small>
            <strong>Colores:</strong> {item.colores?.length ? item.colores.join(", ") : "N/A"}
          </small>
          <Price>${item.precio.toLocaleString()}</Price>
        </>
      ) : (
        <>
          <p>
            <strong>Ubicación:</strong> {item.ubicacion}
          </p>
          <p>
            <strong>Fecha:</strong> {item.fecha}
          </p>
          <p>
            <strong>Cupos:</strong> {item.cupos}
          </p>
        </>
      )}

      <ContactButton onClick={handleContactClick}>Contáctanos</ContactButton>
    </Card>
  );
};

const ProductsServices = () => {
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("productos");

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/", {
      headers: { Authorization: "Bearer ipss.get" },
    })
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.data.productos);
        setServicios(data.data.servicios);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos y servicios:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <Title>Productos y Servicios</Title>
        <Tabs>
        <TabButton $active={tab === "productos"} onClick={() => setTab("productos")}>Productos</TabButton>
        <TabButton $active={tab === "servicios"} onClick={() => setTab("servicios")}>Servicios</TabButton>

        </Tabs>

        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Grid>
            {tab === "productos" &&
              productos.map((producto) => (
                <ServiceCard key={producto.id} item={producto} tipo="producto" />
              ))}

            {tab === "servicios" &&
              servicios.map((servicio) => (
                <ServiceCard key={servicio.id} item={servicio} tipo="servicio" />
              ))}
          </Grid>
        )}
      </Wrapper>
    </>
  );
};

export default ProductsServices;
