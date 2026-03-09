import { useLanguage } from '../context/LanguageContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useState } from 'react';
import { TRANSLATION_KEYS } from '../constants/translationKeys.js';
import '../styles/login.css';
import Loader from './Loader.jsx';

export default function Login() {
  const { translation, isLoading } = useLanguage();
  const authContext = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  if (isLoading || translation == null) {
    return <Loader />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginSuccess = await authContext.login(username, password);
    if (loginSuccess) {
      navigate('/pricelist');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">
            {translation[TRANSLATION_KEYS.LOGIN.TITLE]}
          </h1>
          <div className="login-input-group">
            <label htmlFor="username" className="login-label">
              {translation[TRANSLATION_KEYS.LOGIN.LABEL_EMAIL]}
            </label>
            <input
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setUsernameTouched(true)}
              type="email"
              name="username"
              placeholder={
                translation[TRANSLATION_KEYS.LOGIN.PLACEHOLDER_EMAIL]
              }
            />
            {usernameTouched && username.trim() === '' && (
              <div className="login-error-msg">
                {translation[TRANSLATION_KEYS.ERRORS.MISSING_EMAIL]}
              </div>
            )}
          </div>

          <div className="login-input-group">
            <label htmlFor="password" className="login-label">
              {translation[TRANSLATION_KEYS.LOGIN.LABEL_PASSWORD]}
            </label>
            <div className="login-password-wrapper">
              <input
                className="login-input password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={
                  translation[TRANSLATION_KEYS.LOGIN.PLACEHOLDER_PASSWORD]
                }
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src="https://online.123fakturera.se/components/icons/hide_password.png"
                    alt="hide password"
                  />
                ) : (
                  <img
                    src="https://online.123fakturera.se/components/icons/show_password.png"
                    alt="show password"
                  />
                )}
              </button>
            </div>
            {passwordTouched && password.trim() === '' && (
              <div className="login-error-msg">
                {translation[TRANSLATION_KEYS.ERRORS.EMPTY_FIELD]}
              </div>
            )}
          </div>

          <button className="login-submit-btn" type="submit">
            {translation[TRANSLATION_KEYS.LOGIN.BTN_SUBMIT]}
          </button>
        </form>

        <div className="login-card-footer">
          <navlink href="#" className="login-link">
            {translation[TRANSLATION_KEYS.LOGIN.LINK_REGISTER]}
          </navlink>
          <a href="#" className="login-link">
            {translation[TRANSLATION_KEYS.LOGIN.LINK_FORGOT_PASSWORD]}
          </a>
        </div>
      </div>
    </div>
  );
}
