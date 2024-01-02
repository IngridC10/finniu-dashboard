import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import LogoFinniu from '../images/LogoFinniu.png';

const LOGIN_USER = gql(`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`);
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
        // Aquí podrías redirigir al usuario a la página deseada
      } else {
        console.log('Credenciales incorrectas o usuario no encontrado');
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="container">
    <img src={LogoFinniu} alt="Imagen de login" />
    <h1>Hola, ingresa a tu cuenta</h1>
    <input
      type="text"
      placeholder="Correo electrónico"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <p className="first-paragraph">¿Olvidaste tu contraseña? </p>
    <button type="button" onClick={handleLogin}>
      Entrar
    </button>
    <p className="second-paragraph">¿Aún no tienes una cuenta?</p>
  </div>
);
};

export default LoginComponent;