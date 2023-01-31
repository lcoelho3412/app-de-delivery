import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../../contexts/GlobalContext';

export default function Checkout() {
  const { cart, setCart, setTotal } = useContext(GlobalContext);

  const history = useHistory();

  const { token } = JSON.parse(localStorage.getItem('user'));

  if (!token) history.push('/login');

  const handleClick = ({ target }) => {
    const filteredCart = cart.filter((element) => target.name !== element.name);

    setCart(filteredCart);
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => curr.subTotal + acc, 0);

    setTotal(newTotal);
  }, [cart]);

  return (
    <>
      {cart.map(({ productId, name, quantity, unitPrice, subTotal }, index) => (
        <div key={ productId }>
          <span
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            {index + 1}
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            {name}
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            {quantity}
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            {unitPrice.replace('.', ',')}
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {subTotal.toFixed(2).replace('.', ',')}
          </span>
          <button
            name={ name }
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ handleClick }
          >
            Remover
          </button>
        </div>
      ))}
    </>
  );
}
