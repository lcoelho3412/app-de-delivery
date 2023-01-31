import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';

export default function SellerOrderCards() {
  const { sellerOrder, setSellerOrder } = useContext(GlobalContext);

  const history = useHistory();

  const fetch = async () => {
    const { role, email } = JSON.parse(localStorage.getItem('user'));

    if (role !== 'seller') history.push('/');

    const sellerOrderArray = await requestGetSellerOrders('/seller/orders', email);
    console.log('é o array de pedidos', sellerOrder);

    setSellerOrder(sellerOrderArray);
  };

  useEffect(fetch);

  return (
    <>
      <p>Pedidos</p>
      { sellerOrder.length === 0 && <p>Não há pedidos</p> }
      <Link to="/seller/orders/:id">
        {sellerOrder.map(({ id, status, saleDate, totalPrice, deliveryAddress }) => (
          <div key={ id }>
            <div data-testid={ `seller_orders__element-order-id-${id}` }>
              Pedido
              {' '}
              {id}
            </div>

            <div data-testid={ `seller_orders__delivery-status-${id}` }>
              {status}
            </div>

            <div data-testid={ `seller_orders__element-order-date-${id}` }>
              {saleDate}
            </div>

            <div data-testid={ `seller_orders__element-card-price-${id}` }>
              R$
              {' '}
              {totalPrice}
            </div>

            <div data-testid={ `seller_orders__element-card-address-${id}` }>
              {deliveryAddress}
            </div>
          </div>
        ))}
      </Link>
    </>
  );
}
