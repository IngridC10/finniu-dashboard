import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import LogoFinniu from "../images/LogoFinniu.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSquare } from "@fortawesome/free-solid-svg-icons";

const LogoImage = styled.img`
  width: 170px;
  height: 70px;
`;
const LoginContainer = styled.div`
  padding: 20px;
  min-height: 100vh; /* Cambiado a min-height para asegurar el llenado del viewport */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(219, 247, 255, 1), rgba(255, 238, 221, 0));
`;

const LoginForm = styled.form`
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;

  @media screen and (max-width: 768px) {
    /* Cambios para pantallas más pequeñas */
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 2em; /* Cambiado a unidades em para adaptarse mejor */
  font-weight: normal;
  width: 80%;
  margin-bottom: 3px;
  padding-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 300px;
  height: 23px;
  border-radius: 26px;
  border: 1.9px solid rgba(162, 230, 250, 1);
`;

const ForgotPassword = styled.p`
  margin-left: auto;
  margin-right: 45px;
  max-width: 80%;
  font-size: 10px;
  margin-top: -10px;
  text-align: right;
`;

const NoAccount = styled.p`
  font-size: 13px;
  margin-top: 8px;
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin-top: -10px;
  gap: 9px;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 60px;
  top: 26px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  border-radius: 20px;
  background-color: rgba(13, 58, 92, 1);
  font-weight: bold;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 25px;
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
    <LoginContainer>
      <LoginForm>
        <LogoImage src={LogoFinniu} alt="Imagen de login" />
        <Title>Hola, ingresa a tu cuenta</Title>
        <LoginInput
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ position: "center", width: "100%" }}>
          <LoginInput
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <EyeIcon onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={faEye} />
          </EyeIcon>
        </div>
        <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
        <Save>
          <FontAwesomeIcon icon={faSquare} />
          <p>Guardar mis credenciales para los futuros ingresos</p>
        </Save>

        <LoginButton type="button" onClick={handleLogin}>
          Entrar
        </LoginButton>
        <NoAccount>¿Aún no tienes una cuenta?</NoAccount>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginComponent;
