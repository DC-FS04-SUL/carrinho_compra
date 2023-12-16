import { useContext } from "react";
import { Navigate } from "react-router-dom";
// contextHome
import { Context } from "../context/Context";

function Login() {
  const { login, validAuth } = useContext(Context);

  const iniciarLogin = (email, senha) => {
    login(email, senha);
  };

  return (
    <>
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
