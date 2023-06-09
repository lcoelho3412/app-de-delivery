/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProducts } from '../../services/requests';
import { ProductCard, CartButton, NavBar } from '../../components';

export default function Products() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const fetchProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    if (!token) history.push('/');

    const data = await requestProducts(token);

    setProducts(data);
  };

  useEffect(fetchProducts, []);

  return (
    <>
      <NavBar />
      <div className="products-screen">
        {products.map(({ id, name, price, urlImage }) => (
          <ProductCard
            key={ id }
            name={ name }
            price={ Number(price).toFixed(2) }
            urlImage={ urlImage }
            id={ id }
          />
        ))}
      </div>
      <CartButton />
    </>
  );
}
