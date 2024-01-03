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
        
      } else {
        console.log('Credenciales incorrectas o usuario no encontrado');
  
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);

    }
  };

  return (
  <div style={{ padding: '20px', width:"100%",boxSizing:'border-box'}}>
    <div style={{ maxWidth: '500px',
    height: '400px',
    borderRadius: '20px',
    margin: '0 auto',
    display: 'flex',
    background: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }}>
    <img src={LogoFinniu} alt="Imagen de login" style={{ width: '200px',height: "90px" }} />
    <h1 style={{fontSize:'22px',fontWeight:'normal',width:'340px',height:'42px',  marginBottom: '3px',}}>Hola, ingresa a tu cuenta</h1>
    <input
      type="text"
      placeholder="Correo electrónico"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        maxWidth: '300px',
        height: '23px',
        borderRadius: '26px',
        border: '1.9px solid rgba(162, 230, 250, 1)',
      }}
    />
    <input
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        maxWidth: '300px',
        height: '23px',
        borderRadius: '26px',
        border: '1.9px solid rgba(162, 230, 250, 1)',
      }}
    />
       <p style={{
        marginLeft: 'auto',
        marginRight: '90px',
        maxWidth: '80%',
        fontSize: '10px',
        marginTop: '8px'
      }}>
        ¿Olvidaste tu contraseña?
      </p>
     <button type="button" onClick={handleLogin}
      style={{
        width: '110px',
        height: '30px',
        color: 'white',
        borderRadius: '20px',
        backgroundColor: 'rgba(13, 58, 92, 1)',
        fontWeight: 'bold',
      }}
    >
      Entrar
    </button>
    <p style={{
      marginBottom: '10px' // Asegúrate de que el valor esté entre comillas
      }}>¿Aún no tienes una cuenta?
    </p>
  </div>
</div>
);
};

export default LoginComponent;