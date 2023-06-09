import React from 'react'
import logo from '../assets/logos/Logo.png'


const Banner = () => {
  return (
    <div id="home" class="flex place-items-center flex-col">
        <div class="flex flex-col place-items-center">
            <img src={logo} alt="" class="w-36 my-3 md:w-80 md:my-5"/>
            <div class="w-40 h-2 md:w-96 md:h-3 bg-secondary rounded-3xl"></div>
        </div>
        <div class="my-6 md:my-12">
            <h1 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center">El poder de una donación</h1>
            <p class="text-center font-light text-sm md:text-xl my-6 mx-12 md:mx-24 lg:mx-40 lg:text-center lg:max-w-[750px]">Ayudar es una organización sin fines de lucro que nace del compromiso y la inquietud por construir una sociedad más justa y unida. Nuestro objetivo principal es brindar ayuda y apoyo a aquellos que más lo necesitan</p>
        </div>
    </div>
  )
}

export default Banner