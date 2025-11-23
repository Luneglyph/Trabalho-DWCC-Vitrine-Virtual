import ProdutoCard from '../componentes/cardproduto';
import produtos from '../dados/produtos';
import './home.css';

function Home() {
  return (
    <div className="home">
      {/* titulo da pagina */}
      <header className="header">
        <h1>Vitrine de Produtos</h1>
        <p>Produtos Disponíveis</p>
      </header>

      {/* lista de produtos grid */}
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Home;