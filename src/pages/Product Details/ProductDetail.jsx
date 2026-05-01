import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { products } from '../../data/products';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const nextImage = () => {
    if (!product.images || product.images.length < 2) {
      return;
    }

    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    if (!product.images || product.images.length < 2) {
      return;
    }

    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        <section className={`section ${styles.pageIntro}`}>
          <div className={`container ${styles.detailHeader}`}>
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1 className="page-title">{product.name}</h1>
              <p className="page-copy">{product.description}</p>
            </div>
          </div>
        </section>

        <section className={`section ${styles.compactTop}`}>
          <div className={`container ${styles.detailBottomGrid}`}>
            <div className={styles.detailGallery}>
              <div className={styles.detailImageWrap}>
                <img src={product.images?.[currentImageIndex] || product.image} alt={product.name} />
                {product.images && product.images.length > 1 && (
                  <>
                    <button className={`${styles.detailArrow} ${styles.left}`} onClick={previousImage} aria-label="Previous image">
                      <ChevronLeft size={18} />
                    </button>
                    <button className={`${styles.detailArrow} ${styles.right}`} onClick={nextImage} aria-label="Next image">
                      <ChevronRight size={18} />
                    </button>
                    <div className={styles.detailDots}>
                      {product.images.map((image, index) => (
                        <button
                          key={image}
                          className={`${styles.dot} ${currentImageIndex === index ? styles.active : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className={styles.detailSideStack}>
              <div className={styles.detailPriceActions}>
                <div className={styles.detailPricePanel}>
                  <div className={styles.detailPriceRow}>
                    <p className={styles.modalPrice}>{product.price}</p>
                    <Link className={`btn btn-primary ${styles.detailCheckBtn}`} to="/contact">
                      Check Availability
                    </Link>
                  </div>
                  {product.priceNote && <p className={styles.priceMeta}>{product.priceNote}</p>}
                  {product.note && <p className={styles.priceMeta}>{product.note}</p>}
                </div>
              </div>

              <div className={`${styles.detailCharacteristicsCard} ${styles.detailInfoRows}`}>
                <p>
                  <strong className={styles.detailLabel}>Duration</strong>
                  <span className={styles.detailValue}>{product.duration}</span>
                </p>
                <p>
                  <strong className={styles.detailLabel}>Pickup</strong>
                  <span className={styles.detailValue}>{product.pickup}</span>
                </p>
                <p>
                  <strong className={styles.detailLabel}>Delivery</strong>
                  <span className={`${styles.detailValue} ${styles.detailDelivery}`}>{product.delivery}</span>
                </p>
              </div>

              <div className={`${styles.detailFeatures} ${styles.detailCharacteristicsCard}`}>
                <div className={styles.detailFeaturesList}>
                  {product.features.map((feature) => (
                    <article key={feature.title}>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`container ${styles.detailPageFooter}`}>
            <Link to="/products" className={`btn btn-secondary ${styles.detailBackBottom}`}>
              Back to Products
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default ProductDetail;
