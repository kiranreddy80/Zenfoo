import React, { useState } from 'react';
import { getFallbackImage } from '../../utils/fallbackImages';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.image);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setCurrentImage(getFallbackImage(product.name));
    }
  };

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
    <div className="flex-shrink-0 w-36 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-zenfoo-muted/20 overflow-hidden group">
      
      {/* Product Image with Error Handling */}
      <div className="relative h-28 bg-zenfoo-muted/10 overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-zenfoo-muted/20 animate-pulse"></div>
        )}
        
        {/* Error Placeholder */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-zenfoo-muted/20 to-zenfoo-muted/30 flex items-center justify-center">
            <div className="text-zenfoo-muted text-2xl">🛒</div>
          </div>
        )}
        
        {/* Actual Image */}
        <img 
          src={currentImage} 
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Product Info - Compact */}
      <div className="p-2">
        {/* Product Name */}
        <h3 className="text-xs font-medium text-zenfoo-dark mb-1 line-clamp-2 leading-tight h-8">
          {product.name}
        </h3>
        
        {/* Unit */}
        <p className="text-xs text-zenfoo-muted mb-2">{product.unit}</p>

        {/* Price Row - With Add to Cart */}
        <div className="flex items-center justify-between">
          {/* Price Section */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-zenfoo-dark">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-zenfoo-muted line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Add to Cart / Quantity Controls */}
          {quantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="bg-zenfoo-primary text-white text-xs px-3 py-1 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: '#9AC444' }}
            >
              ADD
            </button>
          ) : (
            <div 
              className="flex items-center space-x-2 text-white rounded-lg px-2 py-1"
              style={{ backgroundColor: '#9AC444' }}
            >
              <button 
                onClick={handleDecrement}
                className="text-xs font-bold hover:bg-green-600 rounded transition-colors duration-200 w-4 h-4 flex items-center justify-center"
              >
                {quantity === 1 ? '🗑️' : '−'}
              </button>
              <span className="text-xs font-semibold">{quantity}</span>
              <button 
                onClick={handleIncrement}
                className="text-xs font-bold hover:bg-green-600 rounded transition-colors duration-200 w-4 h-4 flex items-center justify-center"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;