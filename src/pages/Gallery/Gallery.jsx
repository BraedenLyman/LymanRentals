import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import styles from './Gallery.module.css';

// Gallery images — replace these paths with real photos from your collection
const galleryImages = [
  { id: 1, path: '/images/products/cocktailAndLounge/whiskeyBarrelTables/whiskey-barrel-table.png', alt: 'Whiskey barrel tables setup' },
  { id: 2, path: '/images/products/ceremonyAndSeating/benches/bench-1.png', alt: 'Wooden benches arrangement' },
  { id: 3, path: '/images/products/ceremonyAndSeating/benches/bench-2.png', alt: 'Ceremony bench detail' },
  { id: 4, path: '/images/products/ceremonyAndSeating/arches/arch-beach.png', alt: 'Rustic wedding arch' },
  { id: 5, path: '/images/products/ceremonyAndSeating/arches/arch-grass.png', alt: 'Arch decorated setup' },
  { id: 6, path: '/images/products/cocktailAndLounge/whiskeyBarrelBar/whiskey-barrel-bar.png', alt: 'Whiskey barrel bar' },
  { id: 7, path: '/images/products/cocktailAndLounge/chestCoffeeTable/chest-coffee-table-1.png', alt: 'Chest coffee table' },
  { id: 8, path: '/images/products/guestExperience/dessertLadder/dessert-ladder.png', alt: 'Dessert ladder display' },
  { id: 9, path: '/images/products/decorAndSignage/memoryLadder/memory-ladder.png', alt: 'Memory ladder with photos' },
  { id: 10, path: '/images/products/decorAndSignage/orderOfEvents/order-of-events.png', alt: 'Order of events signage' },
  { id: 11, path: '/images/products/lightingAndAtmo/candles/candles.png', alt: 'Candle lanterns ambiance' },
  { id: 12, path: '/images/products/decorAndSignage/decorations/decorations.png', alt: 'Custom decor pieces' },
  { id: 13, path: '/images/products/lightingAndAtmo/edisonLights/edison-lights.png', alt: 'Edison lights decoration' },
  { id: 14, path: '/images/products/guestExperience/waterJugs/water-jugs.png', alt: 'Water jugs on table' },
  { id: 15, path: '/images/products/guestExperience/stockTanks/stock-tank-large.png', alt: 'Stock tank setup' },
  { id: 16, path: '/images/products/guestExperience/stockTanks/stock-tank-small.png', alt: 'Stock tank secondary view' },
  { id: 17, path: '/images/gallery/baby-in-tub.png', alt: 'Baby in stock tank' },
  { id: 18, path: '/images/gallery/venue.png', alt: 'venu with arch'},
  { id: 19, path: '/images/gallery/shower-venue.png', alt: 'venue for a shower'},
  { id: 20, path: '/images/gallery/setup-venue.png', alt: 'setting up venue'},
];

function Gallery() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        {/* Gallery Hero */}
        <section className={`section ${styles.galleryHero}`}>
          <div className="container">
            <p className="eyebrow">Gallery</p>
            <h1 className='page-title'>Our Work</h1>
            <p className="page-copy">
              Explore our collection of beautifully styled wedding and event setups. Each image showcases the elegance and attention to detail we bring to every rental.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className={`section ${styles.galleryContent}`}>
          <div className="container">
            <div className={styles.galleryGrid}>
              {galleryImages.map((image) => (
                <div key={image.id} className={styles.galleryItem}>
                  <img src={image.path} alt={image.alt} loading="lazy" />
                  <div className={styles.galleryOverlay}>
                    <p>{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery CTA */}
        <section className={`section ${styles.galleryCta}`}>
          <div className="container">
            <h2>Ready to create something beautiful?</h2>
            <p>Browse our rental collection or reach out to discuss your perfect event.</p>
            <div className={styles.ctaButtons}>
              <Link to="/products" className="btn btn-primary">
                View Our Rentals
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Gallery;
