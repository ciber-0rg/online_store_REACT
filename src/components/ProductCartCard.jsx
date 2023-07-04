import React from 'react';
import PropTypes from 'prop-types';

class ProductCartCard extends React.Component {
  state={
    quantity: 1,
    disabled: false,
  }

  disableButton = () => {
    const { available_quantity: maxQuantity } = this.props;
    const { quantity } = this.state;
    if (quantity >= maxQuantity) this.setState({ disabled: true });
  }

  changeQuantityUp = () => {
    this.setState((prev) => ({ quantity: prev.quantity + 1 }), this.disableButton);
  }

  changeQuantityDown = () => {
    const { quantity } = this.state;
    if (quantity !== 1) {
      this.setState((prev) => ({ quantity: prev.quantity - 1 }));
    }
  }

  render() {
    const { id, title, thumbnail, price, handleDeleteItem } = this.props;
    const { quantity, disabled } = this.state;
    return (
      <div data-testid="product">
        <button type="button" onClick={ () => handleDeleteItem(id) }>X</button>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.changeQuantityDown() }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          disabled={ disabled }
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.changeQuantityUp() }
        >
          +
        </button>
        <p>
          {`Subtotal - R$
            ${price * quantity}`}
        </p>
      </div>
    );
  }
}

ProductCartCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductCartCard;
