import React, { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const LymanRentalsApp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productsData = {
    'whiskey-barrel-tables': {
      name: 'Whiskey Barrel Tables',
      price: '$75 / Unit',
      priceNote: '(Stools: Extra $5 / Stool)',
      image: '/images/1.png',
      images: ['/images/1.png'],
      description: 'Rustic charm meets functionality with our authentic whiskey barrel tables, perfect for cocktail hours and outdoor receptions.',
      stock: '4 Units',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Charming & Rustic Look', desc: 'Creates the perfect gathering spot for guests to chat and enjoy their meals' },
        { title: 'Authentic Design', desc: 'Adds a touch of vintage elegance, making it an ideal centerpiece for any celebration' },
        { title: 'Sturdy & Spacious', desc: 'Provides ample room for drinks and appetizers' },
        { title: 'Versatile Design', desc: 'Blends with various themes, from rustic chic to classic elegance' }
      ]
    },
    'whiskey-barrel-bar': {
      name: 'Whiskey Barrel Bar',
      price: '$150 / Unit',
      image: '/images/6.png',
      images: ['/images/6.png'],
      description: 'Create an unforgettable bar experience with our stunning whiskey barrel bar setup.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Statement Piece', desc: 'Create an unforgettable bar experience with our stunning whiskey barrel bar setup' },
        { title: 'Authentic Rustic Charm', desc: 'Made from genuine whiskey barrels for authentic character and warmth' },
        { title: 'Perfect for Any Event', desc: 'Ideal for weddings, corporate events, and outdoor celebrations' },
        { title: 'Spacious Surface', desc: 'Ample room for bartending, serving drinks, and displaying beverages' }
      ]
    },
    'memory-ladder': {
      name: 'Memory Ladder',
      price: '$25 / Unit',
      image: '/images/9.png',
      images: ['/images/9.png'],
      description: 'Display your cherished photos and memories in style with our vintage-inspired ladder.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Nostalgic Display', desc: 'Display your cherished photos and memories in style with our vintage-inspired ladder' },
        { title: 'Versatile Setup', desc: 'Perfect for wedding timelines, family photos, or milestone moments' },
        { title: 'Rustic Charm', desc: 'Adds warmth and character to any venue with its weathered wood finish' },
        { title: 'Easy to Customize', desc: 'Attach photos, signs, or decorations with clips, twine, or ribbon' }
      ]
    },
    'decorations': {
      name: 'Decorations',
      price: 'Price Varies',
      note: '*Includes Customization*',
      image: '/images/12.png',
      images: ['/images/12.png'],
      description: 'Personalized decorative elements to match your unique vision and theme.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Fully Customizable', desc: 'Personalized decorative elements to match your unique vision and theme' },
        { title: 'Curated Collection', desc: 'Wide variety of elegant decorative pieces for any style event' },
        { title: 'Professional Quality', desc: 'High-quality materials that photograph beautifully' },
        { title: 'Mix and Match', desc: 'Combine different pieces to create your perfect aesthetic' }
      ]
    },
    'water-jugs': {
      name: 'Water Jugs',
      price: '$3 / Unit',
      image: '/images/14.png',
      images: ['/images/14.png'],
      description: 'Elegant glass water dispensers to keep your guests refreshed throughout your event.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Elegant Glass Design', desc: 'Beautiful glass water dispensers that add sophistication to any table' },
        { title: 'Guest Convenience', desc: 'Keep your guests refreshed throughout your event' },
        { title: 'Large Capacity', desc: 'Holds plenty of water for tables of all sizes' },
        { title: 'Infusion Ready', desc: 'Perfect for adding fruit, herbs, or cucumber for flavored water' }
      ]
    },
    'benches': {
      name: 'Benches',
      price: '$50 / Unit',
      image: '/images/2.png',
      images: ['/images/2.png', '/images/3.png'],
      description: 'Beautiful wooden benches that add rustic elegance to your ceremony or reception.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Rustic Elegance', desc: 'Beautiful wooden benches that add charm to ceremony or reception' },
        { title: 'Versatile Seating', desc: 'Perfect for head tables, ceremony rows, or cocktail areas' },
        { title: 'Sturdy Construction', desc: 'Solidly built to comfortably seat multiple guests' },
        { title: 'Photo-Perfect', desc: 'Creates beautiful photo opportunities with rustic aesthetic' }
      ]
    },
    'chest-coffee-table': {
      name: 'Chest Coffee Table',
      price: '$50 / Unit',
      image: '/images/7.png',
      images: ['/images/7.png'],
      description: 'Vintage-style chest that doubles as a stunning coffee table and storage piece.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Vintage Charm', desc: 'Unique chest that doubles as a stunning coffee table and storage piece' },
        { title: 'Functional Design', desc: 'Perfect for lounge areas or as a unique accent piece' },
        { title: 'Storage Included', desc: 'Interior storage space for blankets, programs, or décor' },
        { title: 'Conversation Starter', desc: 'Distinctive piece that adds character to any space' }
      ]
    },
    'order-of-events': {
      name: 'Order of Events',
      price: '$75 / Unit',
      image: '/images/10.png',
      images: ['/images/10.png'],
      description: 'Keep your guests informed with our elegant order of events display.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Keep Guests Informed', desc: 'Elegant display to keep guests informed of your event timeline' },
        { title: 'Professional Presentation', desc: 'Beautifully crafted sign that complements any décor style' },
        { title: 'Clear & Readable', desc: 'Easy-to-read format that guests can reference throughout the day' },
        { title: 'Customizable', desc: 'Can be personalized to match your event schedule and theme' }
      ]
    },
    'arches': {
      name: 'Arches',
      price: '$125 / Unit',
      image: '/images/4.png',
      images: ['/images/4.png', 'images/5.png'],
      description: 'Create a breathtaking backdrop for your ceremony with our stunning arches.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Stunning Ceremony Backdrop', desc: 'Create a breathtaking backdrop for your ceremony vows' },
        { title: 'Versatile Design', desc: 'Works beautifully both indoors and outdoors' },
        { title: 'Decorate Your Way', desc: 'Perfect canvas for flowers, fabric, greenery, or lights' },
        { title: 'Memorable Moments', desc: 'Creates picture-perfect moments for your special day' }
      ]
    },
    'dessert-ladder': {
      name: 'Dessert Ladder',
      price: '$50 / Unit',
      image: '/images/8.png',
      images: ['/images/8.png'],
      description: 'Showcase your sweet treats in style with our charming dessert display ladder.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Elegant Display', desc: 'Showcase your sweet treats in style with our charming ladder' },
        { title: 'Tiered Design', desc: 'Multiple levels for displaying cupcakes, cookies, and treats' },
        { title: 'Rustic Appeal', desc: 'Weathered wood finish that photographs beautifully' },
        { title: 'Space-Efficient', desc: 'Vertical display saves table space while making a statement' }
      ]
    },
    'candle-lanterns': {
      name: 'Candle Lanterns',
      price: '$10 / Unit',
      note: '*Includes Customization*',
      image: '/images/11.png',
      images: ['/images/11.png'],
      description: 'Add warmth and ambiance with our collection of beautiful candle lanterns.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Romantic Ambiance', desc: 'Add warmth and ambiance with our beautiful candle lanterns' },
        { title: 'Versatile Placement', desc: 'Perfect for aisles, tables, pathways, or hanging displays' },
        { title: 'Safe Design', desc: 'Protected flame creates beautiful glow while staying secure' },
        { title: 'Customizable Options', desc: 'Available in various styles to match your event theme' }
      ]
    },
    'edison-lights': {
      name: 'Edison Lights',
      price: '$10 / Unit',
      image: '/images/13.png',
      images: ['/images/13.png'],
      description: 'Create a magical atmosphere with our vintage Edison string lights.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Magical Atmosphere', desc: 'Create a magical atmosphere with our vintage Edison string lights' },
        { title: 'Warm Glow', desc: 'Soft, warm light perfect for evening events and receptions' },
        { title: 'Indoor & Outdoor', desc: 'Suitable for both indoor and covered outdoor venues' },
        { title: 'Vintage Charm', desc: 'Classic Edison bulb style adds timeless elegance' }
      ]
    },
    'photo-backdrop': {
      name: 'Photo Backdrop',
      price: '$40 / Unit',
      image: '/images/13.png',
      images: ['/images/13.png'],
      description: 'Picture-perfect backdrops for memorable photo opportunities.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Picture-Perfect Setup', desc: 'Beautiful backdrops for memorable photo opportunities' },
        { title: 'Professional Quality', desc: 'High-quality materials that photograph beautifully' },
        { title: 'Easy Assembly', desc: 'Simple setup process for hassle-free installation' },
        { title: 'Memorable Moments', desc: 'Creates designated photo area for guests to capture memories' }
      ]
    },
    'stock-tanks': {
      name: 'Stock Tanks',
      price: '$50 / Unit',
      image: '/images/15.png',
      images: ['/images/15.png', '/images/16.png'],
      description: 'Versatile stock tanks perfect for beverage stations or unique decor elements.',
      duration: '1-2 Days',
      pickup: 'Smithville, Ontario',
      delivery: 'Hamilton, Ontario & Surrounding Area',
      features: [
        { title: 'Versatile Use', desc: 'Perfect for beverage stations or unique decor elements' },
        { title: 'Rustic Aesthetic', desc: 'Authentic galvanized metal adds farmhouse charm' },
        { title: 'Multiple Applications', desc: 'Use for iced drinks, floral displays, or creative décor' },
        { title: 'Large Capacity', desc: 'Spacious design accommodates plenty of beverages or items' }
      ]
    }
  };

  const products = [
    { id: 1, slug: 'whiskey-barrel-tables' },
    { id: 2, slug: 'whiskey-barrel-bar' },
    { id: 3, slug: 'memory-ladder' },
    { id: 4, slug: 'decorations' },
    { id: 5, slug: 'water-jugs' },
    { id: 6, slug: 'benches' },
    { id: 7, slug: 'chest-coffee-table' },
    { id: 8, slug: 'order-of-events' },
    { id: 9, slug: 'arches' },
    { id: 10, slug: 'dessert-ladder' },
    { id: 11, slug: 'candle-lanterns' },
    { id: 12, slug: 'edison-lights' },
    { id: 13, slug: 'photo-backdrop' },
    { id: 14, slug: 'stock-tanks' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const openProductModal = (slug) => {
    setSelectedProduct(productsData[slug]);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", color: '#4a4a4a', background: '#fdfbf7' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.98)',
        padding: '1.5rem 0',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(139, 115, 85, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '2px',
            color: '#8b7355',
            fontStyle: 'italic',
            cursor: 'pointer'
          }} onClick={() => scrollToSection('home')}>
            Lyman Rentals
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#8b7355',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }} className="desktop-nav">
            <li>
              <button onClick={() => scrollToSection('home')} style={{
                color: '#8b7355',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'inherit'
              }}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('rentals')} style={{
                color: '#8b7355',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'inherit'
              }}>Our Rentals</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} style={{
                color: '#8b7355',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'inherit'
              }}>Contact</button>
            </li>
          </ul>

          {mobileMenuOpen && (
            <ul style={{
              display: 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              flexDirection: 'column',
              padding: '2rem',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0
            }} className="mobile-nav">
              <li>
                <button onClick={() => scrollToSection('home')} style={{
                  color: '#8b7355',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  width: '100%'
                }}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rentals')} style={{
                  color: '#8b7355',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  width: '100%'
                }}>Our Rentals</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} style={{
                  color: '#8b7355',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  width: '100%'
                }}>Contact</button>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section" style={{
        marginTop: '90px',
        background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(253, 251, 247)), url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600) center/cover',
        textAlign: 'center',
        padding: '10rem 2rem 8rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          color: '#d4af87',
          opacity: 0.6
        }}>♦</div>

        <h1 className="hero-title" style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          color: '#8b7355',
          fontWeight: 400,
          fontStyle: 'italic',
          animation: 'fadeInUp 1s ease'
        }}>Lyman Rentals</h1>

        <div style={{
          width: '150px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, #d4af87, transparent)',
          margin: '2rem auto'
        }} />

        <p className="hero-text" style={{
          fontSize: '1.4rem',
          marginBottom: '0.8rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#6b5d4f',
          fontWeight: 300
        }}>Where your dream events begin with our exquisite rentals</p>
        <p className="hero-text" style={{
          fontSize: '1.4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#6b5d4f',
          fontWeight: 300
        }}>Discover the perfect pieces to make your special day unforgettable</p>
      </section>

      {/* About Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
        <section id="about" style={{ marginBottom: '6rem' }}>
          <p style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 4rem',
            fontSize: '1.2rem',
            color: '#6b5d4f',
            lineHeight: 1.8
          }}>
            At Lyman Rentals, we believe every celebration deserves to be extraordinary.
            Our carefully curated collection of rustic and elegant pieces brings warmth,
            charm, and sophistication to weddings, events, and special occasions.
            Let us help you create memories that will last a lifetime.
          </p>
        </section>

        {/* Rentals Section */}
        <section id="rentals" style={{ marginBottom: '6rem' }}>
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#8b7355',
            fontWeight: 400,
            fontStyle: 'italic'
          }}>Our Collection</h2>
          <p style={{
            textAlign: 'center',
            color: '#9a8a7a',
            fontSize: '1.2rem',
            marginBottom: '3rem',
            fontWeight: 300
          }}>Handpicked pieces for your perfect day</p>

          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginTop: '3rem'
          }}>
            {products.map(product => {
              const productData = productsData[product.slug];
              return (
                <div
                  key={product.id}
                  onClick={() => openProductModal(product.slug)}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 25px rgba(139, 115, 85, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid #f0e9e0',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 115, 85, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 25px rgba(139, 115, 85, 0.1)';
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '350px',
                    background: 'linear-gradient(135deg, #f0e9e0, #e8ddd0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={productData.image}
                      alt={productData.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      color: '#8b7355',
                      marginBottom: '1rem',
                      fontSize: '1.8rem',
                      fontWeight: 500
                    }}>{productData.name}</h3>

                    <div style={{
                      fontSize: '1.3rem',
                      color: '#d4af87',
                      fontWeight: 600,
                      marginBottom: '0.5rem'
                    }}>{productData.price}</div>

                    {productData.note && (
                      <p style={{
                        fontStyle: 'italic',
                        color: '#9a8a7a',
                        fontSize: '0.95rem',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>{productData.note}</p>
                    )}

                    <p style={{ color: '#6b5d4f', lineHeight: 1.6 }}>{productData.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ marginBottom: '6rem' }}>
          <div className="contact-box" style={{
            background: 'linear-gradient(135deg, #8b7355 0%, #a08968 100%)',
            color: 'white',
            padding: '4rem',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(139, 115, 85, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }} />

            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              fontWeight: 400,
              fontStyle: 'italic',
              position: 'relative',
            }}>Check Availability</h2>

            <div style={{
              width: '150px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #d4af87, transparent)',
              margin: '0 auto 2rem'
            }} />

            <p style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              position: 'relative'
            }}>Ready to bring your vision to life? Let's start planning your perfect day.</p>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              position: 'relative'
            }}>For availability and inquiries, reach out to us via Facebook Messenger.</p>

            <a
              href="https://www.facebook.com/messages/t/lymanrentals"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#8b7355',
                padding: '1.2rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s',
                boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                letterSpacing: '1px',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                e.currentTarget.style.background = '#fdfbf7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
                e.currentTarget.style.background = 'white';
              }}
            >
              Message Us on Facebook
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#6b5d4f',
        color: '#f0e9e0',
        textAlign: 'center',
        padding: '3rem 2rem',
        marginTop: '4rem'
      }}>
        <p style={{ marginBottom: '0.5rem', letterSpacing: '1px' }}>&copy; 2025 Lyman Rentals. All rights reserved.</p>
        <p style={{ letterSpacing: '1px' }}>Making your special moments unforgettable</p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.facebook.com/lymanrentals"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#f0e9e0',
              textDecoration: 'none',
              fontSize: '1.2rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af87'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#f0e9e0'}
          >
            Facebook
          </a>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem',
            overflowY: 'auto'
          }}
          onClick={closeProductModal}
        >
          <div
            className="modal-content"
            style={{
              background: '#fdfbf7',
              borderRadius: '15px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProductModal}
              style={{
                position: 'sticky',
                top: '1.5rem',
                float: 'right',
                marginRight: '1.5rem',
                marginTop: '1.5rem',
                marginBottom: '-40px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 10,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f0e9e0';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={24} color="#8b7355" />
            </button>

            {/* Modal Content */}
            <div style={{ padding: '3rem'}}>
              {/* Product Image Gallery */}
              <div className="modal-image-container" style={{
                width: '80%',

                background: 'linear-gradient(135deg, #f0e9e0, #e8ddd0)',
                borderRadius: '10px',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2rem',
                boxShadow: '0 5px 25px rgba(139, 115, 85, 0.15)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Navigation Arrows - Only show if multiple images */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s',
                        zIndex: 2
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <ChevronLeft size={28} color="#8b7355" />
                    </button>

                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s',
                        zIndex: 2
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <ChevronRight size={28} color="#8b7355" />
                    </button>

                    {/* Dots Navigation */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '0.5rem',
                      zIndex: 2
                    }}>
                      {selectedProduct.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          style={{
                            width: currentImageIndex === index ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            border: 'none',
                            background: currentImageIndex === index ? '#8b7355' : 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Product Details */}
              <h2 style={{
                fontSize: '2.5rem',
                color: '#8b7355',
                marginBottom: '1rem',
                fontWeight: 500,
                fontStyle: 'italic'
              }}>
                {selectedProduct.name}
              </h2>

              <div style={{
                fontSize: '2rem',
                color: '#d4af87',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                {selectedProduct.price}
              </div>

              {selectedProduct.priceNote && (
                <div style={{
                  fontSize: '1.1rem',
                  color: '#9a8a7a',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  {selectedProduct.priceNote}
                </div>
              )}

              {selectedProduct.note && (
                <div style={{
                  fontSize: '1.1rem',
                  color: '#9a8a7a',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  {selectedProduct.note}
                </div>
              )}

              <div style={{
                width: '100px',
                height: '2px',
                background: '#d4af87',
                margin: '2rem 0'
              }} />

              {/* Info Grid */}
              <div className="modal-info-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 5px 20px rgba(139, 115, 85, 0.1)',
                marginBottom: '2rem'
              }}>
                {selectedProduct.stock && (
                  <div>
                    <div style={{
                      fontSize: '1.2rem',
                      color: '#8b7355',
                      fontWeight: 600,
                      marginBottom: '0.5rem'
                    }}>Stock Available</div>
                    <div style={{
                      fontSize: '1.1rem',
                      color: '#6b5d4f'
                    }}>{selectedProduct.stock}</div>
                  </div>
                )}

                <div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#8b7355',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Rent Duration</div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#6b5d4f'
                  }}>{selectedProduct.duration}</div>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#8b7355',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Pickup Location</div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#6b5d4f'
                  }}>{selectedProduct.pickup}</div>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.2rem',
                    color: '#8b7355',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Delivery Available</div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#6b5d4f'
                  }}>
                    {selectedProduct.delivery}
                    <br />
                    <span style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                      *For an additional fee*
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#8b7355',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>Features</h3>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {selectedProduct.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        padding: '1rem 0',
                        borderBottom: index < selectedProduct.features.length - 1 ? '1px solid #f0e9e0' : 'none',
                        fontSize: '1.1rem',
                        color: '#6b5d4f',
                        display: 'flex',
                        alignItems: 'start',
                        gap: '1rem'
                      }}
                    >
                      <span style={{
                        color: '#d4af87',
                        fontWeight: 'bold',
                        fontSize: '1.3rem'
                      }}>✓</span>
                      <div>
                        <strong>{feature.title}</strong>
                        <br />
                        {feature.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.facebook.com/messages/t/lymanrentals"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #8b7355 0%, #a08968 100%)',
                  color: 'white',
                  padding: '1.2rem 3rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s',
                  boxShadow: '0 5px 20px rgba(139, 115, 85, 0.2)',
                  fontSize: '1.1rem',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 115, 85, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 115, 85, 0.2)';
                }}
              >
                {selectedProduct.price === 'Contact for Pricing' ? 'Contact for Pricing' : 'Check Availability'}
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .image-gallery-scroll {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .image-gallery-scroll::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }

        .modal-content {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .modal-content::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }

          /* Hero Section Mobile */
          .hero-section {
            padding: 5rem 1.5rem 4rem !important;
          }

          .hero-title {
            font-size: 2.5rem !important;
          }

          .hero-text {
            font-size: 1.1rem !important;
            padding: 0 0.5rem;
          }

          /* Products Grid Mobile */
          .products-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 0.5rem;
          }

          /* Contact Box Mobile */
          .contact-box {
            padding: 2.5rem 1.5rem !important;
          }

          .contact-box h2 {
            font-size: 2rem !important;
          }

          .contact-box p {
            font-size: 1rem !important;
          }

          /* Modal Mobile Improvements */
          .modal-content {
            margin: 1rem !important;
            max-height: 95vh !important;
          }

          .modal-content > div {
            padding: 2rem 1.5rem !important;
          }

          .modal-image-container {
            width: 100% !important;
          }

          .modal-info-grid {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }

          /* Better touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }

          /* Adjust font sizes in modal */
          .modal-content h2 {
            font-size: 2rem !important;
          }

          .modal-content h3 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LymanRentalsApp;