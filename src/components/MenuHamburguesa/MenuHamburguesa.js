import React, { useState } from 'react'
import './MenuHamburguesaStyles.css'
import {BsInstagram} from 'react-icons/bs'

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={`menuLinks ${isOpen && "open"}`}>
                <a href="" className="navLink">Nosotros</a>
                <a href="" className="navLink">Nuestras Causas</a>
                <a href="" className="navLink">Testimonios</a>
                <a href="" className="navLink">Contacto</a>
                <a href="" className="iconButton"><BsInstagram class="text-3xl"/></a>
                <a href="" className="button">Empresas</a>
                <a href="" className="button">Donar</a>
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