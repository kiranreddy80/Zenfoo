import React, { useState } from 'react';

const CategoryCard = ({ category }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex-shrink-0 w-32 group cursor-pointer">
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-zenfoo-muted/10 overflow-hidden">
        
        {/* Image Container with Lazy Loading */}
        <div className="relative h-24 bg-zenfoo-muted/10 overflow-hidden">
          {category.image && (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-zenfoo-muted/20 animate-pulse"></div>
              )}
              <img 
                src={category.image} 
                alt={category.name}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </>
          )}
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40`}></div>
          
          {/* Category Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl filter drop-shadow-lg">{category.icon}</span>
          </div>
        </div>

        {/* Category Name */}
        <div className="p-3 text-center">
          <h3 className="text-xs font-semibold text-zenfoo-dark leading-tight line-clamp-2">
            {category.name}
          </h3>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-zenfoo-primary/20 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default CategoryCard;