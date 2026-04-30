import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, CheckCircle2, MessageCircleHeart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { products } from '../data/products';
import './home.css';

const testimonials = [
  {
    quote: 'The ceremony setup felt elevated the moment guests arrived. Every piece looked intentional and photographed beautifully.',
    author: 'Emily & Carter'
  },
  {
    quote: 'We wanted warm, elegant rentals without overcomplicating the design. Lyman Rentals made it feel easy and polished.',
    author: 'Brianna M.'
  },
  {
    quote: 'As a planner, I value inventory that feels dependable and refined. These pieces always land well in the room and on camera.',
    author: 'Alex R., Event Planner'
  }
];

const processSteps = [
  {
    title: 'Browse Rentals',
    description: 'Explore the collection and shortlist the pieces that fit your event style.',
    icon: Sparkles
  },
  {
    title: 'Choose Favorites',
    description: 'Build your wishlist around ceremony moments, lounge styling, and guest experience.',
    icon: MessageCircleHeart
  },
  {
    title: 'Contact To Book',
    description: 'Send your date and must-have pieces so availability can be confirmed quickly and clearly.',
    icon: CalendarDays
  },
  {
    title: 'Celebrate',
    description: 'Enjoy a polished event atmosphere built around thoughtful, memorable details.',
    icon: CheckCircle2
  }
];

function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/welcome.png)` }} />
          <div className="hero-overlay" />
          <div className="hero-sparkles" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className={`sparkle sparkle-${index + 1}`} />
            ))}
          </div>

          <div className="container hero-grid">
            <motion.div
              className="hero-copy-block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="eyebrow hero-eyebrow">Elegant Rentals For Meaningful Celebrations</p>
              <h1>Beautifully curated wedding and event rentals that feel effortless.</h1>
              <p className="hero-copy">
                We help couples and planners create warm, polished event spaces with reliable service, thoughtful pieces, and a stress-free process.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/products">
                  View Products
                </Link>
                <Link className="btn btn-secondary btn-hero-secondary" to="/contact">
                  Start Inquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section reveal-on-scroll featured-rentals-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Featured Rentals</p>
                <h2>Signature pieces that shape the atmosphere from the first glance.</h2>
              </div>
            </div>

            <div className="category-showcase featured-rentals-grid">
              {featuredProducts.map((product) => (
                <article key={product.id} className="category-showcase-card">
                  <div className="category-card-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="category-card-body">
                    <p className="eyebrow">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                    <Link to="/products" className="text-link">
                      View rental
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft reveal-on-scroll">
          <div className="container why-grid">
            <div className="why-intro">
              <p className="eyebrow">Why Choose Lyman Rentals</p>
              <h2>Refined pieces. Thoughtfully placed.</h2>
              <p>
                Our collection is built for couples and hosts who value atmosphere. Every piece is carefully chosen to shape a space that feels warm, cohesive, and naturally beautiful, creating a lasting impression without excess.
              </p>
            </div>
            <div className="why-image-wrap">
              <img src="/images/18.png" alt="Lyman Rentals styled event inspiration" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section inspiration-section reveal-on-scroll">
          <div className="container inspiration-grid">
            <div className="inspiration-copy">
              <p className="eyebrow">Event Inspiration</p>
              <h2>Framing the moments that matter</h2>
              <p>
                The most meaningful scenes aren’t crowded... they’re composed. A single, beautifully styled focal point can hold the entire experience, creating a setting that feels effortless, intimate, and unforgettable.
              </p>
            </div>

            <div className="inspiration-collage">
              <div className="inspiration-card tall">
                <img className="inspiration-image-right" src="/images/17.PNG" alt="Styled wedding arch inspiration" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft reveal-on-scroll">
          <div className="container">
            <p className="eyebrow">Simple Process</p>
            <h2>A polished booking experience from first browse to event day.</h2>
            <div className="process-grid">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="process-card">
                    <span className="step-index">0{index + 1}</span>
                    <div className="process-head">
                      <Icon size={18} />
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section reveal-on-scroll">
          <div className="container testimonial-shell">
            <div className="testimonial-heading">
              <p className="eyebrow">Trust & Testimonials</p>
              <h2>Made for celebrations that deserve a stronger first impression.</h2>
            </div>

            <div className="testimonial-slider">
              <AnimatePresence mode="wait">
                <motion.article
                  key={testimonials[activeTestimonial].author}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="testimonial-quote">“{testimonials[activeTestimonial].quote}”</p>
                  <span>{testimonials[activeTestimonial].author}</span>
                </motion.article>
              </AnimatePresence>

              <div className="testimonial-dots" aria-label="Testimonial navigation">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    className={`testimonial-dot ${index === activeTestimonial ? 'is-active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="trust-points">
              <article>
                <h3>Designed to photograph well</h3>
                <p>Visual texture, shape, and scale are chosen with real event imagery in mind.</p>
              </article>
              <article>
                <h3>Clearer planning decisions</h3>
                <p>A focused collection makes it easier to choose pieces that work together.</p>
              </article>
              <article>
                <h3>Celebration-first atmosphere</h3>
                <p>The goal is always a room that feels welcoming, elevated, and easy to remember.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal-on-scroll">
          <div className="container cta-banner">
            <div>
              <p className="eyebrow">Ready To Plan</p>
              <h2>Bring together rentals that make your event feel complete from the moment guests arrive.</h2>
              <p>Browse the collection or head straight to the contact page if you already know the pieces you want for your date.</p>
            </div>

            <div className="cta-banner-actions">
              <Link className="btn btn-secondary" to="/products">
                View Rentals
              </Link>
              <Link className="btn btn-primary" to="/contact">
                Get In Touch
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
