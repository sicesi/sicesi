import React from "react"

class Hook extends React.Component {
  render() {
    return (
      <div className="mb-16">
        <h1 className="text-4xl leading-none sm:text-5xl tracking-tight mt-4 md:mt-16 qhd:mt-32 mb-6 font-extrabold">
          <span className="text-sicesiBlue">Médias &amp;&nbsp;services</span>
          <br />
          <span className="text-gray-700">indépendants</span>
          <span className="text-sicesiOrange">.</span>
        </h1>
        <p className="mb-6 max-w-xl text-base md:text-lg text-gray-500">
          Spécialistes de l'
          <span className="highlight">édition web depuis 2006</span>, l'ajout de
          nouveaux médias à notre portfolio nous permet de servir une variété
          toujours plus grande d'utilisateurs.
        </p>
        <div className="flex align-start">
          <a
            href="#contact"
            aria-label="Accéder au formulaire de contact"
            className="transition duration-150 ease-in-out flex bg-gradient-to-b from-sicesiOrange to-orange-600 opacity-90 hover:opacity-100 text-white font-bold flex items-center justify-center py-2 px-7 border-0 border-transparent text-base font-medium rounded-full hover:bg-orange-600 md:text-lg"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    )
  }
}

export default Hook
