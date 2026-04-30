import React from 'react';
import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <p className="footer-brand">Lyman Rentals</p>
          <p className="footer-copy">Wedding & party rentals curated to make celebrations feel warm, polished, and memorable.</p>
        </div>

        <div>
          <p className="footer-heading">Navigate</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="footer-heading">Service</p>
          <div className="footer-links footer-text">
            <span>Smithville, Hamilton, and surrounding Ontario events.</span>
            <span>Curated rentals for weddings, showers, celebrations, and gatherings.</span>
          </div>
        </div>

        <div>
          <p className="footer-heading">Connect</p>
          <div className="footer-links">
            <a href="https://www.facebook.com/LymanRentals" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <Link to="/contact">Start an inquiry</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Lyman Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
