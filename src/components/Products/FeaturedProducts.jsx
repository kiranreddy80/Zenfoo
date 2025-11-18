import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 189,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 2,
      name: "Amul Taaza Milk",
      price: 65,
      originalPrice: 70,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      unit: "1L"
    },
    {
      id: 3,
      name: "Britannia Bread",
      price: 45,
      originalPrice: 50,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
      unit: "400g"
    },
    
    {
      id: 5,
      name: "Fresh Eggs",
      price: 89,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
      unit: "6pcs"
    },
    {
      id: 6,
      name: "Coca-Cola",
      price: 55,
      originalPrice: 60,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      unit: "750ml"
    },
    {
      id: 7,
      name: "Basmati Rice",
      price: 129,
      originalPrice: 149,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 8,
      name: "Toor Dal",
      price: 98,
      originalPrice: 110,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 9,
      name: "Fresh Tomatoes",
      price: 25,
      originalPrice: 30,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 12,
      name: "Fresh Bananas",
      price: 45,
      originalPrice: 50,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      unit: "6pcs"
    },
    {
      id: 11,
      name: "Fresh Potatoes",
      price: 28,
      originalPrice: 32,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 12,
      name: "Amul Taaza Milk",
      price: 65,
      originalPrice: 70,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      unit: "1L"
    },
  ];

  return (
    <section className="bg-white py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zenfoo-dark">
            Featured Products
          </h2>
          <button className="text-zenfoo-primary font-semibold hover:text-green-600 transition-colors duration-200 flex items-center space-x-1">
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex space-x-4 pb-4 overflow-x-auto scrollbar-hide">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;