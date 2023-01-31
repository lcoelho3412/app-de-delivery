/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProducts } from '../../services/requests';
import { ProductsComponent, CartButton, NavBar } from '../../components';

export default function Products() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const fetchProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    if (!token) history.push('/');

    const data = await requestProducts(token);

    setProducts(data);
  };

  // console.log('teste');

  useEffect(fetchProducts, []);

  return (
    <div>
      <NavBar />
      {products.map(({ id, name, price, urlImage }) => (
        <ProductsComponent
          key={ id }
          name={ name }
          price={ Number(price).toFixed(2) }
          urlImage={ urlImage }
          id={ id }
        />
      ))}
      <CartButton />
    </div>
  );
}
