import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../../contexts/GlobalContext';

export default function FinishOrderBtn() {
  const history = useHistory();
  const { total, order, setOrder } = useContext(GlobalContext);

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
    <button
      type="submit"
      data-testid="customer_checkout__button-submit-order"
      onClick={ finishOrder }
    >
      Finalizar pedido
    </button>
  );
}
