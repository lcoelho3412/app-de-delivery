/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import GlobalContext from '../contexts/GlobalContext';

export default function ProductsComponents({ name, price, urlImage, id }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(GlobalContext);

  useEffect(() => {
    const subTotal = Number(quantity * price);

    const item = {
      productId: id,
      name,
      quantity,
      unitPrice: price,
      subTotal,
    };

    const filteredCart = cart.filter((element) => element.name !== item.name);

    if (quantity === 0) {
      setCart([...filteredCart]);
    } else {
      setCart([...filteredCart, item]);
    }
  }, [quantity]);

  // console.log('card');

  return (
    <div>
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        Name:
        {name}
      </span>
      <br />
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toString().replace('.', ',')}
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
          onClick={ () => {
            if (quantity > 0) setQuantity(quantity - 1);
          } }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          style={ {
            width: '5vw',
          } }
        >
          -
        </button>
        <input
          id={ `id-${id}` }
          type="number"
          value={ quantity }
          onChange={ ({ target }) => setQuantity(Number(target.value)) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => setQuantity(quantity + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          style={ {
            width: '5vw',
          } }
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
