import React from 'react';
import logo1 from '../assets/logos/empresas/Amanda.jpeg';
import logo2 from '../assets/logos/empresas/Amarlena.jpeg';
import logo3 from '../assets/logos/empresas/Clara.jpeg';
import logo4 from '../assets/logos/empresas/DeJesus.jpeg';
import logo5 from '../assets/logos/empresas/EspacioBN.jpeg';
import logo6 from '../assets/logos/empresas/FuckingSushi.jpeg';
import logo7 from '../assets/logos/empresas/Giulio.jpeg';
import logo8 from '../assets/logos/empresas/Meraki.jpeg';
import logo9 from '../assets/logos/empresas/NailsByChina.jpeg';
import logo10 from '../assets/logos/empresas/NeoSpa.jpeg';
import logo11 from '../assets/logos/empresas/PaseoLourdes.jpeg';
import logo12 from '../assets/logos/empresas/PyP.jpeg';
import logo13 from '../assets/logos/empresas/StudioVitto.jpeg';
import logo14 from '../assets/logos/empresas/VailuStore.jpeg';
import logo15 from '../assets/logos/empresas/Valkiria.jpeg';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../components/Styles/EmpresasStyles.css'



const Empresas = () => {
  const conjuntoEmpresas = [
    {nombre: "Amanda", imagen: logo1},
    {nombre: "Amarlena", imagen: logo2},
    {nombre: "Clara", imagen: logo3},
    {nombre: "De Jesus", imagen: logo4},
    {nombre: "Espacio BN", imagen: logo5},
    {nombre: "Fucking Sushi", imagen: logo6},
    {nombre: "Giulio", imagen: logo7},
    {nombre: "Meraki", imagen: logo8},
    {nombre: "Nails by China", imagen: logo9},
    {nombre: "Neo Spa", imagen: logo10},
    {nombre: "Paseo Lourdes", imagen: logo11},
    {nombre: "P y P", imagen: logo12},
    {nombre: "Studio Vitto", imagen: logo13},
    {nombre: "Vailu Store", imagen: logo14},
    {nombre: "Valkiria", imagen: logo15},
  ]
  return (
    <div id='empresas'>
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center"><span class="bg-secondary">Empresas</span> que trabajaron con nosotros</h2>
        <div class="flex justify-center mx-10 lg:mx-36 empresasSliderContainer">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}                
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  450: {
                      slidesPerView:4,
                      spaceBetween:50,
                  },
                  1000:{
                      slidesPerView:6,
                  }
              }}
            >
            {conjuntoEmpresas.map(empresa => 
            <SwiperSlide>
              <div class="flex justify-center content-center">
                <img src={empresa.imagen} alt={empresa.nombre} class="w-20 mt-8 md:mt-20 md:w-36 place-self-center"/>
              </div>
            </SwiperSlide>  
              )}  
          </Swiper>
        </div>
        <div class="mx-8 my-4 text-sm md:text-base text-justify gap-10 lg:gap-16 md:grid md:grid-cols-2 lg:mx-24 lg:my-10">
            <div>
              <p>Todas estas marcas que mencionamos colaboraron aportando premios tanto para la rifa solidaria como para el evento que hicimos en Pier54 cervecería. Estamos muy agradecidos ya que desde el minuto 0 que comenzamos con el proyecto nos brindaron su apoyo y siempre quieren ser parte.</p>
              <p>Nuestro objetivo con las marcas es que puedan estar atrás de todas las cosas que hagamos y colaboren desde el lugar que puedan y quieran. Todas son bienvenidas a colaborar con las causas y para todas hay un lugar.</p>
            </div>
            <div>
              <p>A su vez desde Ayudar buscamos Sponsors que se puedan sumar pero con otro grado de compromiso. Buscamos Marcas, empresas, Grupos, etc que quieran tener un aporte económico en nuestras causas y a cambio nosotros poder hacer mención de esto en nuestras redes, nuestra web, nuestro merchandising, etc. Y dejar una huella en cada proyecto que hagamos que mencione a estos sponsors que colaboraron a modo de agradecimiento.</p>
            </div>
        </div>
        <div class="flex justify-center">
            <a href="#contacto" class="w-64 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-forHover hover:border-forHover">Suma tu empresa</a>
        </div>
    </div>
  )
}

export default Empresas