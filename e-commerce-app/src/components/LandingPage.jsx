import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div>
      <section className="category-section">
        <h2 className="category-section-title">Shop by Category</h2>
        <div className="category-grid">
          {[
            { name: "Smartphones", emoji: "📱", category: "Phones" },
            { name: "Laptops", emoji: "💻", category: "Laptops" },
            { name: "Audio", emoji: "🎧", category: "Audio" },
            { name: "Smart Home", emoji: "🏠", category: "Smart Home" },
            { name: "Tablets", emoji: "📲", category: "Tablets" },
            { name: "Accessories", emoji: "🎒", category: "Accessories" },
          ].map((c) => (
            <div
              key={c.name}
              onClick={() => handleCategoryClick(c.category)}
              className="category-card"
            >
              <div className="category-card-emoji">{c.emoji}</div>
              <div className="category-card-name">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to upgrade?</h2>
        <p className="cta-subtitle">Shop the latest electronics today</p>
        <Link to="/products" className="cta-button">
          Shop All Products
        </Link>
      </section>
    </div>
  );
}