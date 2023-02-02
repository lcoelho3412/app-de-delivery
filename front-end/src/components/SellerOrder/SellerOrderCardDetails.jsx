import moment from 'moment/moment';
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { requestGet } from '../../services/requests';

export default function SellerOrderCardDetails() {
  const history = useHistory();
  const [seller, setSeller] = useState({ product: [] });
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');

  const fetch = useCallback(async () => {
    try {
      const { role, token } = JSON.parse(localStorage.getItem('user'));

      if (role !== 'seller') history.push('/');

      const sale = await requestGet(history.location.pathname, token);

      setNome(sale.seller.name);
      setStatus(sale.status);
      setSeller(sale);
    } catch (e) {
      setError(e.response.data.message);
    }
  }, [history, setSeller]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      {console.log(nome)}
      <table>
        <thead>
          <tr>
            {/* <th
              data-testid={
                'seller_order_details__'
                + `element-order-details-label-order-${seller.id}`
              }
            >
              PEDIDO
            </th> */}
            <th
              data-testid={
                'seller_order_details__'
                + 'element-order-details-label-order-id'
              }
            >
              {`PEDIDO ${seller.id}`}
            </th>
            <th
              data-testid={
                'seller_order_details__'
                + 'element-order-details-label-order-date'
              }
            >
              {moment(seller.saleDate).format('DD/MM/YYYY')}
            </th>
            <th
              data-testid={
                'seller_order_details__element'
                + '-order-details-label-delivery-status'
              }
            >
              {status}
            </th>

            <button
              type="submit"
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </button>

            <button
              type="submit"
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
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

          {seller.product.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  'seller_order_details__element-order'
                  + `-table-item-number-${index + 1}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {item.name}
              </td>
              <td
                data-testid={
                  'seller_order_details__element-order'
                  + `-table-quantity-${index + 1}`
                }
              >
                {item.SalesProducts.quantity}
              </td>
              <td
                data-testid={
                  'seller_order_details__element-order-'
                  + `table-unit-price-${index + 1}`
                }
              >
                {item.price}
              </td>
              <td
                data-testid={
                  'seller_order_details__element-order-'
                  + `table-sub-total-${index + 1}`
                }
              >
                {(parseFloat(item.price) * item.SalesProducts.quantity).toFixed(
                  2,
                )}
              </td>
            </tr>
          ))}

          <tr>
            <td data-testid="seller_order_details__element-order-total-price">
              {`Total: ${seller.totalPrice}`}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
