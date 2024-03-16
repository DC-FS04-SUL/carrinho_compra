import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

// contextHome
import { Context } from "../context/Context";

function Home() {
  const { theme, cliente, validAuth } = useContext(Context);

  return (
    <>
      {!validAuth ? <Navigate to="/login" /> : <></>}
      <div data-bs-theme={theme}>
        <Header />
        <Products />
      </div>
    </>
  );
}

export default Home;
