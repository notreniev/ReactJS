import React from "react";
import "./Home.css";
import ProductCard from "../product-card/ProductCard";
import Api from "../../services/api";
import loading from '../../assets/loading.gif'

class Home extends React.Component {
  state = {
    products: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
        loading: true
    });

    setTimeout(() => {
      this.fetchProducts();
    }, 3000);
  }

  fetchProducts = async () => {
    const api = new Api();
    const response = await api.get("http://localhost:3001/api/products");

    this.setState({
      products: response.data,
      loading: false
    });
  };

  render() {
    return (        
        <section className="home">
        {this.state.loading && 
        <div>
            Carregando... <img src={loading} />
        </div>} 

        <div className="product-list">
          {this.state.products.map(product => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.imageUrl}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Home;
