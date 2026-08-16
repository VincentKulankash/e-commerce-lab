import { Link } from "react-router-dom"; 

export default function LandingPage() {
  return (
    <div>
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {[
            { name: "Smartphones", emoji: "📱" },
            { name: "Laptops", emoji: "💻" },
            { name: "Audio", emoji: "🎧" },
            { name: "Smart Home", emoji: "🏠" },
          ].map((c) => (
            <Link to="/products" key={c.name} className="text-center cursor-pointer transition">
              <div className="text-4xl mb-2">{c.emoji}</div>
              <div className="font-semibold">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade?</h2>
        <p className="mb-6">Shop the latest electronics today</p>
        <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Shop All Products
        </Link>
      </section>
    </div>
  );
}