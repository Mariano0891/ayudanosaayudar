import React from "react";
import {BsInstagram, BsWhatsapp, BsEnvelopeAt} from 'react-icons/bs'

const Contacto = () => {
    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 rounded-lg shadow-lg max-w-[284px] lg:max-w-[783px] m-auto">
                <h2 className="font-bold text-2xl mb-8 lg:text-5xl lg:text-6xl text-center">Contactános</h2>
                <form action="#" className="space-y-8 ">
                    <div className="grid grid-cols-2">
                        <label for="name" className="mb-2 text-sm">Nombre/s*</label>
                        <label for="surname" className="mb-2 text-sm">Apellido/s*</label>
                        <input type="text" id="name" className="mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                        <input type="text" id="surname" className="mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                    </div>
                    <div className="grid grid-cols-2">
                        <label for="tel" className="mb-2 text-sm">Telefono*</label>
                        <label for="email" className="mb-2 text-sm">Email*</label>
                        <input type="number" id="tel" className="mr-2 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700" required/>
                        <input type="email" id="email" className="mr-2 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Escribe tu mensaje*</label>
                        <textarea id="mensaje" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-36 h-12 border border-primary rounded-3xl bg-primary text-white hover:bg-white hover:text-primary">Enviar</button>
                    </div>
                    
                </form>         
            </div>

            <div className="flex justify-center bg-tertiary w-full pt-20 z-0">
                <ul className="text-center m-6">
                    <li className="flex justify-start items-center "><BsInstagram className="m-2 text-3xl "/>@4ayudanos</li>
                    <li className="flex justify-start items-center "><BsEnvelopeAt className="m-2 text-3xl"/>contacto@mail.com</li>
                    <li className="flex justify-start items-center "><BsWhatsapp className="m-2 text-3xl"/>+54-1132135165151</li>
                </ul>
            </div>

            <div className="flex justify-center">
                <h2 class="font-bold text-2xl lg:text-6xl text-center m-12 max-w-[284px] lg:max-w-[920px]">Haz que tu donación cuente, <span class="bg-secondary">¡doná ahora!</span></h2>
            </div>
        </section>

       

        
    )

}


export default Contacto;