import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestGet } from '../../../services/requests';

export default function OrderCards() {
  const [order, setOrder] = useState([]);
  const fetch = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const pedidos = await requestGet('/sales', token);
    setOrder(pedidos);
  };

  useEffect(() => {
    fetch();
  }, []);

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
              {moment(saleDate).format('DD/MM/YYYY')}
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
