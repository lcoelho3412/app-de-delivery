import moment from 'moment/moment';
import { useState, useContext, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';
import { requestGet } from '../../services/requests';

export default function SellerOrderCards() {
  const { sellerOrder, setSellerOrder } = useContext(GlobalContext);
  const [error, setError] = useState('');
  const history = useHistory();

  const fetch = useCallback(async () => {
    try {
      const { role, token } = JSON.parse(localStorage.getItem('user'));

      if (role !== 'seller') history.push('/');

      const sellerOrderArray = await requestGet('/seller/orders', token);

      setSellerOrder(sellerOrderArray);
    } catch (e) {
      setError(e.response.data.message);
    }
  }, [history, setSellerOrder]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <p>Pedidos</p>
      {console.log(error)}
      {sellerOrder.length === 0 && <p>Não há pedidos</p>}

      {sellerOrder.map(
        ({
          id,
          status,
          saleDate,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
        }) => (
          <div key={ id }>
            <Link to={ `/seller/orders/${id}` }>
              <div data-testid={ `seller_orders__element-order-id-${id}` }>
                {`Pedido ${id}`}
              </div>

              <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
                {status}
              </div>

              <div data-testid={ `seller_orders__element-order-date-${id}` }>
                {moment(saleDate).format('DD/MM/YYYY')}
              </div>

              <div data-testid={ `seller_orders__element-card-price-${id}` }>
                R$
                {totalPrice}
              </div>

              <div data-testid={ `seller_orders__element-card-address-${id}` }>
                {`${deliveryAddress}, ${deliveryNumber}`}
              </div>
            </Link>
          </div>
        ),
      )}
    </>
  );
}
