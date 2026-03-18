import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { products } from '../data/products';
import './home.css';

function Products() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        <section className="section page-intro reveal-on-scroll">
          <div className="container">
            <p className="eyebrow">Product Collection</p>
            <h1 className="page-title">Browse all of our inventory.</h1>
            <p className="page-copy">Open any item to see full pricing, features, and availability details.</p>
          </div>
        </section>

        <section className="section rentals-section compact-top reveal-on-scroll">
          <div className="container">
            <div className="rental-grid">
              {products.map((product) => (
                <article key={product.id} className="rental-card reveal-on-scroll">
                  <Link to={`/products/${product.slug}`} className="product-link-wrap" aria-label={`Open product page for ${product.name}`}>
                    <div className="rental-image-wrap">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className="tag">{product.category}</span>
                    </div>
                    <div className="rental-card-body product-card-body">
                      <h3>{product.name}</h3>
                      <p className="price">{product.price}</p>
                      {product.note && <p className="note">{product.note}</p>}
                      <p>{product.description}</p>
                      <span className="text-link">View Product Page</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="products-cta reveal-on-scroll">
              <h3>Ready to reserve your favorites?</h3>
              <p>Message us on Facebook to inquire about availability and any additional information.</p>
              <a
                className="btn btn-primary contact-compact-btn"
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

export default Products;
