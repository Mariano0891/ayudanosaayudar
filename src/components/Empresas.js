import React from 'react'
import logo from '../assets/logos/Logo.png'


const Empresas = () => {
  return (
    <div>
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center"><span class="bg-secondary">Empresas</span> que trabajaron con nosotros</h2>
        <div class="flex justify-center flex-wrap">
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
            <img src={logo} alt="" class="w-16 m-3 md:mt-12 md:w-24"/>  
        </div>
        <div class="mx-8 my-4 text-sm md:text-base text-justify gap-10 lg:gap-16 md:grid md:grid-cols-2 lg:mx-24 lg:my-12">
            <p>Lorem ipsum dolor sit amet consectetur. Cras dictum amet diam mus dui sodales nisl eget. Sagittis integer vulputate feugiat quisque nisl sed sed aliquet tellus. Sapien turpis tortor morbi ipsum sed viverra vestibulum. Pellentesque massa lacus lectus in. Ullamcorper a neque scelerisque placerat at sollicitudin diam. Massa lectus sed ullamcorper turpis. Pharetra laoreet et amet id lorem metus. Non gravida fermentum amet neque ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Cras dictum amet diam mus dui sodales nisl eget. Sagittis integer vulputate feugiat quisque nisl sed sed aliquet tellus. Sapien turpis tortor morbi ipsum sed viverra vestibulum. Pellentesque massa lacus lectus in. Ullamcorper a neque scelerisque placerat at sollicitudin diam. Massa lectus sed ullamcorper turpis. Pharetra laoreet et amet id lorem metus. Non gravida fermentum amet neque ut.</p>
        </div>
        <div class="flex justify-center">
            <a href="" class="w-64 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-white hover:text-primary">Suma tu empresa</a>
        </div>
    </div>
  )
}

export default Empresas