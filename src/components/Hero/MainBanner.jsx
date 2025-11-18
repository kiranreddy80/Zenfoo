import React, { useState, useEffect } from 'react';

const PromoBannerCarousel = () => {
  const banners = [
    
    {
      id: 2,
      title: "Fruits & Veggies",
      subtitle: "Fresh from the farm, delivered in minutes",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=400&fit=crop",
      ctaText: "Explore",
     
    },
    {
      id: 4,
      title: "Essential Home Care",
      subtitle: "Flat 30% OFF on Cleaners & Detergents",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=400&fit=crop",
      ctaText: "Shop Now",
      
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isAutoPlaying, currentIndex]); // Re-run effect if currentIndex changes

  return (
    // Main container with relative positioning for controls
    <section 
      className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-200"
      onMouseEnter={() => setIsAutoPlaying(false)} // Pause on hover
      onMouseLeave={() => setIsAutoPlaying(true)}  // Resume on leave
    >
      {/* Inner container for sliding banners */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            {/* Background Image with Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.backgroundColor} opacity-80`}></div>
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            
            {/* Text and CTA Content */}
            <div className="absolute inset-0 flex items-center justify-start p-6 md:p-10">
              <div className="text-white max-w-md">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl mb-4 drop-shadow-md">
                  {banner.subtitle}
                </p>
                <button className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                  {banner.ctaText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PromoBannerCarousel;