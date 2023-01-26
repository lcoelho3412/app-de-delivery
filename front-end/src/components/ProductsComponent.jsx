import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ProductsComponents({ name, price, urlImage, id }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        Name:
        {name}
      </span>
      <br />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {(price).toString().replace('.', ',')}

      </p>
      <img
        src={ urlImage }
        alt={ name }
        width="8%"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <button
          type="button"
          onClick={ () => setCount(count - 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          -

        </button>
        <input
          type="number"
          value={ count }
          onChange={ ({ target }) => setCount(target.value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => setCount(count + 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          +

        </button>
      </div>
    </div>
  );
}

ProductsComponents.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
