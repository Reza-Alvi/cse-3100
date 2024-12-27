import React from 'react';

export default function AboutUs() {
  return (
    <>
      <section
        style={{
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          color: '#2c3e50', // Dark professional gray-blue for text
          lineHeight: '1.8',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.8rem', color: '#34495e', marginBottom: '10px' }}>
            About Us
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
            Connecting compassion with care, one cat at a time.
          </p>
        </header>

        <h3 style={{ fontSize: '2rem', color: '#1abc9c', marginTop: '30px' }}>
          Our Mission
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
          Our mission is to ensure every cat finds a safe, loving, and permanent home. 
          We believe in compassionate care and providing unmatched support to pet adopters 
          while raising awareness about responsible pet ownership.
        </p>

        <h3 style={{ fontSize: '2rem', color: '#1abc9c', marginTop: '30px' }}>
          Our History
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
          Established over a decade ago, Purrfect Adoption has evolved into a beacon of hope for cats in need. 
          What began as a small rescue effort is now a well-regarded organization with a network of supporters, 
          volunteers, and adopters united in one goal—saving lives and building families.
        </p>

        <h3 style={{ fontSize: '2rem', color: '#1abc9c', marginTop: '30px' }}>
          Our Team
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: '40px',
          }}
        >
          {['Bob Doe', 'Jane Smith', 'Sam Lee'].map((member, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                maxWidth: '200px',
                margin: '10px',
                color: '#34495e',
              }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: '#ecf0f1',
                  borderRadius: '50%',
                  margin: '0 auto 10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              ></div>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '5px 0' }}>
                {member}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>Director</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          backgroundColor: '#34495e',
          color: '#ecf0f1',
          textAlign: 'center',
          padding: '20px',
          marginTop: '40px',
        }}
      >
        <p style={{ margin: '0 0 10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Stay Connected
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <a
            href="mailto:info@purrfectadoption.com"
            style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
            onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
          >
            Email
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
            onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
            onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#ecf0f1',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#1abc9c')}
            onMouseOut={(e) => (e.target.style.color = '#ecf0f1')}
          >
            X
          </a>
        </div>
      </footer>
    </>
  );
}
