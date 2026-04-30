import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search, SlidersHorizontal, X } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { categories, planningNotes, products } from '../data/products';
import './home.css';

function getNumericPrice(price) {
  const match = price.match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [searchValue, setSearchValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!selectedProduct) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProduct]);

  const filteredProducts = products
    .filter((product) => activeCategory === 'all' || product.categoryId === activeCategory)
    .filter((product) => {
      const term = searchValue.trim().toLowerCase();
      if (!term) {
        return true;
      }

      return `${product.name} ${product.category} ${product.summary}`.toLowerCase().includes(term);
    })
    .sort((first, second) => {
      if (sortOrder === 'name') {
        return first.name.localeCompare(second.name);
      }

      if (sortOrder === 'price-low') {
        return getNumericPrice(first.price) - getNumericPrice(second.price);
      }

      return Number(Boolean(second.featured)) - Number(Boolean(first.featured));
    });

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main page-with-top-space">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Products</p>
            <h1 className="page-title">A more refined way to browse rentals for weddings, parties, and celebrations.</h1>
            <p className="page-copy">
              Explore a collection designed to keep product browsing clear, visual, and easy to compare. Operational details stay streamlined so the focus remains on the pieces themselves.
            </p>
          </div>
        </section>

        <section className="section compact-top reveal-on-scroll">
          <div className="container">
            <div className="products-toolbar">
              <div className="toolbar-search">
                <Search size={18} />
                <input
                  type="search"
                  placeholder="Search rentals"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  aria-label="Search rentals"
                />
              </div>

              <div className="toolbar-sort">
                <SlidersHorizontal size={18} />
                <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} aria-label="Sort rentals">
                  <option value="featured">Featured first</option>
                  <option value="name">Alphabetical</option>
                  <option value="price-low">Price ascending</option>
                </select>
              </div>
            </div>

            <div className="category-tabs" aria-label="Category filter">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`category-tab ${activeCategory === category.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="section-heading section-heading-tight">
              <div>
                <p className="eyebrow">Collection</p>
                <h2>{filteredProducts.length} {activeCategory === 'all' ? 'rentals' : 'items'} ready to browse.</h2>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card reveal-on-scroll">
                  <div className="product-card-image">
                    <div className="product-card-media">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className="badge">{product.category}</span>
                    </div>
                    <div className="product-card-body">
                      <h3>{product.name}</h3>
                      <p>{product.summary}</p>
                      <div className="product-card-footer">
                        <div>
                          <strong>{product.price}</strong>
                          <span>{product.pricingLabel}</span>
                        </div>
                        <button type="button" className="btn btn-primary btn-small" onClick={() => setSelectedProduct(product)}>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="planning-notes">
              {planningNotes.map((note) => (
                <article key={note.title} className="planning-note-card">
                  <p className="eyebrow">{note.title}</p>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>

            <div className="products-cta premium-panel">
              <div>
                <p className="eyebrow">Planning Your Event?</p>
                <h3>Need help choosing rentals that work together?</h3>
                <p>Reach out with your date and event style, and the conversation can start with a clearer, more focused wishlist.</p>
              </div>
              <a className="btn btn-primary" href="https://www.facebook.com/LymanRentals" target="_blank" rel="noopener noreferrer">
                Inquire Now
              </a>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedProduct ? (
            <motion.div
              className="product-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="product-modal"
                initial={{ opacity: 0, y: 36, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 28, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
              >
                <button type="button" className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close details">
                  <X size={18} />
                </button>

                <div className="product-modal-grid">
                  <div className="product-modal-image">
                    <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
                  </div>

                  <div className="product-modal-copy">
                    <p className="eyebrow">{selectedProduct.category}</p>
                    <h2>{selectedProduct.name}</h2>
                    <p className="product-modal-summary">{selectedProduct.summary}</p>

                    <div className="product-modal-price">
                      <strong>{selectedProduct.price}</strong>
                      <span>{selectedProduct.pricingLabel}</span>
                    </div>

                    <div className="product-modal-details">
                      {selectedProduct.details.map((detail) => (
                        <article key={detail}>
                          <ArrowRight size={16} />
                          <p>{detail}</p>
                        </article>
                      ))}
                    </div>

                    <div className="product-modal-actions">
                      <a className="btn btn-primary" href="https://www.facebook.com/LymanRentals" target="_blank" rel="noopener noreferrer">
                        Contact To Book
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Products;
