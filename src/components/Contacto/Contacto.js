import React, { useState, useEffect }  from "react";
import {BsInstagram, BsWhatsapp, BsEnvelopeAt} from 'react-icons/bs'
import "./Contacto.css"

const Contacto = () => {

    const [formValues, setFormValues] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        mensaje: "",
      });
    
      const [isFormValid, setIsFormValid] = useState(false);

      const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    

      useEffect(() => {
        const isFormEmpty = Object.values(formValues).some((value) => value === "");
        setIsFormValid(!isFormEmpty);
        setIsButtonDisabled(isFormEmpty);
      }, [formValues]);


    return (



        <section id="contacto" className="lg:mt-24">

            <div className="flex justify-center lg:my-8">
            <h2 className="font-bold text-2xl mb-8 lg:text-5xl lg:text-6xl text-center">Contáctanos</h2>
            </div>


            <div className="lg:grid lg:grid-cols-2 lg:content-center lg:bg-quaternary lg:mt-[40px] lg:max-h-[548px]">
                <div className="formContainer lg:order-last py-8 lg:py-16 px-4 rounded-xl shadow-xl max-w-[340px] lg:min-w-[680px] m-auto z-0 lg:ml-[-50px]">
                    <form action="https://formsubmit.co/ayudanos4ayudar@gmail.com" method="POST" className="space-y-8 lg:space-y-16" >
                        <div className="grid grid-cols-2">
                            <label for="name" className="mb-2 text-sm lg:text-2xl text-gray-900 ">Nombre/s*</label>
                            <label for="surname" className="mb-2 text-sm lg:text-2xl text-gray-900 ">Apellido/s*</label>
                            <input type="text" name="nombre" id="name" value={formValues.nombre} onChange={handleInputChange} required className="mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                            <input type="text" name="apellido" id="surname" value={formValues.apellido} onChange={handleInputChange} required  className="mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                        </div>
                        <div className="grid grid-cols-2">
                            <label for="tel" className="mb-2 text-sm lg:text-2xl text-gray-900 ">Telefono*</label>
                            <label for="email" className="mb-2 text-sm lg:text-2xl text-gray-900 ">Email*</label>
                            <input type="tel" name="telefono" id="tel" value={formValues.telefono} onChange={handleInputChange} required  className="mr-2 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700" />
                            <input type="email" name="email" id="email" value={formValues.email} onChange={handleInputChange} required  className="mr-2 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="mensaje" className="block mb-2 text-sm lg:text-2xl text-gray-900 ">Escribe tu mensaje*</label>
                            <textarea id="mensaje" name="mensaje" rows="3" value={formValues.mensaje} onChange={handleInputChange} required  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" disabled={isButtonDisabled} className="w-36 h-12 border border-primary rounded-3xl flex justify-center items-center bg-primary text-white hover:bg-forHover hover:border-forHover">Enviar</button>
                        </div>
                        
                    </form>          
                </div>
            
                    
                        <div className="flex justify-center pt-20 bg-quaternary mt-[-185px] lg:bg-transparent lg:justify-start lg:my-auto lg:min-h-[488px] lg:pt-0 lg:flex-col  ">
                            <p className="hidden font-bold lg:flex my-6 max-w-[390px] text-2xl text-center mx-auto my-4" >¿Tenés preguntas o comentarios sobre nuestra organización o nuestras iniciativas solidarias?</p>
                            <p className="hidden lg:flex my-6 max-w-[390px] text-2xl mx-auto my-4 text-center " >Por favor, contáctanos a través del siguiente formulario y te responderemos a la brevedad posible.</p>
                            <ul className="text-center mt-32 mb-12 items-center  lg:my-4 lg:items-start lg:m-auto ">
                                <li className="flex items-center lg:text-2xl text-lg"><a href="https://www.instagram.com/4yudar/" target="_blank" rel="noopener noreferrer" class=""><BsInstagram className=" text-3xl "/></a>4yudar</li>
                                <li className="flex items-center lg:text-2xl text-lg mx-1"><BsEnvelopeAt className="m-3 text-3xl"/>ayudanos4ayudar@gmail.com</li>
                                <li className="flex items-center lg:text-2xl text-lg"><a href=" https://wa.me/5491122788536" target="_blank" rel="noopener noreferrer" class=""><BsWhatsapp className=" text-3xl"/></a>+54 9 11 2278-8536</li>
                            </ul>
                        </div>
                        
                </div>
            

            <div className="flex justify-center lg:my-8">
                <h2 class="font-bold text-2xl lg:text-6xl text-center m-12 max-w-[284px] lg:max-w-[920px] lg:leading-[80px]">Hacé que tu donación cuente,<span class="bg-secondary my-4">¡doná ahora!</span> </h2> 
                
            </div>

            
        </section>

        

        
    )

}


export default Contacto;