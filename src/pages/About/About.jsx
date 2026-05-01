import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Truck } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import styles from './About.module.css';

const values = [
  {
    id: 1,
    icon: Heart,
    title: 'Family-Owned',
    description: 'Started by a family who understands what makes a celebration special. We treat every event like our own.'
  },
  {
    id: 2,
    icon: Users,
    title: 'Personal Touch',
    description: 'We listen to your vision and work with you to create something uniquely yours. Your story matters to us.'
  },
  {
    id: 3,
    icon: Truck,
    title: 'Reliable Service',
    description: 'From delivery to setup, we handle the details so you can focus on what matters: celebrating with your loved ones.'
  }
];

function About() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        {/* Page Hero */}
        <section className={`section ${styles.aboutHero}`}>
          <div className="container">
            <p className="eyebrow">Our Story</p>
            <h1 className='page-title'>About Lyman Rentals</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className={`section ${styles.storySection}`}>
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyContent}>
              <h2>How It Started</h2>
              <p>
                Lyman Rentals began after a family wedding inspired us to help others create beautiful, unforgettable moments with thoughtfully curated event rentals. What started as a way to reuse meaningful pieces has grown into a family-run rental business focused on helping couples bring their wedding vision to life.
              </p>
              <p>
                We understand that your wedding day is one of the most important days of your life. That's why we select every piece in our collection with care—thinking about how it will photograph, how it will feel in your space, and how it will help create the atmosphere you're dreaming of.
              </p>
              <p>
                Today, we're proud to serve couples and event planners throughout the Hamilton region and beyond, providing elegant, rustic-modern rentals that feel authentic and premium at the same time.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img src="/images/kissing-sunset.png" alt="Couple kissing under arch sunset" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={`section ${styles.valuesSection}`}>
          <div className="container">
            <div className={styles.valuesIntro}>
              <h2>Why We Do What We Do</h2>
              <p>Our values guide every decision we make and every rental we curate.</p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.id} className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <Icon size={28} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section className={`section ${styles.collectionSection}`}>
          <div className="container">
            <h2>Our Collection</h2>
            <p style={{ maxWidth: '700px', marginBottom: '2rem' }}>
              Every piece in our collection is chosen for its beauty, quality, and ability to enhance your celebration. From rustic wooden arches to elegant whiskey barrel bars, our rentals tell a story of thoughtful curation and attention to detail.
            </p>
            <Link to="/products" className="btn btn-primary">
              Browse Our Rentals
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`section ${styles.aboutCta}`}>
          <div className="container">
            <h2>Let's Create Something Beautiful Together</h2>
            <p>Reach out to discuss your event and how we can help bring your vision to life.</p>
            <Link to="/contact" className="btn btn-primary">
              Start Planning
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default About;
