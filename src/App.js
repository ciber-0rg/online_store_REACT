import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  state={
    cartList: [],
  }

  addToCart = async (productObj) => {
    const { cartList } = this.state;
    this.setState({ cartList: [...cartList, productObj] });
    alert('Produto foi adicionado ao carrinho!');
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Search
                  { ...this.state }
                  { ...props }
                  shoppingCartBtn={ this.shoppingCartBtn }
                  addToCart={ this.addToCart }
                />) }
            />
            <Route
              path="/shoppingCart"
              render={ () => (
                <ShoppingCart { ...this.state } />) }
            />
            <Route
              path="/productDetails/:id"
              render={ (props) => (
                <ProductDetails
                  { ...this.state }
                  { ...props }
                  addToCart={ this.addToCart }
                />) }
            />
            <Route
              path="/checkout"
              render={ (props) => (
                <Checkout
                  { ...props }
                  { ...this.state }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
