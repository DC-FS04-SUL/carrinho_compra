const apiMercadoLivre = async (query) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  const data = await response.json();
  // Resulte tem todos os produtos
  return data.results;
};

export default apiMercadoLivre;
