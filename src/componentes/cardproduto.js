import React from 'react';
import { Link } from 'react-router-dom';
import './cardproduto.css';

function ProdutoCard({ produto }) {
  return (
    <Link to={`/produto/${produto.id}`} className="card-link">
      <div className="card">
        <img src={produto.imagem} alt={produto.nome} />
        <div className="card-body">
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p className="preco">R$ {produto.preco}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProdutoCard;