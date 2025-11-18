import React, { useState } from 'react';

const DealCard = ({ deal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-zenfoo-muted/20 overflow-hidden group">
      
      {/* Compact Deal Image with Lazy Loading */}
      <div className="relative h-20 bg-zenfoo-muted/10 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-zenfoo-muted/20 animate-pulse"></div>
        )}
        <img 
          src={deal.image} 
          alt={deal.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Discount Badge - Small */}
        <div className="absolute top-1 left-1">
          <div className="bg-zenfoo-primary text-white text-xs font-bold px-2 py-1 rounded">
            {deal.discount}
          </div>
        </div>
      </div>

      {/* Compact Deal Info */}
      <div className="p-2">
        <h3 className="text-xs font-semibold text-zenfoo-dark mb-1 line-clamp-1">
          {deal.title}
        </h3>
        <p className="text-xs text-zenfoo-muted mb-2 line-clamp-1">
          {deal.description}
        </p>
        
        <button 
          className="w-full bg-zenfoo-primary text-white text-xs py-1 rounded font-semibold hover:bg-green-600 transition-colors duration-200"
          style={{ backgroundColor: '#9AC444' }}
        >
          {deal.buttonText}
        </button>
      </div>
    </div>
  );
};

export default DealCard;