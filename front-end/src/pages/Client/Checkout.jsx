import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';
import { NavBar } from '../../components';

export default function Checkout() {
  const history = useHistory();
  const { cart, total, order, setOrder } = useContext(GlobalContext);

  const generateOrderNumber = () => {
    let counter = 1;
    const fourDigits = 4;

    const orderNumber = counter.toString().padStart(fourDigits, '0');
    counter += 1;
    return orderNumber;
  };

  const dateDisplay = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  };

  const finishOrder = (event) => {
    event.preventDefault();
    const newOrder = {
      number: generateOrderNumber(),
      status: 'Pendente',
      date: dateDisplay(),
      total: total.toFixed(2).replace('.', ','),
    };

    setOrder([...order, newOrder]);

    history.push('/customer/orders');
  };

  return (
    <>
      <NavBar />
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
      <span data-testid="customer_checkout__element-order-total-price">
        {total.toFixed(2).replace('.', ',')}
      </span>
      <form>
        <select data-testid="customer_checkout__select-seller">
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
          onClick={ finishOrder }
        >
          Finalizar pedido
        </button>
      </form>
    </>
  );
}
