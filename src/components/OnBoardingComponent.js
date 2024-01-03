import React from 'react'
import LogoFinniu from '../images/LogoFinniu.png';
const OnBoardingComponent = () => {
  return (
    <div className="on-boarding">
      <header style={{display:'flex',alignItems:'center'}}>
        <img style={{width:'140px',float:'left'}}src={LogoFinniu} alt="Imagen de login" />
        <button    style={{width:'140px',maxWidth:'unset',height:'35px',fontWeight:'normal',marginLeft:'auto',marginRight:'70px',borderRadius:'20px'}}>Iniciar Sesión</button>
      </header>
      <section style={{display:'flex',flexDirection:'column',alignItems:'flex-start',fontSize:'35px',width:'657px',textAlign:'justify'}} >
        <h1 style={{color:'rgba(13, 58, 92, 1)',width:'550px'}}>Somos tu aliado para un futuro financiero estable</h1>
        <h2 style={{fontSize:'32px',width:'550px',textAlign:'justify',marginTop:'5px',fontWeight:'normal'}}>Brindamos soluciones financieras con una asesoría personalizada</h2>
        <button style={{width:'140px',height:'43px',maxWidth:'unset',fontWeight:'normal',marginTop:'20px',borderRadius:'20px'}}> Quiero Conversar</button>
      </section>
    </div>
  );
}

export default OnBoardingComponent
