import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex items-center bg-zenfoo-muted/10 rounded-xl px-4 py-3 border border-transparent focus-within:border-zenfoo-primary focus-within:bg-white focus-within:shadow-sm transition-all duration-200 hover:bg-zenfoo-muted/15">
        {/* Search Icon */}
        <svg className="w-5 h-5 text-zenfoo-muted mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        {/* Search Input - Full Width */}
        <input
          type="text"
          placeholder="Search for bread, butter, milk, eggs, snacks, beverages, personal care..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-zenfoo-dark placeholder-zenfoo-muted text-base w-full min-w-0"
        />
        
        {/* Voice Search (Mike) */}
        <button className="ml-4 p-2 rounded-full hover:bg-zenfoo-muted/20 transition-colors duration-200 flex-shrink-0">
          <svg className="w-5 h-5 text-zenfoo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;