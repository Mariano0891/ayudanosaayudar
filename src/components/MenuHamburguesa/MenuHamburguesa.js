import React, { useState } from 'react'
import './MenuHamburguesaStyles.css'
import {BsInstagram} from 'react-icons/bs'

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={`menuLinks ${isOpen && "open"}`}>
                <a href="#nosotros" className="navLink">Nosotros</a>
                <a href="#causas" className="navLink">Nuestras Causas</a>
                <a href="#testimonios" className="navLink">Testimonios</a>
                <a href="#contacto" className="navLink">Contacto</a>
                <a href="https://www.instagram.com/4yudar/" target="_blank" rel="noopener noreferrer" className="iconButton"><BsInstagram class="text-3xl"/></a>
                <a href="#empresas" className="button">Empresas</a>
                <a href="#donar" className="button">Donar</a>
            </div>
            <div className={`menuToggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default MenuHamburguesa