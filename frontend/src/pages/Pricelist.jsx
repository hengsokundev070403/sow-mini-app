import { useState, useEffect } from 'react';
import { getProducts } from '../api/product';
import ProductRow from '../components/ProductRow';

export default function PriceList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProducts();

        setProducts(fetchedProduct);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);
  if (isLoading) {
    return <div>loading products</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Articcle No.</th>
            <th>Product/Service</th>
            <th>In Price</th>
            <th>Price</th>
            <th>Unit</th>
            <th>In Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <ProductRow key={prod.id} product={prod} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
