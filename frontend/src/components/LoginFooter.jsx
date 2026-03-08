import { TRANSLATION_KEYS } from '../constants/translationKeys.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import '../styles/login.css';
export default function LoginFooter() {
  const { translation } = useLanguage();
  if (translation == null) {
    return <div>loading ui</div>;
  }
  return (
    <div className="footer-container">
      <section className="text-section">
        <div className="fakturera-text">123 fakturera</div>
        <div>
          <nav className="footer-nav">
            <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.HOME]}</a>
            <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.ORDER]}</a>
            <a href="#">{translation[TRANSLATION_KEYS.NAVBAR.CONTACT_US]}</a>
          </nav>
        </div>
      </section>

      <hr className="hr-line" />
      <p className="copyright">
        © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
      </p>
    </div>
  );
}
