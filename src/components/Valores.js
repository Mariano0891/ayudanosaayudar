import React from 'react'
import imagenSolidaridad from '../assets/valores/Solidaridad.png'
import imagenRespeto from '../assets/valores/Respeto.png'
import imagenUnidad from '../assets/valores/Unidad.png'
import imagenParticipacion from '../assets/valores/Participación.png'
import imagenJusticia from '../assets/valores/Justicia.png'
import {motion} from 'framer-motion'
import '../components/Styles/SliderStyles.css'

const Valores = () => {
    const conjuntoValores = [
        {imagen:imagenSolidaridad, nombre: "Solidaridad"},
        {imagen:imagenRespeto, nombre: "Respeto"},
        {imagen:imagenUnidad, nombre: "Unidad"},
        {imagen:imagenParticipacion, nombre: "Participación"},
        {imagen:imagenJusticia, nombre: "Equidad y justicia social"}
    ]
const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".sliderSection");
var sliderSectionLast = sliderSection[sliderSection.length -1];
//const sliderButtonLeft = document.querySelector("#sliderButtonLeft");
//const sliderButtonRight = document.querySelector("#sliderButtonRight");
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

  return (
    <div>
        <div>
            <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center">Valores</h2>
        </div>
        <div className="sliderContainer md:hidden">
            <div className="slider" id="slider">
            {conjuntoValores.map(valor => (
                <div class="flex flex-col items-center sliderSection">
                    <img src={valor.imagen} alt={valor.nombre} class="h-full"/>
                    <h3 class="font-bold text-center mt-4 w-60">{valor.nombre}</h3>
                </div>
            ))}
            </div>
            <div class="sliderButton sliderButtonRight" id="sliderButtonRight">R</div>
            <div class="sliderButton sliderButtonLeft" id="sliderButtonLeft">L</div>
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