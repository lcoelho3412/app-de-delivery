import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const userInfo = localStorage.getItem('data');

    setUser(JSON.parse(userInfo));
  }, []);

  return (
    <div>
      <div>
        <Link to="/customer/products">
          <button type="button">Produtos</button>
        </Link>
        <Link to="/customer/orders">
          <button type="button">Meus pedidos</button>
        </Link>
      </div>
      <div>
        <p>{user.name}</p>
      </div>
      <div>
        <Link to="/login">
          <button type="button">Sair</button>
        </Link>
      </div>
    </div>
  );
}
