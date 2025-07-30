"use client"

import { useState } from "react"
import "../styles/menu.css"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "Barchasi" },
    { id: "breakfast", name: "Nonushta" },
    { id: "main", name: "Asosiy taomlar" },
    { id: "drinks", name: "Ichimliklar" },
    { id: "desserts", name: "Shirinliklar" },
  ]

  const menuItems = [
    {
      id: 1,
      name: "O'zbek oshi",
      price: "40,000",
      description: "An'anaviy o'zbek oshi, go'sht va sabzavotlar bilan",
      image: "/placeholder.svg?height=300&width=400",
      category: "main",
    },
    {
      id: 2,
      name: "Lag'mon",
      price: "35,000",
      description: "Qo'lda tortilgan lag'mon, go'sht va sabzavotlar bilan",
      image: "/placeholder.svg?height=300&width=400",
      category: "main",
    },
    {
      id: 3,
      name: "Manti",
      price: "30,000",
      description: "Bug'da pishirilgan manti, go'sht va piyoz bilan",
      image: "/placeholder.svg?height=300&width=400",
      category: "main",
    },
    {
      id: 4,
      name: "Somsa",
      price: "8,000",
      description: "Tandir somsasi, go'sht va piyoz bilan",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      id: 5,
      name: "Choy",
      price: "5,000",
      description: "Issiq qora choy, shakar bilan",
      image: "/placeholder.svg?height=300&width=400",
      category: "drinks",
    },
    {
      id: 6,
      name: "Halva",
      price: "15,000",
      description: "An'anaviy o'zbek halvasi",
      image: "/placeholder.svg?height=300&width=400",
      category: "desserts",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-title">Bizning menyumiz</h1>
          <p className="menu-description">Eng mazali va sifatli taomlarni tanlang</p>
        </div>
      </section>

      {/* Categories */}
      <section className="menu-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                </div>
                <div className="menu-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-footer">
                    <span className="price">{item.price} so'm</span>
                    <button className="btn-primary small">Buyurtma</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
