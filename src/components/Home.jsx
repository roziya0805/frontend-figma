import { Link } from "react-router-dom"
import "../styles/home.css"

const Home = () => {
  const features = [
    {
      icon: "🚚",
      title: "Tez yetkazib berish",
      description: "30 daqiqa ichida sizning uyingizgacha yetkazib beramiz",
    },
    {
      icon: "👨‍🍳",
      title: "Professional oshpazlar",
      description: "Tajribali oshpazlarimiz eng mazali taomlarni tayyorlaydi",
    },
    {
      icon: "🌟",
      title: "Sifatli mahsulotlar",
      description: "Faqat eng yangi va sifatli mahsulotlardan foydalanamiz",
    },
    {
      icon: "💰",
      title: "Qulay narxlar",
      description: "Eng sifatli taomlarni eng qulay narxlarda taklif etamiz",
    },
  ]

  const popularDishes = [
    {
      name: "O'zbek oshi",
      price: "40,000 so'm",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Mashhur",
    },
    {
      name: "Lag'mon",
      price: "35,000 so'm",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Yangi",
    },
    {
      name: "Manti",
      price: "30,000 so'm",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Top",
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Eng mazali <span className="highlight">taomlar</span> sizni kutmoqda
              </h1>
              <p className="hero-description">
                Bizning restoranimizda eng sifatli va mazali taomlarni tayyorlaymiz. Har bir taom sevgi va g'amxo'rlik
                bilan pishiriladi.
              </p>
              <div className="hero-buttons">
                <Link to="/menu" className="btn-primary large">
                  Menyu ko'rish
                </Link>
                <button className="btn-outline large">Bron qilish</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Mamnun mijozlar</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Taom turlari</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Xizmat vaqti</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card card-1">
                <img src="/placeholder.svg?height=200&width=200" alt="Pizza" />
                <div className="card-content">
                  <h4>Italyan Pizza</h4>
                  <span className="price">45,000 so'm</span>
                </div>
              </div>
              <div className="floating-card card-2">
                <img src="/placeholder.svg?height=180&width=180" alt="Salad" />
                <div className="card-content">
                  <h4>Fresh Salat</h4>
                  <span className="price">25,000 so'm</span>
                </div>
              </div>
              <div className="floating-card card-3">
                <img src="/placeholder.svg?height=160&width=160" alt="Burger" />
                <div className="card-content">
                  <h4>Cheeseburger</h4>
                  <span className="price">35,000 so'm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nima uchun bizni tanlashadi?</h2>
            <p className="section-description">Bizning afzalliklarimiz va sifatli xizmatlarimiz</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="popular-dishes">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mashhur taomlarimiz</h2>
            <p className="section-description">Eng ko'p buyurtma qilinadigan taomlar</p>
          </div>
          <div className="dishes-grid">
            {popularDishes.map((dish, index) => (
              <div key={index} className="dish-card">
                <div className="dish-image">
                  <img src={dish.image || "/placeholder.svg"} alt={dish.name} />
                  <div className="dish-badge">{dish.badge}</div>
                </div>
                <div className="dish-content">
                  <h3>{dish.name}</h3>
                  <div className="dish-footer">
                    <span className="price">{dish.price}</span>
                    <button className="btn-primary small">Buyurtma</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/menu" className="btn-outline">
              Barcha taomlarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Bugun bizga tashrif buyuring!</h2>
            <p>Eng mazali taomlar va ajoyib xizmat sizni kutmoqda</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary large">
                Aloqa
              </Link>
              <Link to="/menu" className="btn-outline large">
                Menyu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
