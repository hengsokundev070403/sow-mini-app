import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginTopbar from './components/LoginTopbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricelist from './pages/Pricelist';
import DummyPage from './pages/DummyPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="public-background">
              <LoginTopbar />
              <Login />
            </div>
          }
        />

        <Route
          path="/register"
          element={
            <div className="public-background">
              <LoginTopbar />
              <Register />
            </div>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/pricelist" element={<Pricelist />} />
            <Route path="/customers" element={<DummyPage />} />
            <Route path="/invoices" element={<DummyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
