import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './home.css';

function Contact() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        <section className="section page-intro">
          <div className="container contact-simple-wrap">
            <p className="eyebrow">Contact & Booking</p>
            <h1 className="page-title">Ready to bring your vision to life? Let&apos;s start planning your perfect day.</h1>
            <p className="page-copy">For availability and inquiries, reach out to us via Facebook Messenger.</p>
            <a
              className="btn btn-primary contact-compact-btn"
              href="https://www.facebook.com/LymanRentals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on Facebook
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Contact;
