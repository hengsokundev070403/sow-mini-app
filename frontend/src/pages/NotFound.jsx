import { Link } from 'react-router-dom';
import '../styles/notfound.css';
export default function NotFound() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="error-number">404</h1>
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="message">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className='btn-wrapper'>
          <Link className="return-link" to="/price-list">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
