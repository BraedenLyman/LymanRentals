import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-section">
            <div className="footer-brand">Lyman Rentals</div>
            <p className="footer-tagline">Elegant wedding and event rentals designed to bring your vision to life.</p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/LymanRentals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/products">Rentals</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <strong>Location:</strong>
                <br />
                Smithville, Ontario
              </p>
              <p>
                <strong>Service Area:</strong>
                <br />
                Hamilton, Ontario & Surrounding Areas
              </p>
              <p>
                <strong>Message us:</strong>
                <br />
                <a href="https://www.facebook.com/LymanRentals" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>
                  Facebook Messenger
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider">
          © {currentYear} Lyman Rentals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
