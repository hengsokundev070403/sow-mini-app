import axios from 'axios';

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/login`,
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
