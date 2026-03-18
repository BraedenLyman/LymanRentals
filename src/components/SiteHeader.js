import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' }
];

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">Lyman Rentals</span>
          <span className="brand-sub">Wedding & Event Rentals</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-expanded={mobileMenuOpen} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
            <NavLink className="btn btn-primary mobile-menu-cta" to="/contact" onClick={closeMenu}>
              Start Your Inquiry
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
