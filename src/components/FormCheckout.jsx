import React from 'react';

export default class FormCheckout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-name">
            Nome Completo:
            <input
              type="text"
              id="input-name"
              name="input-name"
              required
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="input-email">
            Email:
            <input
              type="text"
              id="input-email"
              name="input-email"
              required
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="input-CPF">
            CPF:
            <input
              type="text"
              id="input-CPF"
              name="input-CPF"
              required
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="input-phone">
            Telefone:
            <input
              type="text"
              id="input-phone"
              name="input-phone"
              required
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="input-CEP">
            CEP:
            <input
              type="text"
              id="input-CEP"
              name="input-CEP"
              required
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="input-address">
            Endereço:
            <input
              type="text"
              id="input-address"
              name="input-address"
              required
              data-testid="checkout-address"
            />
          </label>
        </form>
      </div>
    );
  }
}
