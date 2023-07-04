import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { title, thumbnail, price, id, addToCart } = this.props;
    return (
      <>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addToCart }
        >
          {' '}
          Add ao Carrinho
        </button>

        <Link to={ `/productDetails/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>
              {`R$
            ${price}`}
            </p>
          </div>
        </Link>

      </>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;
