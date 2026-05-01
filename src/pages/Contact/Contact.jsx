import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, HelpCircle } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        {/* Contact Hero */}
        <section className={`section ${styles.pageIntro}`}>
          <div className="container">
            <p className="eyebrow">Contact & Booking</p>
            <h1 className='page-title'>Ready to Bring Your Vision to Life?</h1>
            <p className="page-copy">
              Let's start planning your perfect day. Reach out to discuss your event, ask questions, and get started on your rental inquiry.
            </p>
            <a
              className={`btn btn-primary ${styles.contactCompactBtn}`}
              href="https://www.facebook.com/LymanRentals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on Facebook
            </a>
          </div>
        </section>

        {/* Info Cards */}
        <section className={`section ${styles.infoSection}`}>
          <div className="container">
            <div className={styles.infoGrid}>
              {/* Location Card */}
              <article className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MapPin size={28} />
                </div>
                <h3>Location & Service Area</h3>
                <p>
                  <strong>Based in:</strong>
                  <br />
                  Smithville, Ontario
                </p>
                <p>
                  <strong>We serve:</strong>
                  <br />
                  Hamilton, Ontario & Surrounding Areas
                </p>
                <p className={styles.infoSmall}>*Additional fees may apply for destinations outside our typical service area*</p>
              </article>

              {/* Timeline Card */}
              <article className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Clock size={28} />
                </div>
                <h3>Booking Timeline</h3>
                <p>
                  <strong>Ideal booking window:</strong>
                  <br />
                  2–3 months before your event
                </p>
                <p>
                  <strong>Peak season:</strong>
                  <br />
                  May–October
                </p>
                <p className={styles.infoSmall}>*We do our best to accommodate shorter timelines. Contact us for availability.*</p>
              </article>

              {/* FAQ Card */}
              <article className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <HelpCircle size={28} />
                </div>
                <h3>Have Questions?</h3>
                <p>Check out our FAQ page for answers to common questions about delivery, setup, and booking.</p>
                <Link to="/faq" className={styles.infoLink}>
                  Visit FAQ →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className={`section ${styles.processSection}`}>
          <div className="container">
            <div className={styles.processIntro}>
              <p className="eyebrow">How It Works</p>
              <h2>Getting Started Is Easy</h2>
              <p>Here's what to expect when you reach out to us:</p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h4>Reach Out</h4>
                <p>Message us on Facebook with your event date, location, and rental needs.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h4>Discuss Details</h4>
                <p>We'll chat about your vision, answer questions, and provide personalized recommendations.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h4>Get a Quote</h4>
                <p>Receive transparent pricing for your selected rentals and optional delivery/setup.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h4>Book Your Event</h4>
                <p>Confirm your reservation with a deposit and finalize logistics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Browse & Contact CTA */}
        <section className={`section ${styles.browseSection}`}>
          <div className="container">
            <div className={styles.browseContent}>
              <h2>Not sure what you need yet?</h2>
              <p>Browse our full rental collection to explore options and get inspired for your event.</p>
              <Link className="btn btn-secondary" to="/products">
                Browse All Rentals
              </Link>
            </div>
          </div>
        </section>

        {/* Direct Contact CTA */}
        <section className={`section ${styles.finalCtaSection}`}>
          <div className="container">
            <div className={styles.finalCtaContent}>
              <h2>Let's Create Something Beautiful</h2>
              <p>
                We're here to help make your wedding or event unforgettable. Reach out today — we'd love to hear about your vision.
              </p>
              <a
                className="btn btn-primary"
                href="https://www.facebook.com/LymanRentals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Contact;
