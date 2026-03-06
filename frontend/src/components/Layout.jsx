import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './AppTopbar';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Topbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}