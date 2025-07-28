import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span>🍽️ Bistro Bliss</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Best food for your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Book A Table</button>
              <button className="btn-secondary">Explore Menu</button>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <img src="/placeholder.svg?height=300&width=250" alt="Pasta" className="hero-img-1" />
          <img src="/placeholder.svg?height=200&width=200" alt="Salad" className="hero-img-2" />
          <img src="/placeholder.svg?height=250&width=200" alt="Pizza" className="hero-img-3" />
        </div>
      </section>

      {/* Browse Menu Section */}
      <section className="browse-menu">
        <div className="container">
          <h2>Browse Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-card">
              <div className="menu-icon">🍕</div>
              <h3>Breakfast</h3>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className="explore-menu">Explore Menu</a>
            </div>
            <div className="menu-card">
              <div className="menu-icon">🍔</div>
              <h3>Main Dishes</h3>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className="explore-menu">Explore Menu</a>
            </div>
            <div className="menu-card">
              <div className="menu-icon">🥤</div>
              <h3>Drinks</h3>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className="explore-menu">Explore Menu</a>
            </div>
            <div className="menu-card">
              <div className="menu-icon">🍰</div>
              <h3>Desserts</h3>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className="explore-menu">Explore Menu</a>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Food Section */}
      <section className="healthy-food">
        <div className="container">
          <div className="healthy-content">
            <div className="healthy-image">
              <img src="/placeholder.svg?height=400&width=300" alt="Healthy Food" />
              <div className="contact-info">
                <h4>Come and visit us</h4>
                <p>📞 (414) 857 - 0107</p>
                <p>📧 happytummy@restaurant.com</p>
                <p>📍 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
              </div>
            </div>
            <div className="healthy-text">
              <h2>We provide healthy food for your family.</h2>
              <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local community while infusing a global palate.</p>
              <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
              <button className="btn-primary">More About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>We also offer unique services for your events</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Catering" />
              <h3>Caterings</h3>
              <p>In the new era of technology we look in the future with certainty for our life.</p>
            </div>
            <div className="service-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Birthdays" />
              <h3>Birthdays</h3>
              <p>In the new era of technology we look in the future with certainty for our life.</p>
            </div>
            <div className="service-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Weddings" />
              <h3>Weddings</h3>
              <p>In the new era of technology we look in the future with certainty for our life.</p>
            </div>
            <div className="service-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Events" />
              <h3>Events</h3>
              <p>In the new era of technology we look in the future with certainty for our life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Delivery Section */}
      <section className="fast-delivery">
        <div className="container">
          <div className="delivery-content">
            <div className="delivery-images">
              <img src="/placeholder.svg?height=300&width=200" alt="Chef" className="chef-img" />
              <div className="food-gallery">
                <img src="/placeholder.svg?height=150&width=150" alt="Food 1" />
                <img src="/placeholder.svg?height=150&width=150" alt="Food 2" />
                <img src="/placeholder.svg?height=150&width=150" alt="Food 3" />
              </div>
            </div>
            <div className="delivery-text">
              <h2>Fastest Food Delivery in City</h2>
              <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.</p>
              <ul className="delivery-features">
                <li>✓ Delivery within 30 minutes</li>
                <li>✓ Best Offer & Prices</li>
                <li>✓ Online Services Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h4>"The best restaurant"</h4>
              <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
              <div className="customer">
                <img src="/placeholder.svg?height=50&width=50" alt="Sophire Robson" />
                <div>
                  <strong>Sophire Robson</strong>
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h4>"Simply delicious"</h4>
              <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
              <div className="customer">
                <img src="/placeholder.svg?height=50&width=50" alt="Matt Cannon" />
                <div>
                  <strong>Matt Cannon</strong>
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h4>"One of a kind restaurant"</h4>
              <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
              <div className="customer">
                <img src="/placeholder.svg?height=50&width=50" alt="Andy Smith" />
                <div>
                  <strong>Andy Smith</strong>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <div className="blog-header">
            <h2>Our Blog & Articles</h2>
            <button className="btn-primary">Read All Articles</button>
          </div>
          <div className="blog-grid">
            <div className="blog-card featured">
              <img src="/placeholder.svg?height=300&width=400" alt="Blog Post" />
              <div className="blog-content">
                <span className="blog-date">January 3, 2023</span>
                <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="blog-card small">
                <img src="/placeholder.svg?height=100&width=120" alt="Blog Post" />
                <div>
                  <span className="blog-date">January 3, 2023</span>
                  <h4>How to prepare the perfect french fries in an air fryer</h4>
                </div>
              </div>
              <div className="blog-card small">
                <img src="/placeholder.svg?height=100&width=120" alt="Blog Post" />
                <div>
                  <span className="blog-date">January 3, 2023</span>
                  <h4>How to prepare delicious chicken tenders</h4>
                </div>
              </div>
              <div className="blog-card small">
                <img src="/placeholder.svg?height=100&width=120" alt="Blog Post" />
                <div>
                  <span className="blog-date">January 3, 2023</span>
                  <h4>7 delicious cheesecake recipes you can prepare</h4>
                </div>
              </div>
              <div className="blog-card small">
                <img src="/placeholder.svg?height=100&width=120" alt="Blog Post" />
                <div>
                  <span className="blog-date">January 3, 2023</span>
                  <h4>5 great pizza restaurants you should visit this city</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span>🍽️ Bistro Bliss</span>
                <p>In the new era of technology we look in the future with certainty life.</p>
                <div className="social-links">
                  <a href="#">📘</a>
                  <a href="#">🐦</a>
                  <a href="#">📷</a>
                  <a href="#">💼</a>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h4>Pages</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Delivery</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Utility Pages</h4>
              <ul>
                <li><a href="#">Start Here</a></li>
                <li><a href="#">Styleguide</a></li>
                <li><a href="#">Password Protected</a></li>
                <li><a href="#">404 Not Found</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">View More</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow us on Instagram</h4>
              <div className="instagram-grid">
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
                <img src="/placeholder.svg?height=80&width=80" alt="Instagram" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2023 Bistro Bliss. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
