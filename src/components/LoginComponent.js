import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import LogoFinniu from '../images/LogoFinniu.png';
import styled from 'styled-components';

const LOGIN_USER = gql(`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`);
const LogoImage = styled.img`
  width: 190px;
  height: 90px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: normal;
  width: 340px;
  height: 42px;
  margin-bottom: 3px;
  padding-bottom:20px;
`;
const LoginContainer = styled.div`
  padding: 20px;
  height: 100vh; 
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(219, 247, 255, 1), rgba(255, 238, 221, 0));
`;

const LoginForm = styled.div`
  width: 90%; /* Ancho del formulario */
  max-width: 400px; /* Máximo ancho del formulario */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;

`;

const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  height: 23px;
  border-radius: 26px;
  border: 1.9px solid rgba(162, 230, 250, 1);
`;

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  border-radius: 20px;
  background-color: rgba(13, 58, 92, 1);
  font-weight: bold;
`;

const ForgotPassword = styled.p`
margin-left: auto; 
margin-right: 40px; 
max-width: 80%;
font-size: 10px;
margin-top: -10px;
text-align: right; 
`;

const NoAccount = styled.p`
  font-size: 16px;
  margin-top: 8px;
`;






const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      const { data: loginResponse } = await loginUser({
        variables: { email, password },
      });

      if (loginResponse?.tokenAuth?.token) {
        console.log('Inicio de sesión exitoso. Redirigiendo...');
        
      } else {
        console.log('Credenciales incorrectas o usuario no encontrado');
  
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);

    }
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
        <LoginInput
          type="text"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPassword>
          ¿Olvidaste tu contraseña?
        </ForgotPassword>
        <LoginButton type="button" onClick={handleLogin}>
          Entrar
        </LoginButton>
        <NoAccount>
          ¿Aún no tienes una cuenta?
        </NoAccount>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginComponent;