import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: 'Do you offer delivery and setup?',
    answer:
      'Yes! We offer delivery to Hamilton, Ontario and surrounding areas. Delivery fees vary depending on your location and rental selections. Setup is included, however if you are picking up a rental, we will provide you with instructions on how to set the items up. All rental items are easy to setup. Contact us for a custom quote based on your event needs and location.'
  },
  {
    id: 2,
    question: 'How far do you travel for events?',
    answer:
      "Our primary service area is Hamilton, Ontario and surrounding regions. We do travel for events outside our typical range. Additional travel fees may apply. Reach out to us with your location, and we'll let you know what's possible for your celebration."
  },
  {
    id: 3,
    question: 'How early should we book?',
    answer:
      'We recommend booking at least 2–3 months before your event to secure your preferred items and delivery dates. During peak wedding season (May–October), earlier booking ensures better availability. We\'ll do our best to accommodate shorter timelines, so reach out even if your event is coming up soon.'
  },
  {
    id: 4,
    question: 'Can we customize a rental package?',
    answer:
      'Absolutely! We love working with couples and planners to build a custom rental package that fits your vision and budget. Mix and match pieces from our collection, or inquire about custom decor options. Message us on Facebook or reach out to discuss your specific needs.'
  },
  {
    id: 5,
    question: 'Do you require a deposit to book?',
    answer:
      "Nope! Due to a variety of scams online, we do not require a deposit. However depending on rental size, we may ask for a diposit. Payment terms and schedule will be discussed once we confirm your selections."
  }
];

function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.accordionContainer}>
      {faqs.map((faq) => (
        <div key={faq.id} className={styles.accordionItem}>
          <button
            className={`${styles.accordionQuestion} ${openId === faq.id ? styles.active : ''}`}
            onClick={() => toggleOpen(faq.id)}
            aria-expanded={openId === faq.id}
          >
            <span>{faq.question}</span>
            <ChevronDown size={24} className={styles.chevron} />
          </button>
          {openId === faq.id && <div className={styles.accordionAnswer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        {/* FAQ Hero */}
        <section className={`section ${styles.faqHero}`}>
          <div className="container">
            <p className="eyebrow">Questions?</p>
            <h1 className='page-title'>Frequently Asked Questions</h1>
            <p className="page-copy">
              Find answers to common questions about our rental process, delivery, and booking. If you have additional questions, reach out — we're here to help!
            </p>
          </div>
        </section>

        {/* Accordion Section */}
        <section className={`section ${styles.faqContent}`}>
          <div className="container">
            <FAQAccordion />
          </div>
        </section>

        {/* Additional Help CTA */}
        <section className={`section ${styles.helpSection}`}>
          <div className="container">
            <div className={styles.helpCard}>
              <h2>Still have questions?</h2>
              <p>Our team is ready to help you plan the perfect event. Reach out anytime.</p>
              <div className={styles.helpButtons}>
                <a
                  className="btn btn-primary"
                  href="https://www.facebook.com/LymanRentals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message us on Facebook
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  Go to Contact Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default FAQ;
