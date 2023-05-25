import React from 'react'
import imagenSolidaridad from '../assets/valores/Solidaridad.png'
import imagenRespeto from '../assets/valores/Respeto.png'
import imagenUnidad from '../assets/valores/Unidad.png'
import imagenParticipacion from '../assets/valores/Participación.png'
import imagenJusticia from '../assets/valores/Justicia.png'

const Valores = () => {
  return (
    <div>
        <div>
            <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center">Valores</h2>
        </div>
        <div class="flex justify-evenly flex-wrap m-11 md:m-20">
            <div class="w-52 flex flex-col items-center">
                <img src={imagenSolidaridad} alt="Grafica de solidaridad" class="w-28"/>
                <h3 class="font-bold text-center m-4 text-xl">Solidaridad</h3>
            </div>
            <div class="w-52 flex flex-col items-center">
                <img src={imagenRespeto} alt="Grafica de respeto" class="w-28"/>
                <h3 class="font-bold text-center m-4 text-xl">Respeto</h3>
            </div>
            <div class="w-52 flex flex-col items-center">
                <img src={imagenUnidad} alt="Grafica de unidad" class="w-28"/>
                <h3 class="font-bold text-center m-4 text-xl">Unidad</h3>
            </div>
            <div class="w-52 flex flex-col items-center">
                <img src={imagenParticipacion} alt="Grafica de Participación" class="w-28"/>
                <h3 class="font-bold text-center m-4 text-xl">Participación</h3>
            </div>
            <div class="w-52 flex flex-col items-center">
                <img src={imagenJusticia} alt="Grafica de equidad y justicia social" class="w-28"/>
                <h3 class="font-bold text-center m-4 text-xl">Equidad y justicia social</h3>
            </div>
        </div>
    </div>
  )
}

export default Valores