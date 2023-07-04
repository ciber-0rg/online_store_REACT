import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

class Search extends React.Component {
    state = {
      searchInput: '',
      searchCategory: '',
      results: [],
      categories: [],
    }

    async componentDidMount() {
      this.setState({ categories: await getCategories() });
    }

    handleChange = ({ target: { value } }) => {
      this.setState({
        searchInput: value,
      });
    }

    handleClickCategory = ({ target }) => {
      this.setState({ searchCategory: target.id }, this.handleClickInputSearch);
    }

    handleClickInputSearch = async () => {
      const { searchInput, searchCategory } = this.state;
      const searched = await getProductsFromCategoryAndQuery(searchInput, searchCategory);
      this.setState({
        results: searched.results,
      });
    }

    render() {
      const { searchInput, results, categories } = this.state;
      const { addToCart } = this.props;

      return (
        <div>
          <label htmlFor="searchInput">
            <input
              value={ searchInput }
              onChange={ this.handleChange }
              type="text"
              id="searchInput"
              name="searchInput"
              data-testid="query-input"
            />
          </label>
          <button
            onClick={ this.handleClickInputSearch }
            type="button"
            id="searchButton"
            name="searchButton"
            data-testid="query-button"
          >
            Search
          </button>
          <div>
            { categories.map(({ id, name }) => (
              <button
                data-testid="category"
                key={ id }
                type="button"
                id={ id }
                onClick={ this.handleClickCategory }
              >
                {name}

              </button>))}
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shoppingCart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              Carrinho
            </button>
          </Link>
          {
            results.map((product) => (<Card
              key={ product.id }
              { ...product }
              addToCart={ () => addToCart(product) }
            />
            ))
          }
        </div>
      );
    }
}

Search.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Search;
