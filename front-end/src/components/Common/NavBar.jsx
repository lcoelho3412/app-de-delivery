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
    <nav className="nav-bar">
      <section className="nav-bar-pages">
        <a
          href="/customer/products"
          className="nav-bar-products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </a>
        <a
          href="/customer/orders"
          className="nav-bar-orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </a>
      </section>
      <section className="nav-bar-user-stuff">
        <div
          className="nav-bar-name"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
        </div>
        <button
          type="button"
          className="logout-btn"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          Sair
        </button>
      </section>
    </nav>
  );
}
