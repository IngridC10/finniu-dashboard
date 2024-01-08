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

    
    @media (max-width: 375px) {
       .container{
        width:345px;  
       }
        h1{
        font-size:10px;
       }

    }
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


  .login {
    display: flex;
    flex-direction: column;
  }

  .login img {
    width: 261px;
    height: 127px;
    align-self: center;
    margin-bottom: 15px;
  }

  .login h1 {
    font-size: 32px;
    font-weight: normal;
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
  }
  .login h2 {
    font-size: 16px;
    font-weight: normal;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
  }
  .login h3 {
    font-size: 24px;
    font-weight: normal;
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
  }

  .password {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .savePasswordSection {
    gap: 3%;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-left: 25px;
  }

  span {
    color: white;
    border: 2px solid black;
    border-radius: 13%;
    font-size: 20px;
    width: 16px;
    height: 18px;
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
            style={{ fontSize: "20px" }}
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password">
            <input
              style={{ fontSize: "20px" }}
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
            <span>
              <FontAwesomeIcon icon={faSquare} />
            </span>
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
