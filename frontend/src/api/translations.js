import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
export const getTranslation = async (langCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/translation/${langCode}`
    );

    return response.data.dictionary;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return null;
  }
};
