import React from "react";
import './ProductForm.css'
import { Link } from 'react-router-dom'

const ProductForm = () =>
  <section className="form">
    <form>
      <h1>Novo produto</h1>

      <div className="row">
        <label>Nome do produto</label>
      </div>

      <div className="row">
        <label>Preço</label>
        <input type="text" />
      </div>

      <div className="row">
          <label>Desrição</label>
          <textarea cols="30" rows="10"></textarea>
      </div>
      <button>Salvar</button> &nbsp;
      <Link to="/"><button>Cancelar</button></Link>
    </form>
  </section>

export default ProductForm