import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem('user');

    setUser(JSON.parse(userInfo));
  }, []);

  return (
    <nav>
      <div>
        <a
          data-testid="customer_products__element-navbar-link-products"
          href="/customer/products"
        >
          Produtos
        </a>
        <a
          data-testid="customer_products__element-navbar-link-orders"
          href="/customer/orders"
        >
          Meus Pedidos
        </a>
        <span data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </span>
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </button>
    </nav>
  );
}
