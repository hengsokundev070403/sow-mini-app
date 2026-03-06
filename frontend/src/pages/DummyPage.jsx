import { useLocation } from 'react-router-dom';

export default function DummyPage() {
  const location = useLocation();
  return <h1>This is the {location.pathname.replace('/', '')} page</h1>;
}