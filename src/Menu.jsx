import "./menu.css"

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Fried Eggs",
      price: "$9.99",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "breakfast",
    },
    {
      id: 2,
      name: "Hawaiian Pizza",
      price: "$15.99",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "main",
    },
    {
      id: 3,
      name: "Martinez Cocktail",
      price: "$7.25",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "drinks",
    },
    {
      id: 4,
      name: "Butterscotch Cake",
      price: "$20.99",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "desserts",
    },
    {
      id: 5,
      name: "Mint Lemonade",
      price: "$5.89",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "drinks",
    },
    {
      id: 6,
      name: "Chocolate Icecream",
      price: "$18.05",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "desserts",
    },
    {
      id: 7,
      name: "Cheese Burger",
      price: "$12.55",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "main",
    },
    {
      id: 8,
      name: "Classic Waffles",
      price: "$12.99",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      image: "/placeholder.svg?height=250&width=300",
      category: "breakfast",
    },
  ]

  const deliveryApps = [
    { name: "Uber Eats", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Grubhub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Postmates", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DoorDash", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Foodpanda", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Deliveroo", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Instacart", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Just Eat", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DiDi Food", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="menu-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="contact-info">
              <span>📞 (414) 857 - 0107</span>
              <span>📧 yummy@bistrobliss.com</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                📌
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
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#menu" className="nav-link active">
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

      {/* Menu Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-description">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-categories">
        <div className="container">
          <div className="category-tabs">
            <button className="category-tab active">All</button>
            <button className="category-tab">Breakfast</button>
            <button className="category-tab">Main Dishes</button>
            <button className="category-tab">Drinks</button>
            <button className="category-tab">Desserts</button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                </div>
                <div className="menu-content">
                  <div className="menu-price">{item.price}</div>
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Apps Section */}
      <section className="delivery-apps">
        <div className="container">
          <div className="delivery-content">
            <div className="delivery-text">
              <h2>You can order through apps</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor
                semper.
              </p>
            </div>
            <div className="apps-grid">
              {deliveryApps.map((app, index) => (
                <div key={index} className="app-logo">
                  <img src={app.logo || "/placeholder.svg"} alt={app.name} />
                </div>
              ))}
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
              <p>In the new era of technology we look in the future with certainty and pride for our company and.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  ❤️
                </a>
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  📌
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
              <h4>Follow Us On Instagram</h4>
              <div className="instagram-grid">
                <img src="/placeholder.svg?height=80&width=80" alt="Food 1" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 2" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 3" />
                <img src="/placeholder.svg?height=80&width=80" alt="Food 4" />
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

export default Menu