import { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import FinishOrderBtn from './FinishOrderBtn';

export default function CustomerDetails() {
  const { total } = useContext(GlobalContext);

  return (
    <>
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
        <FinishOrderBtn />
      </form>
    </>
  );
}
