import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

import {
  Wrapper,
  Container,
  Left,
  Title,
  Description,
  CTAButton,
  Quote,
  Right,
  SliderContainer,
  CarouselImage,
  GoogleMapSection,
  MapTitle,
  IframeMap,
} from "../../style/Header.styles";


const Header = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <>
      <Wrapper id="home">
        <Container>
          <Left>
            <Title>Hecho a mano con amor</Title>
            <Description>
              Explora una colección única de tejidos a crochet diseñados con
              dedicación. Desde accesorios hasta decoración, cada pieza refleja
              creatividad y calidez.
            </Description>
            <CTAButton href="nosotros">Ver catálogo</CTAButton>
            <Quote>
              “Cada puntada cuenta una historia. Tejemos con el corazón, para
              abrigar el tuyo.”
            </Quote>
          </Left>

          <Right>
            <SliderContainer>
              <Slider {...carouselSettings}>
                {[img1, img2, img3, img4].map((img, i) => (
                  <div key={i}>
                    <CarouselImage src={img} alt={`Producto tejido ${i + 1}`} />
                  </div>
                ))}
              </Slider>
            </SliderContainer>
          </Right>
        </Container>
      </Wrapper>

      <GoogleMapSection>
        <MapTitle>Nos encontramos ubicados en:</MapTitle>
        <IframeMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.330718553068!2d-71.45737721473287!3d-32.55446950994299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689b048ddc569c1%3A0xb088902f157b923!2sZapallar%2C%20Valpara%C3%ADso!5e1!3m2!1ses-419!2scl!4v1748307720383!5m2!1ses-419!2scl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa ubicación"
        />
      </GoogleMapSection>
    </>
  );
};

export default Header;
