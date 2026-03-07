import { useLanguage } from '../context/LanguageContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useState } from 'react';
import { TRANSLATION_KEYS } from '../constants/translationKeys.js';
export default function Login() {
  const { translation, isLoading } = useLanguage();
  const authContext = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (isLoading || translation == null) {
    return <div>loading ui</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginSuccess = await authContext.login(username, password);
    if (!loginSuccess) {
      setError('login error');
    } else {
      navigate('/pricelist');
    }
  };

  return (
    <div>
      <div>log in</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          {translation[TRANSLATION_KEYS.LOGIN.LABEL_EMAIL]}
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder={translation[TRANSLATION_KEYS.LOGIN.PLACEHOLDER_EMAIL]}
        />
        <label htmlFor="password">
          {translation[TRANSLATION_KEYS.LOGIN.LABEL_PASSWORD]}
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder={translation[TRANSLATION_KEYS.LOGIN.PLACEHOLDER_PASSWORD]}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
