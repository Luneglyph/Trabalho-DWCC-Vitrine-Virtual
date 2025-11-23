import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/home';
import DetalheProduto from './paginas/detalheproduto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<DetalheProduto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;