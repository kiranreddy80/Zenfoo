import React from 'react';
import DealCard from './DealCard';

const DealsSection = () => {
  const deals = [
    {
      id: 1,
      title: "Weekend Special",
      description: "50% off on fruits",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
      buttonText: "Shop Now",
      discount: "50% OFF"
    },
    {
      id: 2,
      title: "Combo Offer",
      description: "Buy 2 Get 1 Free",
      image: "https://images.unsplash.com/photo-1566479969036-67b281ccef53?w=400&h=300&fit=crop",
      buttonText: "Grab Deal",
      discount: "B2G1"
    },
    {
      id: 3,
      title: "Flash Sale",
      description: "30% off dairy",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      buttonText: "Shop Fast",
      discount: "30% OFF"
    },
    {
      id: 4,
      title: "New Arrivals",
      description: "Fresh imported fruits",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      buttonText: "Explore",
      discount: "NEW"
    },
    {
      id: 5,
      title: "Daily Essentials",
      description: "Milk, Bread, Eggs",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      buttonText: "Buy Now",
      discount: "20% OFF"
    },
    {
      id: 6,
      title: "Snack Time",
      description: "Chips & Beverages",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      buttonText: "Grab Now",
      discount: "25% OFF"
    }
  ];

  return (
    <section className="bg-white py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zenfoo-dark">
            Hot Deals & Offers
          </h2>
          <button className="text-zenfoo-primary font-semibold hover:text-green-600 transition-colors duration-200 flex items-center space-x-1">
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Compact Deals Grid - 6 cards per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;