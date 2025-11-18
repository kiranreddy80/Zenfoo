import React, { useState, useEffect } from 'react';

const ComingSoonPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto transform animate-scale-in overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Visual & Branding */}
        <div className="md:w-2/5 bg-gradient-to-br from-zenfoo-primary to-green-600 p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-6 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
          >
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
            {/* Main Icon */}
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/30 mb-6">
              <span className="text-4xl">✨</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-4">
              Coming Soon
            </h1>
            
            {/* Subtitle */}
            <p className="text-white/90 text-lg mb-6">
              Get ready for something amazing
            </p>

            {/* Progress */}
            <div className="w-full max-w-xs">
              <div className="flex justify-between text-sm mb-2">
                <span>Launch Progress</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-1000"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 flex space-x-2">
              <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content & Actions */}
        <div className="md:w-3/5 p-8 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-zenfoo-dark mb-2">
              Something Extraordinary Is Coming
            </h2>
            <p className="text-zenfoo-muted">
              We're working hard to bring you an incredible new experience
            </p>
          </div>

          {/* Features Grid - Horizontal */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-zenfoo-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-zenfoo-dark text-sm">Fast Delivery</h3>
                <p className="text-xs text-zenfoo-muted">10-15 mins</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-lg">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold text-zenfoo-dark text-sm">Smart Features</h3>
                <p className="text-xs text-zenfoo-muted">AI Powered</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-lg">⭐</span>
              </div>
              <div>
                <h3 className="font-semibold text-zenfoo-dark text-sm">Premium Quality</h3>
                <p className="text-xs text-zenfoo-muted">Best Products</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-lg">💫</span>
              </div>
              <div>
                <h3 className="font-semibold text-zenfoo-dark text-sm">New Experience</h3>
                <p className="text-xs text-zenfoo-muted">Revolutionary</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-zenfoo-muted text-sm leading-relaxed">
              We're crafting a revolutionary grocery shopping experience that will transform how you shop for daily essentials. Faster, smarter, and more intuitive than ever before.
            </p>
          </div>

          {/* Notification Form */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-zenfoo-dark mb-3">
              Get notified when we launch
            </p>
            <div className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-zenfoo-primary focus:ring-2 focus:ring-zenfoo-primary/20 transition-all duration-200 text-sm"
              />
              <button className="bg-zenfoo-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-sm">
                Notify Me
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            <button 
              onClick={handleClose}
              className="flex-1 bg-gray-100 text-zenfoo-dark py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200 border border-gray-300 text-sm"
            >
              Continue Shopping
            </button>
            <button 
              onClick={handleClose}
              className="flex-1 bg-zenfoo-primary text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPopup;