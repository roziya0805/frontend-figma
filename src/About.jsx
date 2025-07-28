import "./about.css"

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="contact-info">
              <span>📞 (414) 857 - 0107</span>
              <span>📧 happytummy@restaurant.com</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                💼
              </a>
            </div>
          </div>
          <div className="header-main">
            <div className="logo">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">Bistro Bliss</span>
            </div>
            <nav className="nav">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link active">
                About
              </a>
              <a href="#menu" className="nav-link">
                Menu
              </a>
              <a href="#pages" className="nav-link">
                Pages
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>
            <button className="btn-primary">Book A Table</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-about">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20%282%29-rN5KANbvz6nnE1X0C4raj7vhq7WwKU.png"
                alt="Healthy Food"
              />
              <div className="contact-card">
                <h3>Come and visit us</h3>
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <span>(414) 857 - 0107</span>
                </div>
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <span>happytummy@restaurant.com</span>
                </div>
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </div>
              </div>
            </div>
            <div className="hero-text">
              <h1>We provide healthy food for your family.</h1>
              <p>
                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional
                service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local
                community while infusing a global palate.
              </p>
              <p>
                At place, we believe that dining is not just about food, but also about the overall experience. Our
                staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-overlay">
          <div className="container">
            <div className="video-content">
              <button className="play-button">
                <span className="play-icon">▶</span>
              </button>
              <h2>Feel the authentic & original taste from us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <span>🍽️</span>
              </div>
              <h3>Multi Cuisine</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <span>📱</span>
              </div>
              <h3>Easy To Order</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <span>🚚</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text">
              <h2>A little information for our valuable guest</h2>
              <p>
                At place, we believe that dining is not just about food, but also about the overall experience. Our
                staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Locations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1995</span>
                  <span className="stat-label">Founded</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">65+</span>
                  <span className="stat-label">Staff Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfied Customers</span>
                </div>
              </div>
            </div>
            <div className="info-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Chef preparing food" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h4>"The best restaurant"</h4>
              <p>
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were
                enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>
              <div className="customer-info">
                <img src="/placeholder.svg?height=50&width=50" alt="Sophire Robson" />
                <div>
                  <strong>Sophire Robson</strong>
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h4>"Simply delicious"</h4>
              <p>
                Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect
                venue for our anniversary dinner. Each dish was prepared and beautifully presented.
              </p>
              <div className="customer-info">
                <img src="/placeholder.svg?height=50&width=50" alt="Matt Cannon" />
                <div>
                  <strong>Matt Cannon</strong>
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h4>"One of a kind restaurant"</h4>
              <p>
                The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short
                of extraordinary. The food was the highlight of our evening. Highly recommended.
              </p>
              <div className="customer-info">
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🍽️</span>
                <span className="logo-text">Bistro Bliss</span>
              </div>
              <p>In the new era of technology we look in the future with certainty life.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  💼
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Pages</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Utility Pages</h4>
              <ul>
                <li>
                  <a href="#">Start Here</a>
                </li>
                <li>
                  <a href="#">Styleguide</a>
                </li>
                <li>
                  <a href="#">Password Protected</a>
                </li>
                <li>
                  <a href="#">404 Not Found</a>
                </li>
                <li>
                  <a href="#">Licenses</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
                <li>
                  <a href="#">View More</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow us on Instagram</h4>
              <div className="instagram-grid">
                <img src="/placeholder.svg?height=80&width=80" alt="Food 1" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 2" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 3" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 4" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 5" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 6" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About