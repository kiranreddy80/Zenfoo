import React from 'react';
import ProductCard from '../Products/ProductCard';

const Electronics = () => {
  const electronicsProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1499,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 12999,
      originalPrice: 14999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 3,
      name: "Laptop",
      price: 44999,
      originalPrice: 49999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 6,
      name: "Tablet",
      price: 17999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
    {
      id: 10,
      name: "Wireless Mouse",
      price: 499,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      unit: "1 piece"
    },
   {
      id: 12,
      name: "Keyboard",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
      unit: "USB Wired"
    },
    {
      id: 11,
      name: "Charging Adapter",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      unit: "20W Fast"
    },
     {
      id: 7,
      name: "Power Bank",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=400&h=300&fit=crop",
      unit: "10000mAh"
    },
  ];

  return (
    <section className="bg-white py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zenfoo-dark">
            Electronics
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
            {electronicsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Electronics;