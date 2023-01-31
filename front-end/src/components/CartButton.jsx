import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../contexts/GlobalContext';

export default function CartButton() {
  const { cart, total, setTotal } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotal = cart.reduce((acc, curr) => curr.subTotal + acc, 0);
    setTotal(newTotal);
  }, [cart, setTotal]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/customer/checkout') }
      disabled={ total === 0 }
    >
      Ver Carrinho
      {' '}
      <span data-testid="customer_products__checkout-bottom-value">
        {total.toFixed(2).replace('.', ',')}
      </span>
    </button>
  );
}
