import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { products } from '../../data/products';
import styles from './Products.module.css';

function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(products.map((p) => p.category))];
    return uniqueCategories;
  }, []);

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">
        {/* Page Hero */}
        <section className={`section ${styles.pageIntro}`}>
          <div className="container">
            <p className="eyebrow">Wedding & Event Rentals</p>
            <h1 className="page-title">Browse Our Collection</h1>
            <p className="page-copy">
              Handcrafted and curated rentals for weddings and special events. Browse by category or view our complete collection.
            </p>
          </div>
        </section>

        {/* Products Section with Filters */}
        <section className={`section ${styles.rentalsSection}`}>
          <div className="container">
            {/* Category Filter Tabs */}
            <div className={styles.filterContainer}>
              <div className={styles.filterTabs}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filterTab} ${activeCategory === category ? styles.active : ''}`}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className={styles.resultCount}>
                Showing {filteredProducts.length} of {products.length} items
              </p>
            </div>

            {/* Product Grid */}
            <div className={styles.rentalGrid}>
              {filteredProducts.map((product) => (
                <article key={product.id} className={styles.rentalCard}>
                  <Link
                    to={`/products/${product.slug}`}
                    className={styles.productLinkWrap}
                    aria-label={`Open product page for ${product.name}`}
                  >
                    <div className={styles.rentalImageWrap}>
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className={styles.tag}>{product.category}</span>
                    </div>
                    <div className={`${styles.rentalCardBody} ${styles.productCardBody}`}>
                      <h3>{product.name}</h3>
                      <p className={styles.price}>{product.price}</p>
                      {product.note && <p className={styles.note}>{product.note}</p>}
                      <p>{product.description}</p>
                      <span className={styles.textLink}>View Details →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className={styles.emptyState}>
                <p>No products found in this category. Please try another filter.</p>
              </div>
            )}

            {/* Products CTA */}
            <div className={styles.productsCta}>
              <h3>Ready to reserve your favorites?</h3>
              <p>Message us on Facebook to discuss availability, pricing, and custom rental packages.</p>
              <a
                className={`btn btn-primary ${styles.contactCompactBtn}`}
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
