import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../../contexts/GlobalContext';

export default function OrderCards() {
  const { order } = useContext(GlobalContext);

  return (
    <Link to="/customer/orders/:id">
      {order.map(({ number, status, date, total }, index) => (
        <div key={ index }>
          <div data-testid={ `customer_orders__element-order-id-${index}` }>
            Pedido
            {' '}
            {number}
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
    </Link>
  );
}
