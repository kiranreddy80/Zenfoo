import React from 'react';
import LocationSelector from './LocationSelector';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-zenfoo-muted/20 w-full">
      
      <div className="w-full px-4">
        <div className="flex items-center py-4 gap-6 w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-zenfoo-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <h1 className="text-2xl font-bold text-zenfoo-dark">ZenFoo</h1>
            </div>
          </div>

          {/* Location & Delivery */}
          <div className="flex-shrink-0 w-48">
            <LocationSelector />
          </div>

          {/* Search Bar - Takes maximum space */}
          <div className="flex-1 min-w-0">
            <SearchBar />
          </div>

          {/* User Actions */}
          <div className="flex-shrink-0">
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;