import React, { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' }
];

function SiteHeader() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerClassName = `site-header ${pathname !== '/' || isScrolled ? 'is-solid' : ''}`;

  return (
    <header className={headerClassName}>
      <div className="container nav-wrap">
        <NavLink className="brand" to="/">
          <span className="brand-mark">Lyman Rentals</span>
          <span className="brand-sub">Wedding & Party Rentals</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink className="btn nav-cta" to="/contact">
            <Sparkles size={16} />
            Contact Us
          </NavLink>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="mobile-menu">
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
            <NavLink className="btn btn-primary mobile-menu-cta" to="/contact">
              Contact Us
            </NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default SiteHeader;
