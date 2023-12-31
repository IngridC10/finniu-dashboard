import React from 'react'
import LogoFinniu from '../images/LogoFinniu.png';
const OnBoardingComponent = () => {
  return (
    <div className="on-boarding">
      <header className='header-container'>
        <img src={LogoFinniu} alt="Imagen de login" />
        <button>Iniciar Sesión</button>
      </header>
      <section className="body-text" >
        <h1>Somos tu aliado para un futuro financiero estable</h1>
        <h2>Brindamos soluciones financieras con una asesoría personalizada</h2>
        <button> Quiero Conversar</button>
      </section>
    </div>
  );
}

export default OnBoardingComponent
