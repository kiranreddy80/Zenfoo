import React from 'react';
import HomeCareCard from './HomeCareCard';

const HomeCareSection = () => {
  const homeCareProducts = [
    {
      id: 1,
      name: "Luxury Fabric Care",
      description: "Orchid essence softener",
      price: 299,
      originalPrice: 399,
      // A clean, premium-looking laundry detergent/softener bottle
         image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=400&fit=crop",
      unit: "2L",
      rating: 4.8,
      badge: "PREMIUM",
      gradient: "from-purple-500 to-pink-500",
      icon: "🧴"
    },
    {
      id: 2,
      name: "Eco Floor Cleaner",
      description: "Plant-based natural solution",
      price: 189,
      originalPrice: 249,
      // A cleaning spray bottle with a natural/eco feel
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      unit: "1L",
      rating: 4.7,
      badge: "ECO",
      gradient: "from-green-500 to-teal-500",
      icon: "🌿"
    },
    {
      id: 3,
      name: "Crystal Cleaner",
      description: "Streak-free multi-surface",
      price: 159,
      originalPrice: 199,
      // A modern spray bottle for glass/surface cleaning
   image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=400&fit=crop",
      unit: "750ml",
      rating: 4.9,
      badge: "BEST",
      gradient: "from-blue-500 to-cyan-500",
      icon: "✨"
    },
    {
      id: 4,
      name: "Air Purifier",
      description: "Essential oil freshener",
      price: 249,
      originalPrice: 299,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=400&fit=crop",
      unit: "200ml",
      rating: 4.8,
      badge: "NEW",
      gradient: "from-orange-500 to-red-500",
      icon: "💨"
    }
  ];

  return (
    <section className="py-12 w-full bg-gradient-to-br from-white to-blue-50/20">
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-zenfoo-dark mb-2">
            Home Care <span className="text-zenfoo-primary">Essentials</span>
          </h2>
          <p className="text-zenfoo-muted">Premium solutions for a sparkling home</p>
        </div>

        {/* Single Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeCareProducts.map((product) => (
            <HomeCareCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCareSection;