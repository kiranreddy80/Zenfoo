import React, { useState } from 'react';

const CategoryShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    {
      id: 1,
      name: "Morning Essentials",
      icon: "☀️",
      description: "Start your day right with breakfast essentials",
      products: [
        { name: "Fresh Milk", price: "₹65", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=150&fit=crop" },
        { name: "Bread", price: "₹45", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200&h=150&fit=crop" },
        { name: "Eggs", price: "₹89", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=150&fit=crop" }
      ],
      color: "from-orange-400 to-yellow-400"
    },
    {
      id: 2,
      name: "Evening Snacks",
      icon: "🌅",
      description: "Perfect snacks for your evening cravings",
      products: [
        { name: "Ice Cream", price: "₹150", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", },
        
        { name: "Soft Drinks", price: "₹55", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=150&fit=crop" },
        { name: "Pizza", price: "₹235",  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" }
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      name: "Weekly Groceries",
      icon: "📦",
      description: "Everything you need for the week",
      products: [
        { name: "Rice", price: "₹129", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=150&fit=crop" },
        { name: "Cooking Oil", price: "₹199", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=150&fit=crop" },
        { name: "Pulses", price: "₹98", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&h=150&fit=crop" }
      ],
      color: "from-green-400 to-blue-400"
    }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 w-full bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zenfoo-dark mb-4">
            Curated <span className="text-zenfoo-primary">Collections</span>
          </h2>
          <p className="text-xl text-zenfoo-muted max-w-2xl mx-auto">
            Smart collections for every occasion. Switch between categories to explore relevant products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1 space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-zenfoo-dark shadow-md hover:shadow-lg'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className={`text-sm ${
                  activeCategory === category.id ? 'text-white/90' : 'text-zenfoo-muted'
                }`}>
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Products Showcase */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeData.products.map((product, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-zenfoo-dark mb-1">{product.name}</h4>
                    <p className="text-zenfoo-primary font-bold">{product.price}</p>
                    <button className="mt-3 bg-zenfoo-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;