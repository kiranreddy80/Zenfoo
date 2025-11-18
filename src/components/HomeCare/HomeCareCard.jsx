import React, { useState } from 'react';

const HomeCareCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-48 flex">
      {/* Left Side - Image & Badge */}
      <div className="relative w-32 flex-shrink-0">
        {/* Product Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Icon Badge */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <span className="text-lg">{product.icon}</span>
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
          <span>⭐</span>
          <span className="font-bold">{product.rating}</span>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Top Section */}
        <div className="space-y-2">
          {/* Badge & Name */}
          <div className="flex items-start justify-between">
            <div>
              <div className={`inline-flex px-2 py-1 rounded text-xs font-bold text-white bg-gradient-to-r ${product.gradient} mb-1`}>
                {product.badge}
              </div>
              <h3 className="font-bold text-zenfoo-dark text-sm leading-tight line-clamp-2">
                {product.name}
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xs text-zenfoo-muted line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Bottom Section - Price & Actions */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline space-x-1">
            <span className="text-lg font-bold text-zenfoo-dark">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-zenfoo-muted line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Add to Cart */}
          {quantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="bg-zenfoo-primary text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#9AC444' }}
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center space-x-2 bg-zenfoo-primary text-white rounded-lg px-2 py-1">
              <button 
                onClick={handleDecrement}
                className="w-6 h-6 flex items-center justify-center text-xs hover:bg-green-600 rounded transition-colors"
              >
                {quantity === 1 ? '🗑️' : '−'}
              </button>
              <span className="text-xs font-bold min-w-4 text-center">{quantity}</span>
              <button 
                onClick={handleIncrement}
                className="w-6 h-6 flex items-center justify-center text-xs hover:bg-green-600 rounded transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
        
        {/* Unit */}
        <div className="text-xs text-zenfoo-muted text-right mt-1">
          {product.unit}
        </div>
      </div>
    </div>
  );
};

export default HomeCareCard;