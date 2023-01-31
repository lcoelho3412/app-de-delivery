import { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';

export default function Cart() {
  const { cart } = useContext(GlobalContext);

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
            {unitPrice}
          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {subTotal}
          </span>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            Remover
          </button>
        </div>
      ))}
    </>
  );
}
