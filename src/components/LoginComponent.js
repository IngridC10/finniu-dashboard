import LogoFinniu from "../images/LogoFinniu.png";
import styled from "styled-components";
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginComponentStyled = styled.div`
  &.bodyLogin {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(219, 247, 255, 1), rgba(255, 238, 221, 0));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container {
    margin: auto;
    width: 835px;
    height: 759px;
    background: white;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 340px;
      height: 500px;
      border-radius: 30px;
    }
  }

  .login {
    display: flex;
    flex-direction: column;
  }

  .login img {
    width: 261px;
    height: 127px;
    align-self: center;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      width: 130px;
      height: 70px;
    }
  }

  .login h1 {
    font-size: 32px;
    font-weight: normal;

    @media (max-width: 768px) {
      font-size: 23px;
    }
  }

  input {
    font-size: 22px;
  }

  .login input {
    margin: 15px;
    align-self: center;
    padding-left: 22px;
    width: 498px;
    height: 60px;
    border-radius: 26px;
    border: 1.9px solid rgba(162, 230, 250, 1);
    margin-top: 35px;
    font-size: 20px;

    @media (max-width: 768px) {
      width: 220px;
      height: 30px;
      font-size: 13px;
      margin-top: 17px;
    }
  }

  .login h2 {
    font-size: 16px;
    font-weight: normal;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;

    @media (max-width: 768px) {
      font-size: 12px;
      margin-right: 12px;
    }
  }

  .login h3 {
    font-size: 24px;
    font-weight: normal;
    padding-top: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .login button {
    width: 184px;
    height: 48px;
    color: white;
    border-radius: 20px;
    background-color: rgba(13, 58, 92, 1);
    font-weight: bold;
    font-size: 18px;
    align-self: center;

    @media (max-width: 768px) {
      width: 120px;
      height: 30px;
      font-size: 13px;
    }
  }

  .password {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .savePasswordSection {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-left: 25px;

    @media (max-width: 768px) {
      font-size: 9px;
      margin-bottom: 0px;
      margin-left: 0px;
    }
  }

  .icon svg {
    @media (max-width: 768px) {
      margin-left: -58px !important;
      margin-bottom: 4px !important;
      padding-top: 12px !important;
      height: 15px !important;
    }
  }

  .savePasswordSection input {
    width: 30px;
    height: 22px;
    border-radius: 15px;
    border: 1px solid #0d3a5c;
    margin-top: 15px;
    color: red;
  }
`;

const LOGIN_USER = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      const { data: loginResponse } = await loginUser({
        variables: { email, password },
      });

      if (loginResponse?.tokenAuth?.token) {
        console.log("Inicio de sesión exitoso. Redirigiendo...");
      } else {
        console.log("Credenciales incorrectas o usuario no encontrado");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginComponentStyled className="bodyLogin">
      <div className="container">
        <div className="login">
          <img src={LogoFinniu} alt="logo" />
          <h1>Hola, ingresa a tu cuenta</h1>
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon">
              <FontAwesomeIcon
                style={{
                  float: "left",
                  marginLeft: "-78px",
                  marginBottom: "-4px",
                  paddingTop: "25px",
                  width: "25px",
                  height: "30px",
                }}
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <h2>¿Olvidaste tu contraseña?</h2>
          <div className="savePasswordSection">
            <input type="checkbox" id="myCheckbox" />
            <label htmlfor="myCheckbox"></label>
            <p>Guardar mis credenciales para los futuros ingresos</p>
          </div>
          <button onClick={handleLogin}>Entrar</button>
          <h3>¿Aún no tienes una cuenta?</h3>
        </div>
      </div>
    </LoginComponentStyled>
  );
};

export default LoginComponent;
