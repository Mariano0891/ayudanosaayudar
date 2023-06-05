import React from 'react';
import imagenSolidaridad from '../assets/valores/Solidaridad.png';
import imagenRespeto from '../assets/valores/Respeto.png';
import imagenUnidad from '../assets/valores/Unidad.png';
import imagenParticipacion from '../assets/valores/Participación.png';
import imagenJusticia from '../assets/valores/Justicia.png';
import '../components/Styles/SliderStyles.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/less/pagination';
import 'swiper/css/autoplay';


const Valores = () => {
    const conjuntoValores = [
        {imagen:imagenSolidaridad, nombre: "Solidaridad"},
        {imagen:imagenRespeto, nombre: "Respeto"},
        {imagen:imagenUnidad, nombre: "Unidad"},
        {imagen:imagenParticipacion, nombre: "Participación"},
        {imagen:imagenJusticia, nombre: "Equidad y justicia social"}
    ]
  return (
    <div>
        <div>
            <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center">Valores</h2>
        </div>
        <div className="sliderContainer md:hidden">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    el:'.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                
            >
                <div className="slider">
                {conjuntoValores.map(valor => (
                    <SwiperSlide key={valor.nombre}>
                        <div class="flex flex-col items-center sliderSection">
                            <img src={valor.imagen} alt={valor.nombre} class="h-full"/>
                            <h3 class="font-bold text-center mt-4 w-60">{valor.nombre}</h3>
                        </div>
                    </SwiperSlide>
                ))}
                </div>
            </Swiper>
        </div>
        <div class="hidden md:flex justify-evenly flex-wrap m-11 md:m-20">
            {conjuntoValores.map(valor => (
                <div class="w-52 flex flex-col items-center">
                    <img src={valor.imagen} alt={valor.nombre} class="h-28"/>
                    <h3 class="font-bold text-center m-4 text-xl">{valor.nombre}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Valores