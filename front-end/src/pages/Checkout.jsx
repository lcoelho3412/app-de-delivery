import { useContext } from 'react';
import NavBar from '../components/NavBar';
import GlobalContext from '../contexts/GlobalContext';

export default function Checkout() {
  const { cart, total } = useContext(GlobalContext);

  return (
    <>
      <NavBar />
      {cart.map(({ productId, name, quantity, unitPrice, subTotal }, index) => (
        <div key={ productId }>
          <span
            data-testid={
              `customer_checkout__element-order-table-item-number-${index}`
            }
          >
            {index + 1}
          </span>
          <span
            data-testid={
              `customer_checkout__element-order-table-name-${index}`
            }
          >
            {name}
          </span>
          <span
            data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
            }
          >
            {quantity}
          </span>
          <span
            data-testid={
              `customer_checkout__element-order-table-unit-price-${index}`
            }
          >
            {unitPrice}
          </span>
          <span
            data-testid={
              `customer_checkout__element-order-table-sub-total-${index}`
            }
          >
            {subTotal}
          </span>
          <button
            type="button"
            data-testid={
              `customer_checkout__element-order-table-remove-${index}`
            }
          >
            Remover
          </button>
        </div>
      ))}
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {total.toFixed(2).replace('.', ',')}
      </span>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
        >
          <option value="Fulana Pereira">Fulana Pereira</option>
        </select>
        <input
          type="text"
          placeholder="Endereço"
          data-testid="customer_checkout__input-address"
        />
        <input
          type="number"
          placeholder="Número"
          data-testid="customer_checkout__input-address-number"
        />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          finalizar pedido

        </button>
      </form>
    </>
  );
}
