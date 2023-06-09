import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '../components/Styles/TestimoniosStyles.css'


const Testimonios = () => {
    const conjuntoTestimonios = [
        {nombre:"Federico Seoane (pier54)", declaracion:'"Gracias a ustedes por el trabajo que hacen. Siempre son bienvenidos."'},
        {nombre:"Sandra Marchese", declaracion:'"Lo que hacen ustedes es maravilloso. Felicitaciones!!!"'},
        {nombre:"Tomas Foschiatti", declaracion:'"Siempre voy a apoyarlos. Esta buenísimo lo que hacen."'},
        {nombre:"Cecilia Bruno", declaracion:'"Son únicos chicos."'},
        {nombre:"Natalia Fernández Laya", declaracion:'"Orgullosa de ustedes. Yo los ayudo a ayudar"'}       
    ]
  return (
    <div id='testimonios'>
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center mb-6 md:mb-12 lg:mb-20">Testimonios</h2>
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{
                el:'.swiper-pagination',
                clickable: true,
                type: 'bullets',
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            breakpoints={{
                620: {
                    slidesPerView:2,
                },
                1000:{
                    slidesPerView:3,
                    loop: false,
                }
            }}
        >
            <div class="flex justify-evenly flex-wrap">
            {conjuntoTestimonios.map(testimonio => (
                <SwiperSlide>
                    <div class="flex border border-quaternary rounded-3xl p-6 w-84 h-36 mx-auto slide">
                        <div class="w-12 h-12 bg-quaternary rounded-full mr-4"></div>
                        <div class="w-64">
                            <p class="mb-2">{testimonio.declaracion}</p>
                            <h4 class="text-sm">{testimonio.nombre}</h4>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </div>
        </Swiper>
    </div>
  )
}

export default Testimonios