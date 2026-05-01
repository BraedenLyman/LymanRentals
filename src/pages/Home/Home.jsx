import React from 'react';
import { CalendarDays, CheckCircle2, MessageCircleHeart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { products } from '../../data/products';
import styles from './Home.module.css';

const testimonials = [
  {
    quote:
      'The arch and bench setup completely transformed our ceremony space. Everything was clean, beautiful, and exactly as expected.',
    author: 'Emily S.'
  },
  {
    quote:
      'We planned our event quickly and Lyman Rentals made the rental side easy. Communication was fast and pickup was seamless.',
    author: 'Brianna M.'
  },
  {
    quote:
      'As a coordinator, I appreciate vendors who are dependable and organized. Their pieces always photograph beautifully.',
    author: 'Alex R.'
  }
];

const processSteps = [
  {
    title: 'Browse',
    description: 'Explore our curated rental collection and save the pieces you love.',
    icon: Sparkles
  },
  {
    title: 'Inquire',
    description: 'Send your event date, venue, and wishlist through our quick inquiry form.',
    icon: MessageCircleHeart
  },
  {
    title: 'Confirm',
    description: 'We confirm availability, pricing, and logistics with transparent communication.',
    icon: CalendarDays
  },
  {
    title: 'Celebrate',
    description: 'Enjoy a beautifully styled event with dependable pickup or delivery options.',
    icon: CheckCircle2
  }
];

function Home() {
  const featuredProducts = products.filter((product) =>
    ['whiskey-barrel-tables', 'benches', 'arches'].includes(product.slug)
  );

  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section
          id="home"
          className={styles.hero}
          style={{
            backgroundImage: `linear-gradient(rgba(27, 18, 10, 0.42), rgba(27, 18, 10, 0.1)), url(${process.env.PUBLIC_URL}/images/welcome.png)`
          }}
        >
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <p className="eyebrow">Elegant Rentals for Meaningful Celebrations</p>
              <h1>Beautifully curated wedding and event rentals that feel effortless.</h1>
              <p className={styles.heroCopy}>
                We help couples and planners create warm, polished event spaces with reliable service, thoughtful pieces, and a stress-free process.
              </p>
              <div className={styles.heroActions}>
                <Link className="btn btn-primary" to="/products">
                  View Products
                </Link>
                <Link className={`btn btn-secondary ${styles.startInquiryBtn}`} to="/contact">
                  Start Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`section ${styles.about}`}>
          <div className={`container ${styles.aboutGrid}`}>
            <div>
              <p className="eyebrow">Why Couples Choose Us</p>
              <h2>Warm, high-quality rentals with dependable event-day support.</h2>
              <p>
                We focus on timeless pieces that photograph beautifully and elevate your venue without overcomplicating your planning process. From ceremony focal points to reception details, every item is selected to feel refined, welcoming, and celebration-ready.
              </p>
            </div>
            <div className={styles.aboutCards}>
              <article>
                <h3>Quality You Can Trust</h3>
                <p>Clean, event-ready inventory with careful attention to presentation and condition.</p>
              </article>
              <article>
                <h3>Reliable Communication</h3>
                <p>Clear responses, transparent pricing, and a process that keeps planning simple.</p>
              </article>
              <article>
                <h3>Designed for Real Events</h3>
                <p>Pieces selected for visual impact, practical use, and seamless styling flexibility.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={`section ${styles.rentalsSection}`}>
          <div className="container">
            <div className={styles.rentalsHead}>
              <div>
                <p className="eyebrow">Featured Collection</p>
                <h2>Explore a preview of our curated inventory.</h2>
              </div>
            </div>

            <div className={styles.rentalGrid}>
              {featuredProducts.map((product) => (
                <article key={product.id} className={styles.rentalCard}>
                  <div className={styles.rentalImageWrap}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span className={styles.tag}>{product.category}</span>
                  </div>
                  <div className={styles.rentalCardBody}>
                    <h3>{product.name}</h3>
                    <p className={styles.price}>{product.price}</p>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.featuredProductsFooter}>
              <Link to="/products" className="btn btn-secondary">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={`section ${styles.processSection}`}>
          <div className="container">
            <p className="eyebrow">How It Works</p>
            <h2>A simple process from first message to event day.</h2>
            <div className={styles.processGrid}>
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className={styles.processCard}>
                    <span className={styles.stepIndex}>0{index + 1}</span>
                    <div className={styles.processHead}>
                      <Icon size={20} />
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`section ${styles.testimonialSection}`}>
          <div className="container">
            <p className="eyebrow">Client Feedback</p>
            <h2>Trusted by couples.</h2>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <article key={testimonial.author}>
                  <p>"{testimonial.quote}"</p>
                  <span>{testimonial.author}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${styles.contactSection}`}>
          <div className={`container ${styles.contactWrap}`}>
            <div>
              <p className="eyebrow">Ready To Book?</p>
              <h2>Head to the contact page to submit your event details.</h2>
            </div>
            <div className={styles.contactCard}>
              <Link className="btn btn-primary" to="/contact">
                Go to Contact Page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default Home;
