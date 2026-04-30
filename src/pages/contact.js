import React, { useState } from 'react';
import { CalendarDays, MapPin, MessageCircleHeart, PhoneCall } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './home.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Wedding',
    interestedProducts: '',
    preferredContact: 'Facebook Message',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main page-with-top-space">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Tell us about the event you are planning and the atmosphere you want to create.</h1>
            <p className="page-copy">
              Use the form to organize your inquiry, then reach out through the contact options below so availability can be confirmed for your date.
            </p>
          </div>
        </section>

        <section className="section reveal-on-scroll">
          <div className="container">
            <div className="contact-grid">
              <form className="contact-form-card" onSubmit={handleSubmit}>
                <div className="section-heading section-heading-tight">
                  <div>
                    <p className="eyebrow">Inquiry Form</p>
                    <h2>Start with the essentials.</h2>
                  </div>
                </div>

                <div className="contact-form-grid">
                  <label>
                    Name
                    <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                  </label>
                  <label>
                    Phone
                    <input type="tel" name="phone" value={formState.phone} onChange={handleChange} />
                  </label>
                  <label>
                    Event Date
                    <input type="date" name="eventDate" value={formState.eventDate} onChange={handleChange} />
                  </label>
                  <label>
                    Event Type
                    <select name="eventType" value={formState.eventType} onChange={handleChange}>
                      <option>Wedding</option>
                      <option>Engagement Party</option>
                      <option>Bridal Shower</option>
                      <option>Birthday Celebration</option>
                      <option>Corporate Event</option>
                      <option>Other Special Event</option>
                    </select>
                  </label>
                  <label>
                    Preferred Contact Method
                    <select name="preferredContact" value={formState.preferredContact} onChange={handleChange}>
                      <option>Facebook Message</option>
                      <option>Email</option>
                      <option>Phone Call</option>
                    </select>
                  </label>
                </div>

                <label>
                  Interested Products / Rentals
                  <input
                    type="text"
                    name="interestedProducts"
                    placeholder="Arches, benches, lanterns, whiskey barrels..."
                    value={formState.interestedProducts}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Share your venue, style, guest count, or anything else that helps shape the right rental mix."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </label>

                {submitted ? (
                  <p className="success-note">Your inquiry details are organized. Reach out on Facebook below and Lyman Rentals can confirm availability for your date.</p>
                ) : null}

                <button type="submit" className="btn btn-primary">
                  Prepare Inquiry
                </button>
              </form>

              <div className="contact-info-column">
                <article className="premium-panel contact-info-panel">
                  <p className="eyebrow">Get In Touch</p>
                  <h3>Prefer a direct message?</h3>
                  <p>Facebook is the fastest way to begin the booking conversation and confirm date availability.</p>
                  <a className="btn btn-primary" href="https://www.facebook.com/LymanRentals" target="_blank" rel="noopener noreferrer">
                    Message On Facebook
                  </a>
                </article>

                <div className="contact-quick-info">
                  <div className="quick-info-item">
                    <MapPin size={20} />
                    <div>
                      <h4>Service Area</h4>
                      <p>Smithville, Hamilton, and surrounding Ontario events.</p>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <CalendarDays size={20} />
                    <div>
                      <h4>Best For</h4>
                      <p>Weddings, bridal events, private parties, and special celebrations.</p>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <MessageCircleHeart size={20} />
                    <div>
                      <h4>Inquiry Tip</h4>
                      <p>Including your event date and favorite rentals makes the first response more useful.</p>
                    </div>
                  </div>
                </div>

                <article className="premium-panel faq-panel">
                  <p className="eyebrow">Helpful Notes</p>
                  <h3>Keep the inquiry focused.</h3>
                  <div className="faq-list">
                    <div>
                      <strong>What should I include?</strong>
                      <p>Your date, event type, venue area, and the rentals that matter most.</p>
                    </div>
                    <div>
                      <strong>Do I need a full list right away?</strong>
                      <p>No. A short wishlist is enough to start the conversation clearly.</p>
                    </div>
                    <div>
                      <strong>Can you help narrow the selection?</strong>
                      <p>Yes. The contact page is designed to make that first conversation more efficient.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Contact;
