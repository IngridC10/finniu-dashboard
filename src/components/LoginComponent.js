import React, { useState } from 'react';
import { useMutation,gql } from '@apollo/client';
import client from '../client';
import LogoFinniu from '../images/LogoFinniu.jpg';

const GET_USER_MUTATION = gql`
  mutation getUser($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [getUser] = useMutation(GET_USER_MUTATION, {
    client, // Asigna tu cliente Apollo aquí
  });

  const handleLogin = async () => {
    try {
      const response = await getUser({
        variables: { email, password },
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <img src={LogoFinniu} alt="Imagen de login" />
      <h1>Hola,ingresa a tu cuenta</h1>
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