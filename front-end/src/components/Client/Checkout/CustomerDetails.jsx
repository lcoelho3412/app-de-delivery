import { useContext, useState, useEffect } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import FinishOrderBtn from './FinishOrderBtn';
import { requestGet } from '../../../services/requests';

export default function CustomerDetails() {
  const { total } = useContext(GlobalContext);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const [sellers, setSellers] = useState([]);

  useEffect(() => requestGet('/sellers', token).then((data) => setSellers(data)), []);

  return (
    <>
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
        <FinishOrderBtn />
      </form>
    </>
  );
}
