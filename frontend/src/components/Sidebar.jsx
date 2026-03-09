import '../styles/sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Menu</h3>
      <div className="sidebar-body">
        <nav className="sidebar-menu">
          <NavLink to="/invoices" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="#34e2fb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="19,3 19,9 25,9 19,3 7,3 7,29 25,29 25,9 " />
                <line x1="10" y1="14" x2="21" y2="14" stroke="white" />
                <line x1="10" y1="18" x2="21" y2="18" stroke="white" />
                <line x1="10" y1="22" x2="21" y2="22" stroke="white" />
              </svg>
            </span>
            <span className="sidebar-text">Invoices</span>
          </NavLink>
          <NavLink to="/customers" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#48dba5">
                <path d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6Zm-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
              </svg>
            </span>
            <span className="sidebar-text">Customers</span>
          </NavLink>
          <NavLink to="/my-business" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                strokeWidth="2"
                stroke="#34e2fb"
                fill="white"
              >
                <path d="M25.995 19.068h-1.324a9.423 9.423 0 0 1-.918 2.203l1.224 1.223a2.006 2.006 0 0 1 0 2.836l-.709.709a2.006 2.006 0 0 1-2.836 0L20.2 24.808a9.437 9.437 0 0 1-2.194.903v1.284A2.005 2.005 0 0 1 16.001 29h-1.002a2.006 2.006 0 0 1-2.006-2.005v-1.284a9.498 9.498 0 0 1-2.194-.903l-1.231 1.231a2.004 2.004 0 0 1-2.835 0l-.71-.709a2.006 2.006 0 0 1 0-2.836l1.224-1.223a9.486 9.486 0 0 1-.919-2.203H5.005A2.004 2.004 0 0 1 3 17.064v-1.003c0-1.107.897-2.005 2.005-2.005h1.308A9.413 9.413 0 0 1 7.2 11.87l-1.177-1.176a2.006 2.006 0 0 1 0-2.836l.709-.708a2.004 2.004 0 0 1 2.835 0l1.153 1.153a9.445 9.445 0 0 1 2.272-.95V6.005A2.007 2.007 0 0 1 14.999 4h1.002c1.107 0 2.005.897 2.005 2.005v1.347c.806.22 1.567.54 2.272.951l1.153-1.153a2.006 2.006 0 0 1 2.836 0l.709.708a2.006 2.006 0 0 1 0 2.836L23.8 11.87a9.45 9.45 0 0 1 .888 2.187h1.308c1.107 0 2.005.898 2.005 2.005v1.003a2.005 2.005 0 0 1-2.006 2.003zM15.5 11.08a5.514 5.514 0 1 0 0 11.029 5.514 5.514 0 0 0 0-11.029zm0 7.957a2.506 2.506 0 1 1-.002-5.012 2.506 2.506 0 0 1 .002 5.012z" />
              </svg>
            </span>
            <span className="sidebar-text">My Business</span>
          </NavLink>
          <NavLink to="/invoice-journal" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#34e2fb">
                <path d="M5 3 H19 A1 1 0 0 1 20 4 V7 H8 V11 H20 V20 A1 1 0 0 1 19 21 H5 A1 1 0 0 1 4 20 V4 A1 1 0 0 1 5 3 Z" />
              </svg>
            </span>
            <span className="sidebar-text">Invoice Journal</span>
          </NavLink>
          <NavLink to="/price-list" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFAC1C">
                <path d="M21.47 11.58l-6.42-6.41a1 1 0 0 0-.61-.29L5.09 4a1 1 0 0 0-.8.29 1 1 0 0 0-.29.8l.88 9.35a1 1 0 0 0 .29.61l6.41 6.42a1.84 1.84 0 0 0 1.29.53 1.82 1.82 0 0 0 1.28-.53l7.32-7.32a1.82 1.82 0 0 0 0-2.57zm-9.91 0a1.5 1.5 0 1 1 0-2.12 1.49 1.49 0 0 1 0 2.1z" />
              </svg>
            </span>
            <span className="sidebar-text">Price List</span>
          </NavLink>
          <NavLink to="/multiple-invoicing" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="#2cbdd3"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="19,3 19,9 25,9 19,3 7,3 7,29 25,29 25,9 " />
                <line x1="10" y1="14" x2="21" y2="14" />
                <line x1="10" y1="18" x2="21" y2="18" />
                <line x1="10" y1="22" x2="21" y2="22" />
              </svg>
            </span>
            <span className="sidebar-text">Multiple Invoicing</span>
          </NavLink>
          <NavLink to="/unpaid-invoices" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="#dd1b1b">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.29289 5.70711L6.58579 8L4.29289 10.2929L5.70711 11.7071L8 9.41421L10.2929 11.7071L11.7071 10.2929L9.41421 8L11.7071 5.70711L10.2929 4.29289L8 6.58579L5.70711 4.29289L4.29289 5.70711Z"
                />
              </svg>
            </span>
            <span className="sidebar-text">Unpaid Invoices</span>
          </NavLink>
          <NavLink to="/offer" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#eebf59"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="20" height="20" />
                <line x1="11" y1="16" x2="17" y2="10" />
                <circle cx="11" cy="10" r="1" fill="currentColor" />
                <circle cx="17" cy="16" r="1" fill="currentColor" />
              </svg>
            </span>
            <span className="sidebar-text">Offer</span>
          </NavLink>
          <NavLink to="/inventory-control" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#2cbdd3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="6" height="3" x="9" y="3" rx="1" />
                <path d="M18 4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
              </svg>
            </span>
            <span className="sidebar-text">Inventory Control</span>
          </NavLink>
          <NavLink to="/member-invoicing" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  width="18"
                  height="14"
                  x="3"
                  y="5"
                  rx="1"
                  fill="#336fc9"
                  stroke="#336fc9"
                  transform="rotate(180 12 12)"
                />
                <path d="M17 15h-4m-4 0H7m14-6H3" stroke="white" />
              </svg>
            </span>
            <span className="sidebar-text">Member Invoicing</span>
          </NavLink>
          <NavLink to="/import-export" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M25.8218,10.124a9.9991,9.9991,0,0,0-19.6435,0A7.4964,7.4964,0,0,0,7.5,25H24.5a7.4964,7.4964,0,0,0,1.3218-14.876Z"
                  fill="#6e8cec"
                  stroke="#6e8cec"
                />
                <line x1="16" y1="26" x2="16" y2="16" stroke="white" />
                <polyline points="12 20 16 16 20 20" stroke="white" />
              </svg>
            </span>
            <span className="sidebar-text">Import/Export</span>
          </NavLink>
          <a href="#" className="sidebar-menu-item">
            <span className="sidebar-icon">
              <svg viewBox="0 0 24 26" width="20" height="20" fill="#34e2fb">
                <path d="M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z" />
              </svg>
            </span>
            <span className="sidebar-text">Log out</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
