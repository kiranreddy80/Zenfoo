import React from 'react';
import ProductCard from './ProductCard';

const SweetCravingsMunchies = () => {
  const sweetsProducts = [
    {
      id: 1,
      name: "Cadbury Dairy Milk",
      price: 50,
      originalPrice: 60,
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "45g"
    },
    {
      id: 2,
      name: "KitKat Chocolate",
      price: 30,
      originalPrice: 35,
      image: "https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "37g"
    },
    {
      id: 3,
      name: "Oreo Cookies",
      price: 25,
      originalPrice: 30,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "120g"
    },
    {
      id: 4,
      name: "Bourbon Biscuits",
      price: 20,
      originalPrice: 25,
      image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "100g"
    },
    {
      id: 5,
      name: "Dark Fantasy Cookies",
      price: 35,
      originalPrice: 40,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "75g"
    },
    {
      id: 6,
      name: "5 Star Chocolate",
      price: 20,
      originalPrice: 25,
      image: "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "40g"
    },
    {
      id: 7,
      name: "Parle-G Biscuits",
      price: 15,
      originalPrice: 20,
      image: "https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "200g"
    },
    {
      id: 8,
      name: "Gems Chocolate",
      price: 40,
      originalPrice: 45,
      image: "https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "40g"
    },
    {
      id: 9,
      name: "Lollipop Mix",
      price: 10,
      originalPrice: 15,
      image: "https://images.pexels.com/photos/1053924/pexels-photo-1053924.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "5 pcs"
    },
    {
      id: 10,
      name: "Kurkure Chips",
      price: 20,
      originalPrice: 25,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "65g"
    },
    {
      id: 11,
      name: "Perk Chocolate",
      price: 20,
      originalPrice: 25,
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "28g"
    },
    {
      id: 12,
      name: "Choco Pie",
      price: 30,
      originalPrice: 35,
      image: "https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "50g"
    }
  ];

  return (
    <section className="bg-white py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zenfoo-dark">
            Sweet Cravings & Munchies
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
            {sweetsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default SweetCravingsMunchies;