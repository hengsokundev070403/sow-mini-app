import { createContext, useState, useEffect, useContext } from 'react';
import { authenticate } from '../api/authentication';
import axios from 'axios';

const storedToken = localStorage.getItem('token');
if (storedToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(storedToken);
  const isAuthenticate = !token ? false : true;

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      axios.defaults.headers.common['Authorization'] = null;
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const data = await authenticate(username, password);

      if (!data) {
        return false; 
      }
      
      setToken(data.token);
      return true;
    } catch (error) {
      console.log('login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
  };

  const value = {
    token,
    isAuthenticate,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
