import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonShopCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}
