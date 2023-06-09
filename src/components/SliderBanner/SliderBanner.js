import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import '../SliderBanner/SliderBannerStyles.css';
import imagen1 from '../../assets/carrusel/Hogar1.png';
import imagen2 from '../../assets/carrusel/Hogar2.png';
import imagen3 from '../../assets/carrusel/Hogar3.png';
import imagen4 from '../../assets/carrusel/Hogar4.png';
import imagen5 from '../../assets/carrusel/Hogar5.png';
import imagen6 from '../../assets/carrusel/Hogar6.png';
import imagen7 from '../../assets/carrusel/Hogar7.jpeg';
import imagen8 from '../../assets/carrusel/Hogar8.jpeg';

const SliderBanner = () => {
    const conjuntoImagenes = [
        {img: imagen1, descripcion: "Jugando en una hamaca"},
        {img: imagen2, descripcion: "Festejando un cumpleaños"},
        {img: imagen3, descripcion: "Jugando a pescar"},
        {img: imagen4, descripcion: "Haciendo manualidades"},
        {img: imagen5, descripcion: "Divirtiendose en el patio"},
        {img: imagen6, descripcion: "De excursion"},
        {img: imagen7, descripcion: "De excursion"},
        {img: imagen8, descripcion: "De excursion"},
    ]
  return (
    <div class="hidden md:block overflow-x-hidden">
        <Swiper class="bannerContainer"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {conjuntoImagenes.map(imagen => (
            <SwiperSlide className="bannerSlide">
                <img src={imagen.img} alt={imagen.descripcion} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderBanner