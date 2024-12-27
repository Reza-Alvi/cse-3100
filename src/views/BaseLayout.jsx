import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header
        className="d-flex align-items-center bg-light"
        style={{ padding: '10px 20px', borderBottom: '1px solid #ccc' }}
      >
        <h1>
          <Link
            className="text-decoration-none text-dark"
            to="/"
            style={{ fontSize: '1.8rem', fontWeight: 'bold' }}
          >
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav" style={{ display: 'flex', gap: '20px' }}>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: '#2c3e50',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
                onMouseOut={(e) => (e.target.style.color = '#2c3e50')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about-us"
                style={{
                  color: '#2c3e50',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
                onMouseOut={(e) => (e.target.style.color = '#2c3e50')}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/available-cats"
                style={{
                  color: '#2c3e50',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
                onMouseOut={(e) => (e.target.style.color = '#2c3e50')}
              >
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact-us"
                style={{
                  color: '#2c3e50',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
                onMouseOut={(e) => (e.target.style.color = '#2c3e50')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer
        className="bg-light"
        style={{
          padding: '10px 20px',
          textAlign: 'center',
          borderTop: '1px solid #ccc',
          marginTop: '40px',
        }}
      >
        <p style={{ margin: '0', fontSize: '1rem', color: '#7f8c8d' }}>
          © Copyright 2024 Purrfect Adoption. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
