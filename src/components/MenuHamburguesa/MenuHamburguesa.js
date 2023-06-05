import React, { useState } from 'react'
import './MenuHamburguesaStyles.css'
import {BsInstagram} from 'react-icons/bs'

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={`menuLinks ${isOpen && "open"}`}>
                <a href="#nosotros" className="navLink" onClick={ () => setIsOpen(false)}>Nosotros</a>
                <a href="#causas" className="navLink" onClick={ () => setIsOpen(false)}>Nuestras Causas</a>
                <a href="#testimonios" className="navLink" onClick={ () => setIsOpen(false)}>Testimonios</a>
                <a href="#contacto" className="navLink" onClick={ () => setIsOpen(false)}>Contacto</a>
                <a href="https://www.instagram.com/4yudar/" target="_blank" rel="noopener noreferrer" className="iconButton" onClick={ () => setIsOpen(false)}><BsInstagram class="text-3xl"/></a>
                <a href="#empresas" className="button" onClick={ () => setIsOpen(false)}>Empresas</a>
                <a href="#donar" className="button" onClick={ () => setIsOpen(false)}>Donar</a>
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