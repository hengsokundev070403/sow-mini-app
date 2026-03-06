import axios from 'axios';

export const getTranslation = async (langCode) => {
  try {
    const response = await axios.get(`http://192.168.1.17:3000/api/translation/${langCode}`);
    
    return response.data.dictionary; 
  } catch (error) {
    console.error("Error fetching translations:", error);
    return null;
  }
};