import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginTopbar from './components/LoginTopbar';
import LoginFooter from './components/LoginFooter';
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
              <LoginFooter />
            </div>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/invoices" element={<DummyPage />} />
            <Route path="/customers" element={<DummyPage />} />
            <Route path="/my-business" element={<DummyPage />} />
            <Route path="/invoice-journal" element={<DummyPage />} />
            <Route path="/price-list" element={<Pricelist />} />
            <Route path="/multiple-invoicing" element={<DummyPage />} />
            <Route path="/unpaid-invoices" element={<DummyPage />} />
            <Route path="/offer" element={<DummyPage />} />
            <Route path="/inventory-control" element={<DummyPage />} />
            <Route path="/member-invoicing" element={<DummyPage />} />
            <Route path="/import-export" element={<DummyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
