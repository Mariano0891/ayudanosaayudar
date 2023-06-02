import React from 'react'

const Causas = () => {
    const conjuntoCausas = [
        {nombre: "Soles en el camino", descripcion: "Soles en el Camino es una Asociación Civil sin fines de lucro que sostiene el Hogar de Niños para 25 niñas y adolescentes en situación de vulnerabilidad. Un equipo amplio y profesional brinda atención integral y apoyo emocional y afectivo en un ambiente familiar seguro.", imagen: "https://www.instagram.com/p/CnFv5vFPWz9/" , link: "https://www.instagram.com/p/CnFv5vFPWz9/"},
        {nombre: "Rifa con causa", descripcion: "Nuestra rifa solidaria en colaboración con varias marcas, con el objetivo de recaudar fondos para arreglar las filtraciones de los techos del Hogar", imagen: "https://www.instagram.com/p/CovGnmHP80i/" , link: "https://www.instagram.com/p/CovGnmHP80i/"},
        {nombre: "Evento solidario", descripcion: "Se realizó un evento de recaudación de fondos. Una tarde llena de entretenimiento, subastas, rifas y actividades especiales mientras ayudamos a mejorar la vida de niños necesitados.", imagen: "https://www.instagram.com/p/Cp6MtDdgZUp/" , link: "https://www.instagram.com/p/Cp6MtDdgZUp/"},
    ]
  return (
    <div id='causas'>
      <div>
        <h2 class="font-bold text-2xl md:text-5xl lg:text-6xl text-center"><span class="bg-secondary">Nuestras</span> causas</h2>
      </div>
      <div class="hidden md:flex flex-wrap m-11 md:m-20">
            {conjuntoCausas.map(causa => (
                <div class="flex inline w-11/12 mx-auto mb-16">
                  <div class="w-1/2 self-center">
                    <h3 class="font-bold text-start my-4 text-xl">{causa.nombre}</h3>
                    <p class="my-4">{causa.descripcion}</p>
                    <a href={causa.link} target="_blank" rel="noopener noreferrer" class="w-28 md:w-36 h-12 border border-primary rounded-3xl flex justify-center items-center hover:bg-forHover hover:border-forHover hover:text-white">Conocer más</a>
                  </div>  
                    <img src={causa.imagen} alt={causa.nombre} class="h-72 w-1/2 p-10 border border-black"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Causas