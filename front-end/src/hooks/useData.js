import { useState } from 'react';

export default function useData() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState([]);

  return {
    user,
    setUser,
    cart,
    setCart,
    total,
    setTotal,
    order,
    setOrder,
  };
}
