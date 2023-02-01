import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { requestGet } from '../../services/requests';

export default function SellerOrderCardDetails() {
  const history = useHistory();
  const [seller, setSeller] = useState([]);

  const fetch = useCallback(async () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));

    if (role !== 'seller') history.push('/');

    const sellerOrderArray = await requestGet(history.location.pathname, token);

    setSeller(sellerOrderArray);
  }, [history, setSeller]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <h3>Detalhe do Pedido</h3>

      {seller.map(
        ({
          id,
          status,
          saleDate,
          totalPrice,
          // deliveryAddress,
          // deliveryNumber,
        }) => (
          <table key={ id }>
            <thead>
              <tr>
                <th
                  data-testid={
                    'seller_order_details__'
                    + `element-order-details-label-order-${id}`
                  }
                >
                  PEDIDO
                </th>
                <th
                  data-testid={
                    'seller_order_details__'
                    + 'element-order-details-label-order-date'
                  }
                >
                  {saleDate}
                </th>
                <th
                  data-testid={
                    'seller_order_details__'
                    + 'element-order-details-label-delivery-status'
                  }
                >
                  {status}
                </th>
                <th>
                  <button
                    type="submit"
                    data-testid="seller_order_details__button-preparing-check"
                  >
                    PREPARAR PEDIDO
                  </button>
                </th>
                <th>
                  <button
                    type="submit"
                    data-testid="seller_order_details__button-dispatch-check"
                  >
                    SAIU PARA ENTREGA
                  </button>
                </th>
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
              <tr>
                <td>{id}</td>
              </tr>
              <tr>
                <td data-testid="seller_order_details__element-order-total-price">
                  {`Total: ${totalPrice}`}
                </td>
              </tr>
            </tbody>
          </table>
        ),
      )}
    </>
  );
}
