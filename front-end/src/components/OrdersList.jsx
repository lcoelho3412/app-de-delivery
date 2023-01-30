import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

export default function OrdersList() {
  const { order } = useContext(GlobalContext);

  return (
    <>
      {order.map(({ number, status, date, total }, index) => (
        <div key={ index }>
          <div data-testid={ `customer_orders__element-order-id-${index}` }>
            Pedido
            {' '}
            {number}
            {/* fazer um tratamento para aparecer quatro digitos no número do pedido */}
          </div>

          <div data-testid={ `customer_orders__delivery-status-${index}` }>
            {status}
          </div>

          <div data-testid={ `customer_orders__element-order-date-${index}` }>
            {date}
          </div>

          <div data-testid={ `customer_orders__element-card-price-${index}` }>
            R$
            {' '}
            {total}
          </div>
        </div>
      ))}
    </>
  );
}
