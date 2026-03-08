import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { TRANSLATION_KEYS } from '../constants/translationKeys.js';
import '../styles/login.css';

export default function LoginTopbar() {
  const { language, setLanguage, translation, isLoading } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (isLoading || translation == null) {
    return <div>loading ui</div>;
  }

  return (
    <div className="login-topbar">
      <img
        className="login-topbar-logo"
        src="https://storage.123fakturera.se/public/icons/diamond.png"
        alt="diamond logo"
      />
      <button
        className="login-hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <nav className="login-desktop-nav">
        <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.HOME]}</a>
        <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.ORDER]}</a>
        <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.OUR_CUSTOMERS]}</a>
        <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.ABOUT_US]}</a>
        <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.CONTACT_US]}</a>
      </nav>
      <div className={`login-mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <nav className="login-mobile-nav">
          <a className="drop-down-item" href="#">
            {translation[TRANSLATION_KEYS.NAVBAR.HOME]}
          </a>
          <a className="drop-down-item" href="#">
            {translation[TRANSLATION_KEYS.NAVBAR.ORDER]}
          </a>
          <a className="drop-down-item" href="#">
            {translation[TRANSLATION_KEYS.NAVBAR.OUR_CUSTOMERS]}
          </a>
          <a className="drop-down-item" href="#">
            {translation[TRANSLATION_KEYS.NAVBAR.ABOUT_US]}
          </a>
          <a className="drop-down-item" href="#">
            {translation[TRANSLATION_KEYS.NAVBAR.CONTACT_US]}
          </a>
        </nav>
      </div>
     
      <button
        className="login-toggle-lang-btn"
        onClick={() => setLanguage(language === 'en-GB' ? 'sv-SE' : 'en-GB')}
      >
        {translation[TRANSLATION_KEYS.NAVBAR.LANGUAGE_TOGGLE]}
        {language == 'en-GB' ? (
          <img
            className="login-topbar-country"
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt="Great Britain"
          />
        ) : (
          <img
            className="login-topbar-country"
            src="https://storage.123fakturere.no/public/flags/SE.png"
            alt="Sweden"
          />
        )}
      </button>
    </div>
  );
}
