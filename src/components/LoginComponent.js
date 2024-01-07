import LogoFinniu from "../images/LogoFinniu.png";
import styled from "styled-components";
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  }

  .login {
    display: flex;
    flex-direction: column;
  }

  .login img {
    width: 261px;
    height: 127px;
    align-self: center;
    margin-button: 15px;
  }

  .login h1 {
    font-size: 32px;
    font-weight: normal;
  }

  .login input {
    margin: 15px;
    align-self: center;
    width: 498px;
    height: 45px;
    border-radius: 26px;
    border: 1.9px solid rgba(162, 230, 250, 1);
  }
  .login h2 {
    font-size: 16px;
    font-weight: normal;
    display: flex;
    justify-content: flex-end;
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

  .savePasswordSection {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h2>¿Olvidaste tu contraseña?</h2>
          <div className="savePasswordSection">
            <h2>Cuadrado</h2>
            <h2>Guardar mis credenciales para los futuros ingresos</h2>
          </div>
          <button onClick={handleLogin}>Entrar</button>
          <h3>¿Aún no tienes una cuenta?</h3>
        </div>
      </div>
    </LoginComponentStyled>
  );
};

export default LoginComponent;

// import React, { useState } from "react";
// import { useMutation, gql } from "@apollo/client";
// import LogoFinniu from "../images/LogoFinniu.png";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faSquare } from "@fortawesome/free-solid-svg-icons";
// const AppContainer = styled.div`
//   background: linear-gradient(rgba(219, 247, 255, 1), rgba(255, 238, 221, 0));
// `;

// const LOGIN_USER = gql`
//   mutation TokenAuth($email: String!, $password: String!) {
//     tokenAuth(email: $email, password: $password) {
//       token
//     }
//   }
// `;

// const LoginComponent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginUser] = useMutation(LOGIN_USER);

//   const handleLogin = async () => {
//     try {
//       const { data: loginResponse } = await loginUser({
//         variables: { email, password },
//       });

//       if (loginResponse?.tokenAuth?.token) {
//         console.log("Inicio de sesión exitoso. Redirigiendo...");
//       } else {
//         console.log("Credenciales incorrectas o usuario no encontrado");
//       }
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <AppContainer>
//       <LoginContainer>
//         <LoginForm>
//           <LogoImage src={LogoFinniu} alt="Imagen de login" />
//           <Title>Hola, ingresa a tu cuenta</Title>
//           <LoginInput
//             type="text"
//             placeholder="Correo electrónico"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div style={{ position: "center", width: "100%" }}>
//             <LoginInput
//               type={showPassword ? "text" : "password"}
//               placeholder="Contraseña"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <EyeIcon onClick={togglePasswordVisibility}>
//               <FontAwesomeIcon icon={faEye} />
//             </EyeIcon>
//           </div>
//           <div>
//             <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
//           </div>
//           <Save>
//             <div>
//               {" "}
//               <FontAwesomeIcon icon={faSquare} />{" "}
//               <p>Guardar mis credenciales para los futuros ingresos</p>
//             </div>
//           </Save>

//           <LoginButton type="button" onClick={handleLogin}>
//             Entrar
//           </LoginButton>
//           <NoAccount>¿Aún no tienes una cuenta?</NoAccount>
//         </LoginForm>
//       </LoginContainer>
//     </AppContainer>
//   );
// };
// export default LoginComponent;
