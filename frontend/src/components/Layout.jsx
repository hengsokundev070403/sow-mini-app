import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppTopbar from './AppTopbar';
import '../styles/layout.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <AppTopbar />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
