import React from 'react';
import imagenSoles from '../assets/imagenes/ImagenSoles.jpeg';
import imagenRifa from '../assets/imagenes/ImagenRifa.jpeg';
import imagenEvento from '../assets/imagenes/ImagenEvento.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/less/pagination';
import 'swiper/css/autoplay';

const Causas = () => {
    const conjuntoCausas = [
        {nombre: "Soles en el camino", descripcion: "Soles en el Camino es una Asociación Civil sin fines de lucro que sostiene el Hogar de Niños para 25 niñas y adolescentes en situación de vulnerabilidad. Un equipo amplio y profesional brinda atención integral y apoyo emocional y afectivo en un ambiente familiar seguro.", imagen: imagenSoles , link: "https://www.instagram.com/p/CnFv5vFPWz9/"},
        {nombre: "Rifa con causa", descripcion: "Nuestra rifa solidaria en colaboración con varias marcas, con el objetivo de recaudar fondos para arreglar las filtraciones de los techos del Hogar", imagen: imagenRifa , link: "https://www.instagram.com/p/CovGnmHP80i/"},
        {nombre: "Evento solidario", descripcion: "Se realizó un evento de recaudación de fondos. Una tarde llena de entretenimiento, subastas, rifas y actividades especiales mientras ayudamos a mejorar la vida de niños necesitados.", imagen: imagenEvento , link: "https://www.instagram.com/p/Cp6MtDdgZUp/"},
    ]
  return (
    <div id='causas'>
      <div  class="mx-6 md:mx-12 lg:mx-24">
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-start"><span class="bg-secondary">Nuestras</span> causas</h2>
      </div>
      <div class="md:hidden flex flex-col justify-center my-6">
          <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                  el:'.swiper-pagination',
                  clickable: true,
                  type: 'bullets',
              }}
              autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
              }}
              spaceBetween={50}
              slidesPerView={1}  
          >
          {conjuntoCausas.map(causa => (
            <div>
              <div class="flex justify-center">
                <img src={causa.imagen} alt={causa.nombre} class="w-10/12 h-36 rounded-3xl object-cover"/>
              </div>  
              <div class="flex flex-col text-center mx-6 mt-6">
                <h3 class="font-bold text-xl mx-6 mt-6">{causa.nombre}</h3>
                <p class="text-justify mt-2 mx-8">{causa.descripcion}</p>
              </div>
              <div class="flex justify-center">
                  <a href={causa.link} target="_blank" rel="noopener noreferrer" class="m w-64 h-12 border border-primary rounded-3xl flex justify-center items-center text-primary hover:bg-forHover hover:border-forHover hover:text-white">Conocer más</a>
              </div>
            </div>
          ))}
          </Swiper>
      </div>
      <div class="hidden md:flex flex-wrap justify-center m-11 md:m-18 w-11/12">
            {conjuntoCausas.map(causa => (
                <div class="flex inline w-11/12 mb-16">
                  <div class="w-1/2 self-center mr-12">
                    <h3 class="font-bold text-start my-4 text-xl">{causa.nombre}</h3>
                    <p class="my-4 text-justify">{causa.descripcion}</p>
                    <a href={causa.link} target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-forHover hover:border-forHover hover:text-white">Conocer más</a>
                  </div> 
                    <img src={causa.imagen} alt={causa.nombre} class="w-1/2 h-72 rounded-3xl object-cover"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Causas