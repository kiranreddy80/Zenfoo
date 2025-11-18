import React from 'react';
import ProductCard from './ProductCard';

const SkinCare = () => {
  const skinCareProducts = [
    {
      id: 1,
      name: "Himalaya Face Wash",
      price: 125,
      originalPrice: 145,
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "100ml"
    },
    {
      id: 2,
      name: "Nivea Moisturizing Cream",
      price: 165,
      originalPrice: 185,
      image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "100ml"
    },
    {
      id: 3,
      name: "Lakme Sunscreen SPF 50",
      price: 285,
      originalPrice: 320,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "50ml"
    },
    {
      id: 4,
      name: "Garnier Micellar Water",
      price: 195,
      originalPrice: 225,
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "125ml"
    },
    {
      id: 5,
      name: "Plum Face Serum",
      price: 445,
      originalPrice: 495,
      image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "30ml"
    },
    {
      id: 6,
      name: "Cetaphil Gentle Cleanser",
      price: 385,
      originalPrice: 425,
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "125ml"
    },
    {
      id: 7,
      name: "Mamaearth Vitamin C Serum",
      price: 549,
      originalPrice: 599,
       image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "30ml"
    },
    {
      id: 8,
      name: "Biotique Face Pack",
      price: 145,
      originalPrice: 165,
      image: "https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "75g"
    },
    
     {
      id: 12,
      name: "WOW Aloe Vera Gel",
      price: 245,
      originalPrice: 285,
      image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "100ml"
    },
    {
      id: 10,
      name: "The Face Shop Toner",
      price: 325,
      originalPrice: 375,
      image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "150ml"
    },
    {
      id: 11,
      name: "Lotus Herbals Day Cream",
      price: 275,
      originalPrice: 315,
      image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "50g"
    },
    {
      id: 9,
      name: "Neutrogena Hydro Boost",
      price: 425,
      originalPrice: 475,
       image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      unit: "50g"
    },
   
  ];

  return (
    <section className="bg-gray-50 py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zenfoo-dark">
            Skin Care
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
            {skinCareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default SkinCare;