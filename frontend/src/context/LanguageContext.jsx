import { createContext, useState, useEffect, useContext } from 'react';
import { getTranslation } from '../api/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [translation, setTranslation] = useState(null);
  const [language, setLanguage] = useState('en-GB');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTranslation() {
      try {
        setIsLoading(true);

        const data = await getTranslation(language);
        setTranslation(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTranslation();
  }, [language]);

  const value = {
    language,
    setLanguage,
    translation,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  return useContext(LanguageContext);
};
