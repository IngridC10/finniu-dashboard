import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LogoFinniu from '../images/LogoFinniu.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(124.23deg, #A2E6FA 10.66%, #98CCFE 30.08%);
  }
`;

const OnBoardingWrapper = styled.div`
  .on-boarding {
    header {
      display: flex;
      align-items: center;
      padding:20px;

      img {
        width: 140px;
        float: left;
      }

      button {
        width: 140px;
        max-width: unset;
        height: 35px;
        font-weight: normal;
        margin-left: auto;
        margin-right: 70px;
        border-radius: 20px;
        background-color: rgba(13, 58, 92, 1);
        color:white;

      }
    }

    section {
      padding:20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 35px;
      width: 657px;
      text-align: justify;

      h1 {
        color: rgba(13, 58, 92, 1);
        width: 550px;
      }

      h2 {
        font-size: 32px;
        width: 550px;
        text-align: justify;
        margin-top: 5px;
        font-weight: normal;
      }

      button {
        width: 140px;
        height: 43px;
        max-width: unset;
        font-weight: normal;
        margin-top: 20px;
        border-radius: 20px;
        color:white;
        background: rgba(13, 58, 92, 1);

      }
    }
  }
`;

const OnBoardingComponent = () => {
  return (
    <OnBoardingWrapper>
      <GlobalStyle/>
      <div className="on-boarding">
        <header>
          <img src={LogoFinniu} alt="Imagen de login" />
          <button>Iniciar Sesión</button>
        </header>
        <section>
          <h1>Somos tu aliado para un futuro financiero estable</h1>
          <h2>Brindamos soluciones financieras con una asesoría personalizada</h2>
          <button>Quiero Conversar</button>
        </section>
      </div>
    </OnBoardingWrapper>
  );
};

export default OnBoardingComponent;