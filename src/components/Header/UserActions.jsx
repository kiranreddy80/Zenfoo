import React, { useState } from 'react';

const UserActions = () => {
  const [cartCount, setCartCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center space-x-6">
      {/* Login/Signup */}
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-zenfoo-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="flex items-center space-x-2 text-zenfoo-dark hover:text-zenfoo-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-zenfoo-muted/5 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="whitespace-nowrap">Login</span>
          </button>
        )}
      </div>

      {/* Cart */}
      <div className="relative">
        <button className="flex items-center space-x-2 text-zenfoo-dark hover:text-zenfoo-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-zenfoo-muted/5 font-medium relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="whitespace-nowrap">Cart</span>
          
          {/* Cart Count Badge */}
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-zenfoo-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white shadow-sm">
              {cartCount}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserActions;