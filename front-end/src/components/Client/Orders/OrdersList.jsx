import { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';

export default function OrdersList() {
  const { order } = useContext(GlobalContext);

  return (
    <>
      {order.map((id, { number, status, date, total }) => (
        <div key={ id }>
          <div data-testid={ `customer_orders__element-order-id-${id}` }>
            Pedido
            {' '}
            {number}
            {/* fazer um tratamento para aparecer quatro digitos no número do pedido */}
          </div>

          <div data-testid={ `customer_orders__delivery-status-${id}` }>
            {status}
          </div>

          <div data-testid={ `customer_orders__element-order-date-${id}` }>
            {date}
          </div>

          <div data-testid={ `customer_orders__element-card-price-${id}` }>
            R$
            {' '}
            {total}
          </div>
        </div>
      ))}
    </>
  );
}
