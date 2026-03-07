import { useState } from 'react';
import { updateProduct } from '../api/product';

export default function ProductRow({ product }) {
  const [row, setRow] = useState(product);

  const handleChange = async (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };
  const handleBlur = async () => {
    try {
      const updatedProduct = await updateProduct(row.id, row);

      if (updatedProduct) {
        setRow(updatedProduct);
      }
    } catch (error) {
      console.log('error saving product', error);
    }
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          name="article_no"
          value={row.article_no || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="product_name"
          value={row.product_name || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        {' '}
        <input
          type="text"
          name="in_price"
          value={row.in_price || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={row.price || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        {' '}
        <input
          type="text"
          name="unit"
          value={row.unit || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="in_stock"
          value={row.in_stock || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="description"
          value={row.description || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', boxSizing: 'border-box' }}
        ></input>
      </td>
    </tr>
  );
}
