import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliationCard extends Component {
  render() {
    const { email, evaluation } = this.props;
    return (
      <div>
        <p>
          {email}
        </p>
        <p>
          Estrelinha
        </p>
        <p>
          {evaluation}
        </p>
      </div>
    );
  }
}

AvaliationCard.propTypes = {
  email: PropTypes.string.isRequired,
  evaluation: PropTypes.string.isRequired,
};

export default AvaliationCard;