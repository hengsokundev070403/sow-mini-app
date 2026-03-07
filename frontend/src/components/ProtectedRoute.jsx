import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { isAuthenticate } = useAuth();

  if (!isAuthenticate) {
    return <Navigate to="/login" replace/>;
  } else {
    return <Outlet />;
  }
}
