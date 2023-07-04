import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import FormCheckout from '../components/FormCheckout';

class Checkout extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <h4>Revise seus produtos:</h4>
        <ShoppingCart cartList={ cartList } />
        <FormCheckout />
        <button type="button"> Finalizar Compra </button>
      </div>

    );
  }
}
Checkout.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Checkout;
