import React from 'react';
import { Heart, Users, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { products } from '../../data/products';
import styles from './Home.module.css';

// What We Offer Section
const offerings = [
  {
    id: 1,
    icon: Heart,
    title: 'Wedding Rentals',
    description: 'Arches, benches, décor, and ceremony pieces for your special day.'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Event Styling',
    description: 'Rustic-modern rentals for weddings, showers, and celebrations.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Custom Setups',
    description: 'Flexible rental options tailored to your venue and vision.'
  },
  {
    id: 4,
    icon: Truck,
    title: 'Delivery & Setup',
    description: 'Stress-free setup so you can focus on enjoying the moment.'
  }
];

// Why Choose Us
const trustPoints = [
  {
    id: 1,
    icon: Heart,
    title: 'Family-Owned',
    description: 'Born from a family wedding. We know what matters.'
  },
  {
    id: 2,
    icon: Users,
    title: 'Personalized Experience',
    description: 'We listen to your vision and make it real.'
  },
  {
    id: 3,
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'On-time, professional setup you can count on.'
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Rustic & Elegant',
    description: 'A curated collection that feels premium.'
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: 'Attention to Detail',
    description: 'Every piece chosen to photograph beautifully.'
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    quote:
      'The arch and benches completely transformed our ceremony space. Everything was clean, beautiful, and exactly as expected. We couldn\'t have asked for a better experience.',
    author: 'Emily S.',
    rating: 5
  },
  {
    id: 2,
    quote:
      'We planned our event quickly, and Lyman Rentals made the rental side easy. Communication was fast, pricing was transparent, and pickup was seamless.',
    author: 'Brianna M.',
    rating: 5
  },
  {
    id: 3,
    quote:
      'As a coordinator, I appreciate vendors who are dependable and organized. Their pieces always photograph beautifully, and they\'re easy to work with.',
    author: 'Alex R.',
    rating: 5
  }
];

function Home() {
  const featuredProducts = products.filter((product) =>
    ['arches', 'benches', 'whiskey-barrel-tables'].includes(product.slug)
  );

  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        {/* SECTION 1: Hero */}
        <section
          className={styles.hero}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(47, 47, 47, 0.5), rgba(47, 47, 47, 0.3)), url(${process.env.PUBLIC_URL}/images/hero/main-venue.png)`
          }}
        >
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Make Your Wedding Unforgettable</h1>
              <p className={styles.heroSubtext}>
                Elegant wedding and event rentals designed to bring your vision to life.
              </p>
              <div className={styles.heroActions}>
                <Link className="btn btn-primary" to="/products">
                  View Rentals
                </Link>
                <Link className={`btn btn-secondary ${styles.secondaryBtn}`} to="/contact">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: What We Offer */}
        <section className={`section ${styles.offeringSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className="eyebrow">What We Offer</p>
              <h2>Everything You Need for Your Perfect Day</h2>
            </div>

            <div className={styles.offeringGrid}>
              {offerings.map((offer) => {
                const Icon = offer.icon;
                return (
                  <article key={offer.id} className={styles.offeringCard}>
                    <div className={styles.offeringIcon}>
                      <Icon size={32} />
                    </div>
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: Featured Rentals */}
        <section className={`section ${styles.featuredSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className="eyebrow">Featured Collection</p>
              <h2>Explore Our Most Popular Rentals</h2>
            </div>

            <div className={styles.featuredGrid}>
              {featuredProducts.map((product) => (
                <article key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span className={styles.categoryTag}>{product.category}</span>
                  </div>
                  <div className={styles.productBody}>
                    <h3>{product.name}</h3>
                    <p className={styles.productPrice}>{product.price}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <Link to={`/products/${product.slug}`} className={styles.viewLink}>
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.viewAllContainer}>
              <Link to="/products" className="btn btn-secondary">
                View All Rentals
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: Why Choose Us */}
        <section className={`section ${styles.trustSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className="eyebrow">Why Couples Choose Us</p>
              <h2>The Lyman Rentals Difference</h2>
            </div>

            <div className={styles.trustGrid}>
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <article key={point.id} className={styles.trustCard}>
                    <div className={styles.trustIcon}>
                      <Icon size={28} />
                    </div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: Gallery Preview */}
        <section className={`section ${styles.galleryPreviewSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className="eyebrow">Gallery Preview</p>
              <h2>See Our Work</h2>
            </div>

            <div className={styles.masonryGrid}>
              <div className={styles.masonryItem}>
                <img src={`${process.env.PUBLIC_URL}/images/products/ceremonyAndSeating/arches/arch-beach.png`} alt="Wedding arch setup" loading="lazy" />
              </div>
              <div className={`${styles.masonryItem}`}>
                <img src={`${process.env.PUBLIC_URL}/images/products/ceremonyAndSeating/benches/bench-1.png`} alt="Ceremony benches" loading="lazy" />
              </div>
              <div className={styles.masonryItem}>
                <img src={`${process.env.PUBLIC_URL}/images/products/cocktailAndLounge/whiskeyBarrelTables/whiskey-barrel-table.png`} alt="Whiskey barrel tables" loading="lazy" />
              </div>
              <div className={styles.masonryItem}>
                <img src={`${process.env.PUBLIC_URL}/images/products/decorAndSignage/memoryLadder/memory-ladder.png`} alt="Memory ladder display" loading="lazy" />
              </div>
              <div className={styles.masonryItem}>
                <img src={`${process.env.PUBLIC_URL}/images/products/cocktailAndLounge/whiskeyBarrelBar/whiskey-barrel-bar.png`} alt="Whiskey barrel bar" loading="lazy" />
              </div>
              <div className={`${styles.masonryItem}`}>
                <img src={`${process.env.PUBLIC_URL}/images/products/lightingAndAtmo/candles/candles.png`} alt="Candle lanterns" loading="lazy" />
              </div>
            </div>

            <div className={styles.viewAllContainer}>
              <Link to="/gallery" className="btn btn-secondary">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: Our Story */}
        <section className={`section ${styles.storySection}`}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyText}>
                <p className="eyebrow">Our Story</p>
                <h2>From Family Wedding to Family Business</h2>
                <p>
                  Lyman Rentals began after a family wedding inspired us to help others create beautiful, unforgettable moments with thoughtfully curated event rentals. What started as a way to reuse meaningful pieces has grown into a family-run rental business focused on helping couples bring their wedding vision to life.
                </p>
                <p>
                  We understand that your wedding day is one of the most important days of your life. That's why we select every piece in our collection with care. Thinking about how it will photograph, how it will feel in your space, and how it will help create the atmosphere you're dreaming of.
                </p>
                <Link to="/about" className={styles.learnMoreLink}>
                  Learn Our Full Story →
                </Link>
              </div>
              <div className={styles.storyImage}>
                <img src={`${process.env.PUBLIC_URL}/images/kissing-sunset.png`} alt="Couple kissing under arch sunset" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Testimonials */}
        <section className={`section ${styles.testimonialSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className="eyebrow">Client Feedback</p>
              <h2>What Couples Are Saying</h2>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <article key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Final CTA */}
        <section className={`section ${styles.finalCtaSection}`}>
          <div className="container">
            <div className={styles.finalCtaContent}>
              <h2>Ready to Start Planning?</h2>
              <p>
                Let's bring your wedding vision to life with rentals that fit your day perfectly. Browse our collection or reach out to discuss your event.
              </p>
              <div className={styles.finalCtaButtons}>
                <Link className="btn btn-primary" to="/products">
                  Browse Rentals
                </Link>
                <Link className="btn btn-secondary" to="/contact">
                  Contact Us
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

export default Home;
