import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GlobalContext from '../contexts/GlobalContext';
import { requestGet } from '../services/requests';

export default function Checkout() {
  const { cart, total, setCart, setTotal } = useContext(GlobalContext);
  const [sellers, setSellers] = useState([]);

  const history = useHistory();

  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => requestGet('/sellers', token).then((data) => setSellers(data)), []);

  if (!token) history.push('/login');

  const handleClick = ({ target }) => {
    const filteredCart = cart.filter((element) => target.name !== element.name);

    setCart(filteredCart);
  };

  console.log(sellers);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => curr.subTotal + acc, 0);

    setTotal(newTotal);
  }, [cart]);

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
      <span data-testid="customer_checkout__element-order-total-price">
        {total.toFixed(2).replace('.', ',')}
      </span>
      <form>
        <select data-testid="customer_checkout__select-seller">
          {sellers.map((element) => (
            <option key={ element.id } value={ element.name }>{element.name}</option>
          ))}
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
