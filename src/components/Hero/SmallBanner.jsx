import React from 'react';

const SmallBanner = ({ banner }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group">
      {/* Background Image */}
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
        <p className="text-white/90 text-sm mb-4">{banner.description}</p>
        <button className="bg-zenfoo-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 transform hover:scale-105">
          {banner.buttonText}
        </button>
      </div>
    </div>
  );
};

export default SmallBanner;