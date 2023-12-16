import { useContext } from "react";
import { Navigate } from "react-router-dom";
// contextHome
import { Context } from "../context/Context";


/*
  TODO::
    Logica de login.
    Logica de cadastrar.
    Logica de endereço.
*/


function Login() {
  const { login, validAuth } = useContext(Context);

  const iniciarLogin = (email, senha) => {
    login(email, senha);
  };

  return (
    <>
    {/* navigation */}
      {validAuth ? <Navigate to="/" /> : <></>}

      <h1> {validAuth ? "Logado" : "Fazer Login"}</h1>

      <button onClick={() => iniciarLogin("chico", "1234")}>
        {" "}
        Evento de Login{" "}
      </button>
    </>
  );
}

export default Login;
