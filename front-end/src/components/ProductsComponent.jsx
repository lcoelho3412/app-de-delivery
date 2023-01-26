import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ProductsComponents({ name, price, urlImage }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>
        Name:
        {name}
      </span>
      <br />
      <span>
        Price:
        R$:
        {' '}
        {price}
      </span>
      <img src={ urlImage } alt={ name } width={ 250 } />
      <div>
        <button type="button" onClick={ () => setCount(count - 1) }>-</button>
        <input
          type="number"
          value={ count }
          onChange={ ({ target }) => setCount(target.value) }
        />
        <button type="button" onClick={ () => setCount(count + 1) }>+</button>
      </div>
    </div>
  );
}

ProductsComponents.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
