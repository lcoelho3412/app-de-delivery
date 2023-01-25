// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  // const [user, setUser] = useState({});

  // const fetchUser = () => {
  //   const userInfo = localStorage.getItem("user");
  //   setUser(userInfo);
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

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
        <p>{user.username}</p>
      </div>
      <div>
        <Link to="/login">
          <button type="button">Sair</button>
        </Link>
      </div>
    </div>
  );
}
