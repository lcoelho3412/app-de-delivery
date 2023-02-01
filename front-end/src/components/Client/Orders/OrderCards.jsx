import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../../contexts/GlobalContext';

export default function OrderCards() {
  const { order } = useContext(GlobalContext);
  console.log('file: OrderCards.jsx:7 ~ OrderCards ~ order', order);

  return (
    <>
      {order.map(({ id, saleDate, status, totalPrice }, index) => (
        <div key={ index }>
          <Link to={ `/customer/orders/${id}` }>
            <div data-testid={ `customer_orders__element-order-id-${id}` }>
              Pedido
              {' '}
              {id}
            </div>

            <div data-testid={ `customer_orders__delivery-status-${id}` }>
              {status}
            </div>

            <div data-testid={ `customer_orders__element-order-date-${id}` }>
              {saleDate}
            </div>

            <div data-testid={ `customer_orders__element-card-price-${id}` }>
              R$
              {' '}
              {totalPrice}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
