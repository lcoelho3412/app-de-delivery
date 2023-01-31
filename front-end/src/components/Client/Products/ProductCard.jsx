/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';

export default function ProductsList({ name, price, urlImage, id }) {
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
    <div className="product-card">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toString().replace('.', ',')}
      </p>
      <img
        src={ urlImage }
        alt={ name }
        className="product-thumbnail"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <section className="product-card-details">
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </span>
        <br />
        <section className="product-quantity">
          <button
            type="button"
            className="product-quantity-minus"
            onClick={ () => { if (quantity > 0) setQuantity(quantity - 1); } }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            id={ `id-${id}` }
            type="number"
            value={ quantity }
            className="product-quantity-number"
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            type="button"
            className="product-quantity-plus"
            onClick={ () => setQuantity(quantity + 1) }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </section>
      </section>
    </div>
  );
}

ProductsList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
