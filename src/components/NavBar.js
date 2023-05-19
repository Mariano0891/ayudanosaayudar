import React from 'react'
import logo from '../assets/logo/Logo.png'
import MenuHamburguesa from './MenuHamburguesa/MenuHamburguesa'
import {BsInstagram} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div class="h-24 flex justify-between items-center text-primary border-b border-b-primary">
        <div>
            <a href=""><img src={logo} alt="" class="h-10 sd:h-12 ml-4 lg:ml-4.5"/></a>
        </div>
        <div class="hidden lg:flex">
            <ul class="flex">
                <li><a href="" class="border-b-2 border-b-white hover:border-b-secondary">Nosotros</a></li>
                <li><a href="" class="border-b-2 border-b-white hover:border-b-secondary">Nuestras Causas</a></li>
                <li><a href="" class="border-b-2 border-b-white hover:border-b-secondary">Testimonios</a></li>
                <li><a href="" class="border-b-2 border-b-white hover:border-b-secondary">Contacto</a></li>
            </ul>
        </div>
        <div class="hidden lg:flex mr-4.5">
            <a href="" class=""><BsInstagram class="text-5xl"/></a>
            <a href="" class="w-36 h-12 border border-primary rounded-3xl flex justify-center items-center -mx-0.5 hover:bg-primary hover:text-white">Empresas</a>
            <a href="" class="w-36 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-white hover:text-primary">Donar</a>
        </div>

        <div class="lg:hidden">
            <MenuHamburguesa/>
        </div>
    </div>
  )
}

export default NavBar