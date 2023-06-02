import React from 'react'
import logo from '../assets/logos/Logo.png'
import MenuHamburguesa from './MenuHamburguesa/MenuHamburguesa'
import {BsInstagram} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div id="home" class="h-24 flex justify-between items-center border-b border-b-primary bg-white">
        <div>
            <a href="#home"><img src={logo} alt="" class="h-10 sd:h-12 ml-4 lg:ml-4.5"/></a>
        </div>
        <div class="hidden lg:flex">
            <ul class="flex">
                <li><a href="#nosotros" class="border-b-2 border-b-white hover:border-b-secondary">Nosotros</a></li>
                <li><a href="#causas" class="border-b-2 border-b-white hover:border-b-secondary">Nuestras Causas</a></li>
                <li><a href="#testimonios" class="border-b-2 border-b-white hover:border-b-secondary">Testimonios</a></li>
                <li><a href="#contacto" class="border-b-2 border-b-white hover:border-b-secondary">Contacto</a></li>
            </ul>
        </div>
        <div class="hidden lg:flex mr-4.5">
            <a href="https://www.instagram.com/4yudar/" target="_blank" rel="noopener noreferrer" class=""><BsInstagram class="text-5xl"/></a>
            <a href="#empresas" class="w-36 h-12 border border-primary rounded-3xl flex justify-center items-center -mx-0.5 hover:bg-forHover hover:text-white hover:border-forHover">Empresas</a>
            <a href="#donar" class="w-36 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-forHover hover:border-forHover">Donar</a>
        </div>

        <div class="lg:hidden">
            <MenuHamburguesa/>
        </div>
    </div>
  )
}

export default NavBar