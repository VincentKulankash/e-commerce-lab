import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900">
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upgrade Your Tech. Power Your Life.</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Latest smartphones, laptops, and accessories. Fast delivery across Kenya.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Shop Now
          </Link>
          <Link to="/deals" className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600">
            View Deals
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 grid md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto">
        {[
          {icon: "🚚", title: "Fast Delivery", desc: "24-48hrs in Nairobi"},
          {icon: "✅", title: "Genuine Products", desc: "1 Year Warranty"},
          {icon: "↩️", title: "Easy Returns", desc: "14 day returns"},
          {icon: "💳", title: "Pay on Delivery", desc: "M-Pesa, Card, Cash"}
        ].map(f => (
          <div key={f.title} className="p-6 border rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center max-w-7xl mx-auto">
          {[
            {name: "Smartphones", emoji: "📱"},
            {name: "Laptops", emoji: "💻"},
            {name: "Audio", emoji: "🎧"},
            {name: "Smart Home", emoji: "🏠"},
            {name: "Gaming", emoji: "🎮"},
            {name: "Accessories", emoji: "🔌"}
          ].map(c => (
            <Link key={c.name} to={`/category/${c.name.toLowerCase()}`} 
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl cursor-pointer transition">
              <div className="text-4xl mb-2">{c.emoji}</div>
              <div className="font-semibold">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade?</h2>
        <p className="mb-6">Shop the latest electronics today</p>
        <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Shop All Products
        </Link>
      </section>

    </div>
  )
}