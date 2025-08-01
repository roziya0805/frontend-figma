"use client"

import { useState } from "react"
import "../styles/book.css"

const Book = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: "1",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]

  const personOptions = [
    { value: "1", label: "1 kishi" },
    { value: "2", label: "2 kishi" },
    { value: "3", label: "3 kishi" },
    { value: "4", label: "4 kishi" },
    { value: "5", label: "5 kishi" },
    { value: "6", label: "6 kishi" },
    { value: "7", label: "7 kishi" },
    { value: "8", label: "8 kishi" },
    { value: "9+", label: "9+ kishi" },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Bron qilish muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.")
      setFormData({
        date: "",
        time: "",
        name: "",
        phone: "",
        persons: "1",
        specialRequests: "",
      })
    }, 2000)
  }

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="book">
      {/* Hero Section */}
      <section className="book-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="book-hero-content">
            <h1 className="book-title">Stol bron qilish</h1>
            <p className="book-description">
              Bizning restoranimizda unutilmas kechani o'tkazish uchun stol bron qiling. Biz sizga eng yaxshi xizmat
              ko'rsatishga tayyormiz.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-info">
              <h2>Nima uchun bizni tanlashingiz kerak?</h2>
              <div className="info-features">
                <div className="info-feature">
                  <div className="feature-icon">🍽️</div>
                  <div>
                    <h4>Sifatli taomlar</h4>
                    <p>Eng yangi mahsulotlardan tayyorlangan mazali taomlar</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="feature-icon">👨‍🍳</div>
                  <div>
                    <h4>Professional oshpazlar</h4>
                    <p>Tajribali oshpazlarimiz har bir taomni sevgi bilan tayyorlaydi</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="feature-icon">🎵</div>
                  <div>
                    <h4>Ajoyib muhit</h4>
                    <p>Romantik va qulay muhitda unutilmas kechani o'tkazing</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="feature-icon">⭐</div>
                  <div>
                    <h4>A'lo xizmat</h4>
                    <p>Mijozlarimizning mamnunligi bizning birinchi maqsadimiz</p>
                  </div>
                </div>
              </div>

              <div className="contact-info">
                <h3>Aloqa ma'lumotlari</h3>
                <div className="contact-items">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 1-uy</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+998 90 123 45 67</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🕒</span>
                    <span>Har kuni: 09:00 - 23:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-form-container">
              <div className="booking-form-wrapper">
                <h2>Stol bron qilish</h2>
                <p>Quyidagi formani to'ldiring va biz siz bilan bog'lanamiz</p>

                {submitMessage && <div className="success-message">{submitMessage}</div>}

                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Sana</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Vaqt</label>
                      <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Vaqtni tanlang</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ismingiz</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="To'liq ismingizni kiriting"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefon raqam</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="persons">Kishilar soni</label>
                    <select id="persons" name="persons" value={formData.persons} onChange={handleChange} required>
                      {personOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialRequests">Maxsus so'rovlar (ixtiyoriy)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Allergiya, maxsus taomlar yoki boshqa so'rovlaringizni yozing..."
                      rows="4"
                      value={formData.specialRequests}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary full-width" disabled={isSubmitting}>
                    {isSubmitting ? "Yuborilmoqda..." : "Stol bron qilish"}
                  </button>
                </form>

                <div className="booking-note">
                  <p>
                    <strong>Eslatma:</strong> Bron qilish tasdiqlangandan so'ng, siz bilan 24 soat ichida bog'lanamiz.
                    Agar sizda savollar bo'lsa, to'g'ridan-to'g'ri qo'ng'iroq qiling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Bizning joylashuvimiz</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-info">
                <h3>🗺️ Bizni topish oson!</h3>
                <p>Toshkent shahrining markazida joylashgan</p>
                <div className="map-details">
                  <div className="map-detail">
                    <span className="detail-icon">📍</span>
                    <span>Chilonzor tumani, Bunyodkor ko'chasi 1-uy</span>
                  </div>
                  <div className="map-detail">
                    <span className="detail-icon">🚗</span>
                    <span>Bepul to'xtash joyi mavjud</span>
                  </div>
                  <div className="map-detail">
                    <span className="detail-icon">🚇</span>
                    <span>Metro bekatidan 5 daqiqa piyoda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Times */}
      <section className="popular-times">
        <div className="container">
          <h2>Mashhur vaqtlar</h2>
          <p>Quyidagi vaqtlarda ko'proq band bo'lamiz, oldindan bron qilishni tavsiya qilamiz</p>
          <div className="times-grid">
            <div className="time-card">
              <h4>Dam olish kunlari</h4>
              <div className="time-slots">
                <span className="time-slot busy">12:00 - 14:00</span>
                <span className="time-slot busy">19:00 - 21:00</span>
              </div>
              <p>Oilaviy tushlik va kechki ovqat vaqtlari</p>
            </div>
            <div className="time-card">
              <h4>Ish kunlari</h4>
              <div className="time-slots">
                <span className="time-slot moderate">12:30 - 13:30</span>
                <span className="time-slot moderate">19:30 - 20:30</span>
              </div>
              <p>Tushlik va kechki ovqat vaqtlari</p>
            </div>
            <div className="time-card">
              <h4>Eng yaxshi vaqt</h4>
              <div className="time-slots">
                <span className="time-slot available">15:00 - 18:00</span>
                <span className="time-slot available">21:30 - 22:30</span>
              </div>
              <p>Tinch va qulay muhit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Book
