import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails';
import ProductForm from './components/product-form/ProductForm';
import Checktout from './components/checkout/Checkout'

import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/produtos/novo" component={ProductForm} />
        </Switch>

        <Checktout />
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
