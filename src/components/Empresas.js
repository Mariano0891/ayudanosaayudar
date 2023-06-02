import React from 'react'
import logo1 from '../assets/logos/empresas/Amanda.jpeg'
import logo2 from '../assets/logos/empresas/Amarlena.jpeg'
import logo3 from '../assets/logos/empresas/Clara.jpeg'
import logo4 from '../assets/logos/empresas/DeJesus.jpeg'
import logo5 from '../assets/logos/empresas/EspacioBN.jpeg'
import logo6 from '../assets/logos/empresas/FuckingSushi.jpeg'
import logo7 from '../assets/logos/empresas/Giulio.jpeg'
import logo8 from '../assets/logos/empresas/Meraki.jpeg'
import logo9 from '../assets/logos/empresas/NailsByChina.jpeg'
import logo10 from '../assets/logos/empresas/NeoSpa.jpeg'
import logo11 from '../assets/logos/empresas/PaseoLourdes.jpeg'
import logo12 from '../assets/logos/empresas/PyP.jpeg'
import logo13 from '../assets/logos/empresas/StudioVitto.jpeg'
import logo14 from '../assets/logos/empresas/VailuStore.jpeg'
import logo15 from '../assets/logos/empresas/Valkiria.jpeg'


const Empresas = () => {
  return (
    <div id='empresas'>
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center"><span class="bg-secondary">Empresas</span> que trabajaron con nosotros</h2>
        <div class="flex justify-center flex-wrap lg:mx-16">
            <img src={logo1} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo2} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo3} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo4} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo5} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo6} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo7} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo8} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo9} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo10} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo11} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo12} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>
            <img src={logo13} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo14} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo15} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
        </div>
        <div class="mx-8 my-4 text-sm md:text-base text-justify gap-10 lg:gap-16 md:grid md:grid-cols-2 lg:mx-24 lg:my-10">
            <p>Lorem ipsum dolor sit amet consectetur. Cras dictum amet diam mus dui sodales nisl eget. Sagittis integer vulputate feugiat quisque nisl sed sed aliquet tellus. Sapien turpis tortor morbi ipsum sed viverra vestibulum. Pellentesque massa lacus lectus in. Ullamcorper a neque scelerisque placerat at sollicitudin diam. Massa lectus sed ullamcorper turpis. Pharetra laoreet et amet id lorem metus. Non gravida fermentum amet neque ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Cras dictum amet diam mus dui sodales nisl eget. Sagittis integer vulputate feugiat quisque nisl sed sed aliquet tellus. Sapien turpis tortor morbi ipsum sed viverra vestibulum. Pellentesque massa lacus lectus in. Ullamcorper a neque scelerisque placerat at sollicitudin diam. Massa lectus sed ullamcorper turpis. Pharetra laoreet et amet id lorem metus. Non gravida fermentum amet neque ut.</p>
        </div>
        <div class="flex justify-center">
            <a href="#contacto" class="w-64 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-forHover hover:border-forHover">Suma tu empresa</a>
        </div>
    </div>
  )
}

export default Empresas