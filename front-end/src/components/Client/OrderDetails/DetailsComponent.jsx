import moment from 'moment/moment';
import { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { requestGet } from '../../../services/requests';
import NavBar from '../../Common/NavBar';

export default function DetailsComponent() {
  const history = useHistory();
  const { id } = useParams();
  const [order, setOrder] = useState({ product: [] });
  const [error, setError] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  // setNome(sale.seller.name);
  // setStatus(sale.status);

  const fetch = useCallback(async () => {
    try {
      const { role, token } = JSON.parse(localStorage.getItem('user'));

      if (role !== 'customer') history.push('/');

      const sale = await requestGet(`/sales/${id}`, token);

      setNome(sale.seller.name);
      setStatus(sale.status);
      setOrder(sale);
    } catch (e) {
      setError(e.response.data.message);
    }
  }, [history, setOrder, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const dataTest = 'customer_order_details__element-order';

  return (
    <>
      {console.log(error)}
      <NavBar />
      <h3>Detalhe do Pedido</h3>
      <table>
        <thead>
          <tr>
            <th
              data-testid={
                'customer_order_details__element'
                + '-order-details-label-order-id'
              }
            >
              {`PEDIDO ${order.id}`}
            </th>
            <th
              data-testid={
                'customer_order_details__element'
                + '-order-details-label-seller-name'
              }
            >
              {`P.Vend:${nome}`}
            </th>

            <th
              data-testid={
                'customer_order_details__element'
                + '-order-details-label-order-date'
              }
            >
              {moment(order.saleDate).format('DD/MM/YYYY')}
            </th>
            <th
              data-testid={
                'customer_order_details__element-'
                + `order-details-label-delivery-status${order.id}`
              }
            >
              {status}
            </th>

            <button
              type="submit"
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCADO COMO ENTEREGUE
            </button>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>

          {order.product.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  'customer_order_details__element-order'
                  + `-table-item-number-${index + 1}`
                }
              >
                {index + 1}
              </td>

              <td data-testid={ `${dataTest}-table-name-${index}` }>
                {item.name}
              </td>

              <td data-testid={ `${dataTest}-table-quantity-${index + 1}` }>
                {item.SalesProducts.quantity}
              </td>

              <td data-testid={ `${dataTest}-table-unit-price-${index + 1}` }>
                {item.price}
              </td>

              <td data-testid={ `${dataTest}-table-sub-total-${index + 1}` }>
                {(parseFloat(item.price) * item.SalesProducts.quantity).toFixed(
                  2,
                )}
              </td>
            </tr>
          ))}

          <tr>
            <td data-testid={ `${dataTest}-total-price` }>
              {`Total: ${order.totalPrice}`}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
