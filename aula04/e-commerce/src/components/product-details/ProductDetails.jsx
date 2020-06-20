import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import AddCheckout from "../add-checkout/AddCheckout";
import Currency from "../currency/Currency";
import Api from "../../services/api";

const ProductDetails = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const {id} = useParams()

  useEffect(() => {
    const api = new Api();

    api.get(`http://localhost:3001/api/products/${id}`).then(response => {
      const product = response.data;
      setName(product.title);
      setPrice(product.price);
      setDescription(product.description);
      setImage(product.imageUrl);
  })});

  return (
    <main className="product-details">
      <h1>Detalhes do produto</h1>
      <div className="content">
        <aside>
          <img src={image} alt="" />
          <div className="name">
              {name}
          </div>
          <div className="price">
            <Currency value={price} />
          </div>
          <AddCheckout /> &nbsp;
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </aside>

        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
