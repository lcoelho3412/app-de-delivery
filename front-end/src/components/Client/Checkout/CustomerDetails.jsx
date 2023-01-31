import { useContext, useState, useEffect } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import FinishOrderBtn from './FinishOrderBtn';
import { requestGet } from '../../../services/requests';

export default function CustomerDetails() {
  const { total, setSale } = useContext(GlobalContext);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState(0);

  useEffect(() => requestGet('/sellers', token).then((data) => setSellers(data)), []);

  return (
    <>
      <span data-testid="customer_checkout__element-order-total-price">
        {total.toFixed(2).replace('.', ',')}
      </span>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ (event) => {
            const seller = sellers
              .filter((element) => element.name === event.target.value)[0];
            setSale({
              sellerId: seller.id,
            });
          } }
        >
          {sellers.map((element) => (
            <option
              key={ element.id }
              name={ element.id }
              value={ element.name }
            >
              {element.name}

            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Endereço"
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setAddress(target.value) }
        />
        <input
          type="number"
          placeholder="Número"
          data-testid="customer_checkout__input-address-number"
          onChange={ ({ target }) => setAddressNumber(target.value) }
        />
        <FinishOrderBtn address={ address } addressNumber={ addressNumber } />
      </form>
    </>
  );
}
