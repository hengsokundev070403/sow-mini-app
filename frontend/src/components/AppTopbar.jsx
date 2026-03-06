import { useLanguage } from '../context/LanguageContext.jsx';
import { TRANSLATION_KEYS } from '../constants/translationKeys.js';

export default function AppTopbar() {
  const { language, setLanguage, translation, isLoading } = useLanguage();

  if (isLoading || translation == null) {
    return <div>loading ui</div>;
  }

  return (
    <div style={{ padding: '10px', background: '#007bff', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>Placeholder App Topbar</div>
      <button onClick={() => setLanguage(language === 'en-GB' ? 'sv-SE' : 'en-GB')}>
        Toggle Language ({language})
      </button>
    </div>
  );
}
