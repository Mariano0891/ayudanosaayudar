import React from 'react'
import imagenNosotros from '../assets/imagenes/ImagenNosotros.png'

const Nosotros = () => {
  return (
    <div>
        <div>
            <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-start mx-6 lg:mx-24"><div class="bg-quaternary w-36 md:w-72 h-6 md:h-8 flex items-end justify-center">Nosotros</div></h2>
        </div>
        <div class=" m-6 lg:flex lg:flex-row">
            <div class="lg:w-1/2 lg:m-20">
                <p class="lg:mb-10"><span class="font-bold">Somos Juli y Gero, primos que crecieron juntos como hermanos y amigos, compartiendo un sueño en común: ayudar.</span> Lo que comenzó como una simple inquietud hoy se ha convertido en Ayudar, un proyecto que materializa causas concretas, bajo la premisa 'una causa a la vez'.</p> 
                <p>Más que un lazo de sangre, nos une la convicción de que un futuro mejor es posible. <span class="font-bold">Con nuestra pasión por desarrollar proyectos innovadores y crear comunidades comprometidas, transformamos la realidad día a día.</span> <span class="italic">“¡Unite a nosotros y juntos hagamos la diferencia!"</span></p>
            </div>
            <div class="my-4 lg:w-1/2 lg:mt-10 flex justify-center">
                <img src={imagenNosotros} alt="Juli y Gero de pequeños" class="lg:h-80"/>
            </div>
        </div>
    </div>
  )
}

export default Nosotros