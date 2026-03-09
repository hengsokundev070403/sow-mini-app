import { useState } from 'react';
import { updateProduct } from '../api/product';
import '../styles/pricelist.css';

const formatPrice = (value) => {
  if (!value) return '';
  return parseFloat(value).toString();
};
export default function ProductRow({ product }) {
  const [row, setRow] = useState({
    ...product,
    price: formatPrice(product.price),
    in_price: formatPrice(product.in_price)
  });

  const handleChange = async (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };
  const handleBlur = async () => {
    try {
      const updatedProduct = await updateProduct(row.id, row);
      if (updatedProduct) {
        setRow({
          ...updatedProduct,
          price: formatPrice(updatedProduct.price),
          in_price: formatPrice(updatedProduct.in_price)
        });
      }
    } catch (error) {
      console.error('error saving product', error);
    }
  };
  return (
    <tr className="product-row">
      <td className="col-indicator">
        <span className="row-arrow">→</span>
      </td>
      <td className="col-article mobile-mode-hide tablet-mode-hide portrait-mode-hide">
        <input
          type="text"
          name="article_no"
          value={row.article_no || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-product">
        <input
          type="text"
          name="product_name"
          value={row.product_name || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-inprice mobile-mode-hide tablet-mode-hide">
        <input
          type="text"
          name="in_price"
          value={row.in_price || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-price">
        <input
          type="text"
          name="price"
          value={row.price || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-stock mobile-mode-hide tablet-mode-hide portrait-mode-hide">
        <input
          type="text"
          name="in_stock"
          value={row.in_stock || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-unit mobile-mode-hide tablet-mode-hide portrait-mode-hide">
        <input
          type="text"
          name="unit"
          value={row.unit || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>

      <td className="col-desc mobile-mode-hide tablet-mode-hide">
        <input
          type="text"
          name="description"
          value={row.description || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </td>
      <td className="col-menu">
        <span className="row-dots">...</span>
      </td>
    </tr>
  );
}
