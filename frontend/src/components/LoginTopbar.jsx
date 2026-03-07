import { useLanguage } from '../context/LanguageContext.jsx';

export default function LoginTopbar() {
  const { language, setLanguage, translation, isLoading } = useLanguage();

  if (isLoading || translation == null) {
    return <div>loading ui</div>;
  }

  return (
    <div style={{ padding: '10px', background: '#007bff', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>Placeholder login Topbar</div>
      <button onClick={() => setLanguage(language === 'en-GB' ? 'sv-SE' : 'en-GB')}>
        Toggle Language ({language})
      </button>
    </div>
  );
}
