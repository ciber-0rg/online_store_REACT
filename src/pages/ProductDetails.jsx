import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductFromID } from '../services/api';
import AvaliationCard from '../components/AvaliationCard';

class ProductDetails extends React.Component {
  state = {
    productDetails: {},
    disabledBtn: true,
    form: {
      email: '',
      evaluation: '',
    },
    savedEvaluations: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getProductFromID(id);
    this.setState({
      productDetails }, this.getAvaliations);
  }

  handleChange = ({ target: { value, name } }) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    }, this.validateBtn);
  }

  validateBtn = () => {
    const { form: { email } } = this.state;
    const EMAIL_LENGTH = 3;
    if (email.length > EMAIL_LENGTH && email.includes('@')) {
      this.setState({
        disabledBtn: false,
      });
    } else {
      this.setState({
        disabledBtn: true,
      });
    }
  }

  saveFormInfo = (event) => {
    event.preventDefault();
    const { match: { params: { id } } } = this.props;
    const { form, savedEvaluations } = this.state;
    localStorage.setItem(id, JSON.stringify([...savedEvaluations, form]));
    this.getAvaliations();
  }

  getAvaliations = () => {
    const { productDetails } = this.state;
    const test = localStorage.getItem(productDetails.id);
    if (test !== null) {
      const getSavedEvaluations = JSON.parse(test);
      this.setState({
        savedEvaluations: getSavedEvaluations });
    }
  }

  render() {
    const { productDetails, disabledBtn, savedEvaluations } = this.state;
    const { addToCart, shoppingCartBtn } = this.props;
    return (
      <div>
        <Link to="/ShoppingCart">
          <button
            type="button"
            onClick={ shoppingCartBtn }
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>
        <div>
          <img src={ productDetails.thumbnail } alt={ productDetails.title } />
          <p data-testid="product-detail-name">{productDetails.title}</p>
          <p>{`R$: ${productDetails.price}`}</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => addToCart(productDetails) }
          >
            {' '}
            Add ao Carrinho
          </button>
        </div>
        <div>

          <form>
            <input
              name="email"
              type="email"
              data-testid="product-detail-email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
            <textarea
              name="evaluation"
              placeholder="Mensagem Opcional"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />

            <label htmlFor="rating-5">
              5
              <input
                type="radio"
                data-testid="5-rating"
                id="rating-5"
                name="rating"
                value="5"
                onChange={ this.handleChange }
              />

            </label>
            <label htmlFor="rating-4">
              4
              <input
                data-testid="4-rating"
                type="radio"
                id="rating-4"
                name="rating"
                value="4"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="rating-3">
              3
              <input
                data-testid="3-rating"
                type="radio"
                id="rating-3"
                name="rating"
                value="3"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="rating-2">
              2
              <input
                data-testid="2-rating"
                type="radio"
                id="rating-2"
                name="rating"
                value="2"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="rating-1">
              1
              <input
                data-testid="1-rating"
                type="radio"
                id="rating-1"
                name="rating"
                value="1"
                onChange={ this.handleChange }
              />
            </label>

            <button
              disabled={ disabledBtn }
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.saveFormInfo }
            >
              Avaliar
            </button>
          </form>

        </div>
        <div>
          {savedEvaluations.map((avaliation) => (
            <AvaliationCard
              key={ avaliation.email }
              { ...avaliation }
            />))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
