import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Vegetables",
     
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
      
    },
    {
      id: 2,
      name: "Dairy & Eggs",
   
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      
    },
    {
      id: 3,
      name: "Bakery",
      
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
     
    },
    {
      id: 4,
      
       name: "Fruits",
     
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
      
    },
    {
      id: 5,
      name: "Beverages",
      
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      
    },
    {
      id: 6,
      name: "Personal Care",
      
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      
    },
    
    {
      id: 8,
      name: "Instant Food",
     
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      
    },
    {
      id: 9,
     
      name: "Ice Cream",
   
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    
    },
    {
      id: 10,
      name: "Baby Care",
     
         image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      
    },{
      id: 7,
      name: "Home Care",
     
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      
    },
  ];

  return (
    <section className="bg-white py-8 w-full">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-zenfoo-dark">
            Popular Categories
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
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;