import React from 'react';

const BrandShowcase = () => {
  const brands = [
    {
      name: "Amul",
      logo: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=120&h=80&fit=crop",
      products: "Dairy & Ice Cream",
      offer: "Up to 30% OFF"
    },
    {
      name: "Britannia",
      logo: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=120&h=80&fit=crop",
      products: "Bakery & Snacks",
      offer: "Buy 1 Get 1"
    },
    {
      name: "Dove",
      logo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=120&h=80&fit=crop",
      products: "Personal Care",
      offer: "25% OFF"
    },
    {
      name: "Lays",
       logo: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=120&h=80&fit=crop",
      products: "Snacks & Chips",
      offer: "₹20 each"
    },
    {
      name: "Colgate",
    logo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=120&h=80&fit=crop",
      products: "Oral Care",
      offer: "Combo Packs"
    },
    {
      name: "Coca-Cola",
      logo: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=120&h=80&fit=crop",
      products: "Beverages",
      offer: "Family Pack"
    }
  ];

  return (
    <section className="py-16 w-full bg-white">
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zenfoo-dark mb-4">
            Featured <span className="text-zenfoo-primary">Brands</span>
          </h2>
          <p className="text-xl text-zenfoo-muted">
            Shop from your favorite trusted brands with exclusive offers
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="group text-center bg-gray-50 rounded-2xl p-6 hover:bg-zenfoo-primary hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Brand Logo */}
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Brand Info */}
              <h3 className="font-bold text-zenfoo-dark group-hover:text-white mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-zenfoo-muted group-hover:text-white/80 mb-2">
                {brand.products}
              </p>
              <div className="bg-zenfoo-primary text-white text-xs px-2 py-1 rounded-full group-hover:bg-white group-hover:text-zenfoo-primary font-semibold">
                {brand.offer}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-zenfoo-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;