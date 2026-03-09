import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        username,
        password
      }
    );
    const { user, token } = response.data;
    return { user, token };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
