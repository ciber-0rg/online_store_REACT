import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCartCard from '../components/ProductCartCard';
import ButtonShopCart from '../components/ButtonShopCart';

class ShoppingCart extends React.Component {
  state = {
    newCartList: [],
  };

  componentDidMount() {
    const { cartList } = this.props;
    this.setState({ newCartList: cartList });
  }

  handleDeleteItem = (itemID) => {
    const { newCartList } = this.state;
    const filterCartList = newCartList.filter(({ id }) => id !== itemID);
    this.setState({ newCartList: filterCartList });
  }

  render() {
    const { newCartList } = this.state;

    return (
      <div>
        { !newCartList.length ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </p>) : (
          newCartList.map(
            (product) => (
              <ProductCartCard
                key={ product.id }
                { ...product }
                handleDeleteItem={ (id) => this.handleDeleteItem(id) }
              />),
          ))}

        <ButtonShopCart />

        <Link to="/checkout" data-testid="checkout-products">
          <button type="button"> Checkout </button>
        </Link>

      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ShoppingCart;
