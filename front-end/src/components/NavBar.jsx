import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem('user');

    setUser(JSON.parse(userInfo));
  }, []);

  // const clearStorage = () => {
  //   localStorage.clear();
  // };

  /* <div>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <button
            type="button"
          >
            Produtos

          </button>
        </Link>
        <Link to="/customer/orders">
          <button
            type="button"
            data-testid="customer_productselement-navbar-link-orders"
          >
            Meus pedidos

          </button>
        </Link>
      </div>
      <div>
        <p data-testid="customer_productselement-navbar-user-full-name">{user.name}</p>
      </div>
      <div>
        <Link to="/login">
          <button
            type="button"
            onClick={ clearStorage }
            data-testid="customer_productselement-navbar-link-logout"
          >
            Sair

          </button>
        </Link>
      </div> */

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
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}

        </span>
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          localStorage.removeItem('user');
          history.push('/');
        } }
      >
        Sair

      </button>
    </nav>
  );
}
