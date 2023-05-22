import React from 'react'
import logoMP from '../assets/logos/LogoMercadoPago.png'

const Donacion = () => {
  return (
    <div class="bg-tertiary m-4 lg:m-9 rounded-3xl p-3 md:p-7">
        <div class="flex justify-center">
            <img src={logoMP} alt="Logo de Mercado Pago" class="w-32"/>
        </div>
        <div>
          <h2 class="font-bold text-2xl m-6 md:text-5xl lg:text-6xl text-center">Ayúdanos con tu aporte</h2>
        </div>
        <div class="flex justify-evenly flex-wrap lg:mx-48 lg:my-6 ">
          <a href="https://mpago.la/1Y9msUf" target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-primary hover:text-white">Donar $500</a>
          <a href="https://mpago.la/2TjynZc" target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-primary hover:text-white">Donar $1.000</a>
          <a href="https://mpago.la/24v1qpj" target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-primary hover:text-white">Donar $1.500</a>
          <a href="https://mpago.la/158f2JY" target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-primary hover:text-white">Donar $2.000</a>
          <a href="http://link.mercadopago.com.ar/julia25" target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-primary hover:text-white">Otro monto</a>
        </div>
    </div>
  )
}

export default Donacion