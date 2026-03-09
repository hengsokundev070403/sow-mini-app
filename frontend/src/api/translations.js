import axios from 'axios';

export const getTranslation = async (langCode) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/translation/${langCode}`
    );

    return response.data.dictionary;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return null;
  }
};
