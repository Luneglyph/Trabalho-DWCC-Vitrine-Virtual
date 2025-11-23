// src/pages/DetalheProduto.js
import React, {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import produtos from '../dados/produtos';
import './detalheproduto.css';

function DetalheProduto() {
  const { id } = useParams();
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  
  // busca o produto pelo id
  const produto = produtos.find(p => p.id === parseInt(id));

  // funcao para buscar cep usando api do viacep
  const buscarCep = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          setCidade('CEP ñ encontrado');
        } else {
          setCidade(data.localidade);
        }
      } catch (error) {
        setCidade('erro ao buscar CEP');
      }
    }
  };

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="detalhe">
      {/* botao voltar */}
      <Link to="/" className="btn-voltar">← Voltar</Link>

      <div className="detalhe-container">
        {/* imagem do produto */}
        <div className="detalhe-imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        {/* informacoes do produto */}
        <div className="detalhe-info">
          <h1>{produto.nome}</h1>
          <p className="fabricante">Fabricante: {produto.fabricante}</p>
          <p className="preco">R$ {produto.preco}</p>
          <p className="descricao">{produto.descricao}</p>

          {/* especificacoes */}
          <div className="especificacoes">
            <h3>Especificações:</h3>
            <ul>
              {produto.especificacoes.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* buscar cep */}
          <div className="cep-container">
            <h3>Calcular Frete:</h3>
            <div className="cep-input">
              <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength="8"
              />
              <button onClick={buscarCep}>Buscar</button>
            </div>
            {cidade && <p className="cidade">Cidade: {cidade}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalheProduto;