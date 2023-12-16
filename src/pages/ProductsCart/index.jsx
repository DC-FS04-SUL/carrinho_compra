import { useContext, useEffect, useState } from "react";
import "./ProductsCart.css";
import Header from "../../components/Header/Header";
import VisualisarItens from "../../components/VisualisarItens";

// contextHome
import { Context } from "../../context/Context";

function ProductsCart() {
  const { theme, itensCarrinho, converte_real } = useContext(Context);

  /*
    TODO::
    Validar produtos repetidos na lista.
    Validar se tem produtos no carrinho.
  */

  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    calcularProdutos();
  }, []);

  const calcularProdutos = () => {
    let soma = 0;

    for (let index = 0; index < itensCarrinho.length; index++) {
      (soma += itensCarrinho[index].price),
        console.log(soma, itensCarrinho[index].price);
    }

    setValorTotal(soma);
  };

  const validarPagamento = () => {
    /*
      TODO::
      Validar se o usuario está logado e contem endereço.
      Validar sem tem produto.
    */
  }

  return (
    <main data-bs-theme={theme}>
      <Header />
      <section className="container text-center">
        <div className="row">
          <div className="col-8">
            <div className="container text-center">
              <div className="row">
                {itensCarrinho.map((element) => (
                  // <p key={element.id}>{element.title}</p>
                  <VisualisarItens key={element.id} item={element} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card card-valor-produto m-3">
              <div className="card-body">
                <h5 className="card-title">RESUMO</h5>
                <p className="card-text">
                  Valor dos Produtos: {converte_real(valorTotal)}
                </p>
                <button onClick={validarPagamento} href="#" className="btn btn-success">
                  IR PARA O PAGAMENTO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsCart;
