import { useContext } from 'react'

import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

// contextHome
import { Context } from "../context/Context";

function Home() {
  const { theme } = useContext(Context)

  return (
    <>
      <div data-bs-theme={theme}>
        <Header />
        <Products />
      </div>
    </>
  );
}

export default Home;
