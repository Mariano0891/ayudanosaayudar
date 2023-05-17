import React from 'react'
import logo from '../assets/logo/Logo.png'
import MenuHamburguesa from './MenuHamburguesa/MenuHamburguesa'
import {BsInstagram} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div class="h-16 flex justify-between items-center border-solid border-2 border-sky-900">
        <div>
            <a href=""><img src={logo} alt="" class="h-10 m-3.5"/></a>
        </div>
        <div class="hidden md:flex self-center">
            <a href="" class="">Nosotros</a>
            <a href="" class="">Nuestras Causas</a>
            <a href="" class="">Testimonios</a>
            <a href="" class="">Contacto</a>
        </div>
        <div class="hidden md:flex self-center">
            <a href="" class=""><BsInstagram class="text-3xl"/></a>
            <a href="" class="">Empresas</a>
            <a href="" class="">Donar</a>
        </div>

        <div class="md:hidden">
            <MenuHamburguesa/>
        </div>
    </div>
  )
}

export default NavBar