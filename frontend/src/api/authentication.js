import axios from 'axios';

export const authenticate = async (username,password) => {
  try {
    const { data } = await axios.post(`http://192.168.1.17:3000/api/auth/login`, {
      username,
      password
    });
    const { user, token } = data;
    return { user, token };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
