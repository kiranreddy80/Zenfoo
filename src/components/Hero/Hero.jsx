import React from 'react';
import MainBanner from './MainBanner';

const DeliveryBanner = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ⚡ FASTEST DELIVERY
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Groceries in
              <span className="text-green-600"> 10 Minutes</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              Fresh vegetables, fruits, snacks & more delivered to your doorstep in just 10 minutes. Order now and experience lightning-fast delivery!
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">10 Min Delivery</p>
                  <p className="text-xs text-gray-500">Lightning Fast</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Fresh Products</p>
                  <p className="text-xs text-gray-500">Quality Assured</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Best Prices</p>
                  <p className="text-xs text-gray-500">Great Deals</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto md:mx-0">
              Start Shopping Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
                  alt="Fast Delivery"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              
              {/* Floating Timer Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl p-4 z-20 animate-bounce">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10</div>
                  <div className="text-xs text-gray-600 font-semibold">MINUTES</div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Decoration at Bottom */}
      <div className="mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
      
    </section>
     <MainBanner />
   </div>
  );
};

export default DeliveryBanner;