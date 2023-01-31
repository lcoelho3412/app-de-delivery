import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';

export default function SellerOrderCards() {
  const { sellerOrder } = useContext(GlobalContext);

  console.log(order);

  return (
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
  );
}
