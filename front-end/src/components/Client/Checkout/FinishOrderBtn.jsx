import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalContext from '../../../contexts/GlobalContext';
import { requestPost } from '../../../services/requests';

export default function FinishOrderBtn({ address, addressNumber }) {
  const history = useHistory();
  const {
    cart,
    total,
    order,
    setOrder,
    sale,
    user,
  } = useContext(GlobalContext);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const generateOrderNumber = () => {
    let counter = 1;
    const fourDigit = 4;

    const orderNumber = counter.toString().padStart(fourDigit, '0');
    counter += 1;
    return orderNumber;
  };

  const dateDisplay = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  };

  const finishOrder = async (event) => {
    event.preventDefault();
    const newOrder = {
      number: generateOrderNumber(),
      status: 'Pendente',
      date: dateDisplay(),
      total: total.toFixed(2).replace('.', ','),
    };

    const formatedCart = cart.reduce((acc, curr) => {
      const { unitPrice, subTotal, name, ...cartObj } = curr;
      return [...acc, cartObj];
    }, []);

    const newSale = {
      ...sale,
      userId: user.id,
      totalPrice: total,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      soldProducts: formatedCart,
    };

    const data = await requestPost('/sales', newSale, token);

    setOrder([...order, newOrder]);

    history.push(`/customer/orders/${data.id}`);
  };

  return (
    <button
      type="submit"
      data-testid="customer_checkout__button-submit-order"
      onClick={ finishOrder }
    >
      Finalizar pedido
    </button>
  );
}

FinishOrderBtn.propTypes = {
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.number.isRequired,
};
