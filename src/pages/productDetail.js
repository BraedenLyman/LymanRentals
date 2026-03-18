import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { products } from '../data/products';
import './home.css';

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
        <section className="section page-intro compact-bottom detail-page-intro">
          <div className="container detail-header">
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1 className="page-title">{product.name}</h1>
              <p className="page-copy">{product.description}</p>
            </div>
          </div>
        </section>

        <section className="section compact-top">
          <div className="container detail-bottom-grid">
            <div className="detail-gallery">
              <div className="detail-image-wrap">
                <img src={product.images?.[currentImageIndex] || product.image} alt={product.name} />
                {product.images && product.images.length > 1 && (
                  <>
                    <button className="detail-arrow left" onClick={previousImage} aria-label="Previous image">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="detail-arrow right" onClick={nextImage} aria-label="Next image">
                      <ChevronRight size={18} />
                    </button>
                    <div className="detail-dots">
                      {product.images.map((image, index) => (
                        <button
                          key={image}
                          className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="detail-side-stack">
              <div className="detail-price-actions">
                <div className="detail-price-panel">
                  <div className="detail-price-row">
                    <p className="modal-price">{product.price}</p>
                    <Link className="btn btn-primary detail-check-btn" to="/contact">
                      Check Availability
                    </Link>
                  </div>
                  {product.priceNote && <p className="price-meta">{product.priceNote}</p>}
                  {product.note && <p className="price-meta">{product.note}</p>}
                </div>
              </div>

              <div className="detail-characteristics-card detail-info-rows">
                <p>
                  <strong className="detail-label">Duration</strong>
                  <span className="detail-value">{product.duration}</span>
                </p>
                <p>
                  <strong className="detail-label">Pickup</strong>
                  <span className="detail-value">{product.pickup}</span>
                </p>
                <p>
                  <strong className="detail-label">Delivery</strong>
                  <span className="detail-value">{product.delivery}</span>
                  <span className="note detail-fee-note">*Additional fee applies.</span>
                </p>
              </div>

              <div className="detail-features detail-characteristics-card">
                <div className="detail-features-list">
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

          <div className="container detail-page-footer">
            <Link to="/products" className="btn btn-secondary detail-back-bottom">
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
