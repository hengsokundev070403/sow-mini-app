import { useLanguage } from '../context/LanguageContext.jsx';
import { TRANSLATION_KEYS } from '../constants/translationKeys.js';
import '../styles/appTopbar.css';
import profileImage from '../assets/profile.png';

export default function AppTopbar() {
  const { language, setLanguage, translation, isLoading } = useLanguage();

  if (isLoading || translation == null) {
    return <div>loading ui</div>;
  }

  return (
    <div className="app-topbar-container">
      <button className="topbar-hamburger-btn desktop-mode-hide">☰</button>

      <div className="app-user-info">
        <img src={profileImage} alt="user" className="user-avatar" />
        <div className="user-details">
          <div className="user-name">John Andre</div>
          <div className="user-address">Storfjord AS</div>
        </div>
      </div>

      <button
        className="topbar-lang-btn"
        onClick={() => setLanguage(language === 'en-GB' ? 'sv-SE' : 'en-GB')}
      >
        <span className="lang-text">
          {translation[TRANSLATION_KEYS.NAVBAR.LANGUAGE_TOGGLE]}
        </span>
        {language === 'en-GB' ? (
          <img
            className="topbar-flag"
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt="Great Britain"
          />
        ) : (
          <img
            className="topbar-flag"
            src="https://storage.123fakturere.no/public/flags/SE.png"
            alt="Sweden"
          />
        )}
      </button>
    </div>
  );
}
