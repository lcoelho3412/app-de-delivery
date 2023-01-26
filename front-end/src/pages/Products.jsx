import { useEffect, useState } from 'react';
// import NavBar from '../components/NavBar';
import ProductsComponents from '../components/ProductsComponent';
import { request } from '../services/requests';

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await request('/products', 'get');

    setProducts(data);
  };

  useEffect(fetchProducts);

  return (
    <div>
      {/* <NavBar /> */}
      {products.map(({ id, name, price, urlImage }) => (
        <ProductsComponents
          key={ id }
          name={ name }
          price={ price }
          urlImage={ urlImage }
        />
      ))}
    </div>
  );
}
