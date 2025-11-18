import React, { useState } from 'react';

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Mumbai, India');

  const locations = [
    'Mumbai, India',
    'Delhi, India', 
    'Bangalore, India',
    'Hyderabad, India',
    'Chennai, India'
  ];

  return (
    <div className="relative">
      {/* Location & Delivery Info */}
      <div className="flex items-center space-x-2 cursor-pointer" 
           onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center space-x-1 text-zenfoo-dark">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium text-sm">{selectedLocation}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Delivery Time */}
      <div className="text-xs text-zenfoo-accent font-semibold mt-1">
        Delivery in 10 min 🚀
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-zenfoo-muted/30 z-50">
          <div className="p-3">
            <h3 className="font-semibold text-zenfoo-dark mb-2">Select Location</h3>
            {locations.map((location, index) => (
              <div
                key={index}
                className={`p-2 rounded-md cursor-pointer hover:bg-zenfoo-muted/20 ${
                  selectedLocation === location ? 'bg-zenfoo-primary/10 text-zenfoo-primary' : ''
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsOpen(false);
                }}
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;