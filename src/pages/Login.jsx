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

      {/* div container */}
      <div className="main-login">
        {/* div da parte direita da tela do login */}
        <div className="right-login">
          {/* Card de login */}
          <div className="card-login">
            <h1>LOGIN</h1>
            {/* Local onde o usuario colocará o seu login */}
            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input type="text" name="usuario" placeholder="Usuário" />
            </div>
            <div className="textfield">
              <label htmlFor="usuario">Senha</label>
              <input type="password" name="Senha" placeholder="Senha" />
            </div>
            <button className="btn-login"  onClick={() => iniciarLogin("chico", "1234")} >Login</button>
          </div>
        </div>
      </div>

      <h1 className="d-none"> {validAuth ? "Logado" : "Fazer Login"}</h1>

    </>
  );
}

export default Login;
