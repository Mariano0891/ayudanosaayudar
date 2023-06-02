import React from "react";
import LogoBlanco from '../assets/logos/LogoBlanco.png'
import {BsInstagram, BsWhatsapp, BsEnvelopeAt} from 'react-icons/bs'

const Footer = () => {
    return (

    <footer className="bg-primary md:flex md:justify-between md:items-center">

        <div className="flex justify-center mx-8">
            <img src={LogoBlanco} alt="" className="w-32 m-6 md:w-48"/>
        </div>

        <div className="flex justify-center mx-8">
            <ul className="m-6">
                <li><a href="#nosotros" class="flex justify-start text-white hover:border-b-secondary ">Nosotros</a></li>
                <li><a href="#causas" class="flex justify-start text-white hover:border-b-secondary">Nuestras Causas</a></li>
                <li><a href="#testimonio" class="flex justify-start text-white hover:border-b-secondary">Testimonios</a></li>
                <li><a href="#contacto" class="flex justify-start text-white hover:border-b-secondary">Contacto</a></li>
            </ul>
        </div>

        <div className="flex justify-center mx-8">
            <ul className="text-center m-6">
                <li className="flex justify-start items-center text-white"><BsInstagram class="m-2 text-3xl "/>@4ayudanos</li>
                <li className="flex justify-start items-center text-white"><BsEnvelopeAt class="m-2 text-3xl"/>contacto@mail.com</li>
                <li className="flex justify-start items-center text-white"><BsWhatsapp class="m-2 text-3xl"/>+54-1132135165151</li>
            </ul>
        </div>

        <div className="flex justify-center mx-8">
            <h3 className="m-6 font-bold text-2xl text-center text-white max-w-[317px]">
                Hagamos la diferencia juntos ayudando!
            </h3>
        </div>

    </footer>
)
}


export default Footer;