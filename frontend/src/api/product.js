import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);

    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};
export const updateProduct = async (id, updateData) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${id}`,
      updateData
    );
    return response.data.product;
  } catch (error) {
    console.error('Error editing product:', error);
    return null;
  }
};
