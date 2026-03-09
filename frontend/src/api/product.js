import axios from 'axios';
export const getProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/product`);

    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};
export const updateProduct = async (id, updateData) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/product/${id}`,
      updateData
    );
    return response.data.product;
  } catch (error) {
    console.error('Error editing product:', error);
    return null;
  }
};
